# About
This is a basic integration of NextJS + ExpressJS.

Such a setup may be useful if you wish to have more control over your backend logic and your routing, since NextJS's default behavior is to control the routing.

This setup allows defining routes for HTTP endpints, or custom routing logic for pages (e.g. perhaps you wish to render a different page on the same route depending on the circumstances).

I tried to make the code as barebones as possible, but in a way that includes an exhibit of some common patterns of
actually using the template. The idea is to delete most of this code to actually start a project with this template:
all the pages except for `main.jsx` should be deleted, as well as the demo routes in `app/route/pages.js` and `app/route/api.js`. The rest should be a minimal skeleton.

# Running
This project is set up to run HTTPS. The instructions to set up your certificates in localhost are below.

It's recommended to use yarn with this project, as `yarn.lock` is commited: `yarn install`. See https://classic.yarnpkg.com/en/docs/install/#mac-stable

The project relies on the `dotenv` package, so you'll need to create a `.env` file at the root of this project and add some environment variables into it. Your .env file should env up looking something like this - be sure to follow the instructions in the next sextion for setting up the SSL certificates:

```bash
NODE_ENV=development
EXPRESS_PORT=3333

SSL_PRIVATE_KEY_PATH = mkcert/localhost-key.pem
SSL_CERTIFICATE_PATH = mkcert/localhost.pem
SSL_ROOTCA_PATH = mkcert/rootCA-key.pem
```

After all is ready, just do
```bash
yarn start
```

# Localhost HTTPS
(From: https://web.dev/how-to-use-local-https/)


I recommend setting up certificates with mkcert. It's really simple:

```bash
# 1. Install mkcert
brew install mkcert   # For MacOS; for Linux - you can e.g. install brew https://docs.brew.sh/Homebrew-on-Linux
brew install nss      # for Firefox
mkcert -install

# 2. Issue certifivates
mkdir mkcert          # Inside the root of this project
cd mkcert
mkcert localhost
```

Then set environment variables for your new cert:
```bash
# 3. Add certificate to a .env file at the root of this project
SSL_PRIVATE_KEY_PATH = mkcert/localhost-key.pem
SSL_CERTIFICATE_PATH = mkcert/localhost.pem
```

That's not the end of the story if you want to run tests against your API outside the browser, though.

## Running tests with local HTTPS
Even though mkcert certificates are a step up from being self-signed, since there's a self-issued certificate authority that signed them, the CA (Certificate Authority) is not recognizable by standard HTTPS clients (e.g. via `fetch` or node's `https` module): they will error out with UNABLE_TO_VERIFY_LEAF_SIGNATURE`, saying `Error: unable to verify the first certificate.

To bypass this, a client can be told to accept certificates issued by a certain certificate authority. CAs are identified via public keys: each certificate issued by a CA is signed with its private key.

So we need to pass the public key into the client, to let them know to trust that CA; `fetch` and `https` both support this via the `{ca: public_key_aka_certificate}` option.

Now we just need to find where mkcert put the certificates for its CA:
```bash
mkcert -CAROOT
```

E.g. on a mac it will print something like:
```bash
/Users/alexey/Library/Application Support/mkcert
```
Which has
```bash
% ls '/Users/alexey/Library/Application Support/mkcert'
rootCA-key.pem rootCA.pem
```

`rootCA.pem` is the certificate (you can figure that out because it's not being called a key). Either set the `SSL_ROOTCA_PATH` to the global path, or copy the certificate into the `mkcert` directory - since it's not committed anyway, and use that path in your .env:

```bash
cp '/Users/alexey/Library/Application Support/mkcert/rootCA.pem' 'mkcert/rootCA.pem'
# The add this to your .env
SSL_ROOTCA_PATH = mkcert/rootCA-key.pem
```

# Credits
The favicon included is licenced under the Creative Commons license. I got it from https://thenounproject.com/term/peace/2457018/
