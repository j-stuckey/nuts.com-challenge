## Starting the App

To run the development server:

```bash
npm run dev
```

To run the production server:
```bash
npm run build
npm start
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see
the result.

## API Token

There is no need to manually add the API token to `.env`, the app auto-renews the API token in `lib/http.js` using `getNewToken()`. If you'd like to renew the token manually from Get Token API, set:

```
ACCESS_TOKEN=your-new-token
```

in a `.env` file.

## Product Modal

The content of the modal that opens after clicking a product is scrollable, so some content may appear below the break.
