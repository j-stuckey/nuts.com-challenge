## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see
the result.

There is no need to update the .env, the app auto-renews the API token in
`lib/http.js` using `getNewToken()`. If you'd like to renew the token manually
from Get Token API, set:

```
ACCESS_TOKEN=exampletoken
```

in a `.env` file.

## Product Modal

The content of the modal that opens after clicking a product is scrollable, so
some content may appear below the break.
