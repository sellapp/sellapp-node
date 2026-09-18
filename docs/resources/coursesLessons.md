# coursesLessons

[All resources](../methods.md)

## create

Create a course lesson

[API reference](https://sell.app/docs/api/courses/manage-course-lessons) · Effect: **write**

```typescript
async create(options: CreateOptions): Promise<SdkCreateCourseLessonResponseValue201ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `CreateOptions` | Yes |

Returns: `Promise<SdkCreateCourseLessonResponseValue201ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.coursesLessons.create({
  "course": "string_example",
  "section": 1,
  "title": "Welcome",
  "type": "text",
  "content": "Welcome to Launch Lab.",
  "isPublished": false
});
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": []
  },
  {
    "oauthAccessToken": [
      "admin"
    ],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 201, 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## replace

Update a course lesson

[API reference](https://sell.app/docs/api/courses/manage-course-lessons) · Effect: **write**

```typescript
async replace(options: ReplaceOptions): Promise<SdkReplaceCourseLessonResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `ReplaceOptions` | Yes |

Returns: `Promise<SdkReplaceCourseLessonResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.coursesLessons.replace({
  "course": "string_example",
  "lesson": 1,
  "title": "Welcome",
  "isPublished": false
});
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": []
  },
  {
    "oauthAccessToken": [
      "admin"
    ],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## update

Update a course lesson

[API reference](https://sell.app/docs/api/courses/manage-course-lessons) · Effect: **write**

```typescript
async update(options: UpdateOptions): Promise<SdkUpdateCourseLessonResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `UpdateOptions` | Yes |

Returns: `Promise<SdkUpdateCourseLessonResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.coursesLessons.update({
  "course": "string_example",
  "lesson": 1,
  "title": "Welcome",
  "isPublished": false
});
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": []
  },
  {
    "oauthAccessToken": [
      "admin"
    ],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## delete

Delete a course lesson

[API reference](https://sell.app/docs/api/courses/manage-course-lessons) · Effect: **consequential**

```typescript
async delete(options: DeleteOptions): Promise<void>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `DeleteOptions` | Yes |

Returns: `Promise<void>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.coursesLessons.delete({
  "course": "string_example",
  "lesson": 1
});
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": []
  },
  {
    "oauthAccessToken": [
      "admin"
    ],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## reorder

Reorder course lessons

[API reference](https://sell.app/docs/api/courses/reorder-course-lessons) · Effect: **consequential**

```typescript
async reorder(options: ReorderOptions): Promise<SdkReorderCourseLessonsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `ReorderOptions` | Yes |

Returns: `Promise<SdkReorderCourseLessonsResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.coursesLessons.reorder({
  "course": "string_example",
  "resources": [{"id": 601, "sectionId": 501}, {"id": 602, "sectionId": 501}]
});
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": []
  },
  {
    "oauthAccessToken": [
      "admin"
    ],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

