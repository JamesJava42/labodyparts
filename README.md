# AutoBodyParts Hub

Guided auto body parts ordering app with zone-based part selection and backend email notification.

## UX Changes Implemented

- Vehicle picker is now **filter-first** (`Year`, `Make`, `Type`, search) instead of showing all vehicles as open cards.
- Cleaner flow: `Vehicle -> Zone -> Part -> Visual Confirm -> Add to Order`.
- Car preview highlights selected zone (`front`, `rear`, `left`, `right`, `top`, `bottom`) for confirmation.
- Mobile optimized: better stacking, touch targets, full-width cart on phones.

## Why You Saw `501 Unsupported method ('POST')`

You were loading frontend from Python static server (`http://127.0.0.1:8080`), which cannot handle API POST routes.

- `SimpleHTTPServer` serves files only.
- `POST /api/orders` must go to Node backend.

Code now includes local fallback: if page is on `8080`, order submit retries `http://127.0.0.1:8090/api/orders`.

## Local Run (Correct)

1. Install dependencies:

```bash
npm install
```

2. Optional env setup:

```bash
cp .env.example .env
```

3. Configure SMTP in `.env` for real emails:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM` (optional)
- `NOTIFY_EMAIL` (default is `jamesreddy1505@gmail.com`)

4. Start app:

```bash
npm start
```

5. Open:

`http://127.0.0.1:8090`

## Email Notification Target

Order submit sends notification to:

`jamesreddy1505@gmail.com`

If SMTP is not configured, backend returns `emailSent: false` and logs order in `log-only` mode.

## Backend Endpoints

- `POST /api/orders` - submit order and send email notification
- `GET /health` - health status (Node server mode)

## Deploy to Vercel

This repo includes a Vercel serverless function at `api/orders.js`.

1. Push code to GitHub.
2. In Vercel: **New Project** -> import repo.
3. Framework preset: `Other`.
4. Add Environment Variables in Vercel project settings:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`
- `NOTIFY_EMAIL=jamesreddy1505@gmail.com`

5. Deploy.
6. Test from production domain:

- Open app URL.
- Submit sample order.
- Verify function logs + email inbox.

On Vercel, frontend calls `/api/orders` directly (same domain).
