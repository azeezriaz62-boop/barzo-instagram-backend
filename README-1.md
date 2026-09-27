# Barzo Instagram Backend

Small Node.js/Express backend for the Barzo Instagram integration.

## Endpoints

- `GET /` - online check
- `GET /health` - health check
- `GET /auth/instagram/callback` - Instagram OAuth redirect URL
- `GET /webhooks/instagram` - Meta webhook verification
- `POST /webhooks/instagram` - Instagram webhook receiver

## Render

Use a Render **Web Service**.

Build command:
`npm install`

Start command:
`npm start`

Render provides a public HTTPS `onrender.com` URL.

After deployment, the Meta Instagram Login Redirect URL will be:

`https://YOUR-SERVICE.onrender.com/auth/instagram/callback`

Webhook Callback URL will be:

`https://YOUR-SERVICE.onrender.com/webhooks/instagram`

Set Render environment variable:

`WEBHOOK_VERIFY_TOKEN=choose-your-own-secret`

Do not put Meta app secrets or access tokens in this repository.
