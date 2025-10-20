# @narro/inlink-api

Easily query the Narro inlink API for OpenGraph and metadata extraction from any web page, using a deployed endpoint.

## Installation

```bash
npm install @narro/inlink-api
```

## Usage

```typescript
import { queryInlinkApi } from '@narro/inlink-api';

async function main() {
  const result = await queryInlinkApi({
    endpoint: 'https://your-deployment.com/api',
    url: 'https://example.com',
    apiToken: 'YOUR_API_TOKEN' // optional, if your API is protected
  });
  console.log(result.status); // HTTP status code from your endpoint
  console.log(result.data);   // The metadata response object or error
}
```

## Options
- `endpoint` (**required**): Your inlink API host URL (should include `/api` or equivalent path)
- `url` (**required**): The URL to extract metadata from
- `apiToken` (optional): API token for your endpoint. Will be sent as a Bearer token in the `Authorization` header

## Authentication
- If your endpoint requires authentication, pass the token as the `apiToken` parameter. The client will send it in the HTTP Authorization header.

## License
ISC
