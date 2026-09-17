import fs from 'node:fs/promises';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
const directory = path.resolve(process.argv[2]);
const snippets = (
  await Promise.all(
    ['operation-examples.json', 'operation-variants.json'].map(async (file) =>
      JSON.parse(await fs.readFile(path.join(directory, 'docs', file), 'utf8')),
    ),
  )
).flat();
const target = path.join(directory, '.validation-consumer', 'operation-snippets');
await fs.mkdir(target, { recursive: true });
for (const snippet of snippets)
  await fs.writeFile(
    path.join(target, snippet.operationId + '-' + (snippet.exampleId ?? 'default') + '.ts'),
    snippet.content,
  );
await fs.writeFile(path.join(target, 'package.json'), '{"type":"module"}');
await fs.writeFile(
  path.join(target, 'tsconfig.json'),
  JSON.stringify({
    compilerOptions: {
      types: ['node'],
      typeRoots: [path.join(directory, 'node_modules/@types')],
      strict: true,
      noEmit: true,
      skipLibCheck: true,
      target: 'ES2022',
      module: 'NodeNext',
      moduleResolution: 'NodeNext',
    },
    include: ['*.ts'],
  }),
);
const result = spawnSync(
  process.execPath,
  [path.join(directory, 'node_modules/typescript/bin/tsc'), '-p', path.join(target, 'tsconfig.json')],
  { cwd: target, encoding: 'utf8' },
);
if (result.status !== 0) {
  await fs.mkdir(path.join(directory, '.validation-consumer'), { recursive: true });
  await fs.writeFile(
    path.join(directory, '.validation-consumer/node-snippet-errors.log'),
    result.stdout + result.stderr,
  );
  process.stderr.write(result.stdout + result.stderr);
  process.exit(result.status ?? 1);
}
await fs.rm(path.join(directory, '.validation-consumer/node-snippet-errors.log'), { force: true });
console.log(`Compiled ${snippets.length} operation snippets against the installed Node SDK.`);
