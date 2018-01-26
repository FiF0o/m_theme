# m_theme

## Description
Animation using p5.js

## Scripts
- `npm run dev`
- static version: `npm run build`

## Deploy
[now](https://zeit.co/) is required for deploying.

## ssl certificates and https

### generate private key
`openssl genrsa -aes128 -out private.key 2048`
⚠️ *never share your private key* ⚠️

### you can store your passphrase in the `.env` file if needed and then `source .env`

### generate public key from private key
`openssl rsa -pubout -in private.key -out public.key`

### generate certificate signing request
`openssl req -new -key private.key -out request.csr`

### sign certificate with private key
`openssl x509 -req -in request.csr -signkey private.key -out certificate.crt -days 365` if you want to have the certificate valid for a year for example.
