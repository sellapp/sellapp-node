import assert from 'node:assert/strict';
import test from 'node:test';
import { createServer } from 'node:http';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { mkdtemp, cp, rm, readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
const exec = promisify(execFile);

test('exact documentation examples work through the packed public package', async () => {
  const readme = await readFile('README.md','utf8');
  const firstSource = await readFile('examples/first-request.mjs','utf8');
  assert.ok(readme.includes(firstSource.trim()), 'README must contain the exact executable source');
  const dir = await mkdtemp(path.join(tmpdir(), 'sellapp-docs-'));
  const fixture = JSON.parse(await readFile(new URL('./documentation-product.json', import.meta.url), 'utf8'));
  let mode = 'first';
  const requests = [];
  const server = createServer((req, res) => {
    assert.equal(req.headers.authorization, 'Bearer docs-dummy');
    assert.equal(req.headers['x-store'], 'docs-store');
    const url = new URL(req.url, 'http://127.0.0.1');
    assert.equal(url.pathname, '/v2/products');
    requests.push(url.searchParams.get('page') ?? '1');
    res.setHeader('Content-Type', 'application/json');
    if (mode === 'error') {
      res.writeHead(401);
      res.end(JSON.stringify({type:'authentication_error',code:'unauthenticated',message:'Dummy key rejected',status:401,request_id:'req-docs'}));
    } else {
      const page = Number(url.searchParams.get('page') ?? 1);
      res.end(JSON.stringify({data: mode === 'empty' || (mode === 'pages' && page === 2) ? [] : [{...fixture,id:page}],meta:{current_page:page,last_page:mode === 'pages' ? 3 : 1},links:{next:mode === 'pages' && page < 3 ? '?page=' + (page + 1) : null}}));
    }
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  try {
    const packed = await exec('npm', ['pack', '--ignore-scripts', '--json', '--pack-destination', dir]);
    const info = JSON.parse(packed.stdout)[0];
    for (const name of ['README.md','LICENSE.txt','NOTICE.txt','docs/usage.md','docs/methods.md']) {
      assert.ok(info.files.some(file => file.path === name), name + ' missing from package');
    }
    assert.ok(!info.files.some(file => file.path.startsWith('test/') || file.path.startsWith('examples/')));
    await writeFile(path.join(dir,'package.json'), JSON.stringify({private:true,type:'module'}));
    await exec('npm',['install','--ignore-scripts','--no-audit','--no-fund',path.join(dir,info.filename)],{cwd:dir});
    await cp('examples', path.join(dir,'examples'), {recursive:true});
    const env = {...process.env,SELLAPP_API_KEY:'docs-dummy',SELLAPP_STORE:'docs-store',SELLAPP_API_BASE_URL:'http://127.0.0.1:' + server.address().port};
    const run = file => exec(process.execPath,['examples/' + file + '.mjs'],{cwd:dir,env});
    assert.match((await run('first-request')).stdout, /1 Design kit/);
    mode = 'empty';
    assert.match((await run('first-request')).stdout, /No products yet/);
    mode = 'pages'; requests.length = 0;
    assert.match((await run('pagination')).stdout, /3 Design kit/);
    assert.deepEqual(requests,['1','2','3']);
    mode = 'error';
    await assert.rejects(run('errors'), error => error.code === 1 && /401 unauthenticated Dummy key rejected req-docs/.test(error.stderr));
    await assert.rejects(exec(process.execPath,['examples/first-request.mjs'],{cwd:dir,env:{...env,SELLAPP_API_BASE_URL:''}}), /Set SELLAPP_API_BASE_URL/);
  } finally {
    await new Promise(resolve => server.close(resolve));
    await rm(dir,{recursive:true,force:true});
  }
});
