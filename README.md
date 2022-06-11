# About
This is a basic integration of NextJS + ExpressJS.

One important reason to use a server like this is architectural simplicity - it allows maintaining only 1 deploy.

For a mature project, it's common to embrace a distributed setup: for example, running the front end, API, socket server, worker system - on different services. A younger project's goals are often to prove out a product idea; starting the project out as a monolith can help improve velocity and ship bug-free code - by side-stepping some of the [complexities of distributed systems](https://aws.amazon.com/builders-library/challenges-with-distributed-systems/).

The code is intended to be barebones, but it does exhibit usage of the template. To actually use it as the base of a project, you probably want to delete most of the sample code:
- Delete all pages except `main.jsx`
- Delete the demo routes in `app/route/pages.js` and `app/route/api.js`
- Delete`app/data`.

There's a tutorial for this project, which can be found here https://dev.to/alexeydc/express-nextjs-sample-tutorial-integration-485f

# Before running
The project relies on the `dotenv` package, so you'll need to create a `.env`. It's common to place secrets in `.env` - so it is `.gitignore`d in this project. A `.env-example` is provided with the barebones setup that does not require any secrets. It's a good starting point, so you can do:

```bash
cp .env-example .env
```

Redundantly, here's an example of `.env` contents for this project:
```bash
NODE_ENV=development
EXPRESS_PORT=3333
```

# Running
`pnpm-lock.yaml` is commited, so the default way to run this project is with `pnpm`. See https://pnpm.io/installation if you're not already using it.

```bash
# For pnpm vs yarn vs npm, see https://pnpm.io/benchmarks
pnpm install
pnpm start
```

# HTTP vs HTTPS
The code is set up to easily run local HTTP or HTTPS.

If you're debating which one to use for yourself, here is a good article that helps establish a decision boundary:
https://web.dev/when-to-use-local-https

For example, you may have to use a custom local hostname if you're working OAuth - some OAuth providers don't allow using localhost as a redirect URL (e.g. [PayPal does not allow this](https://stackoverflow.com/questions/14436483/setting-paypal-return-url-to-localhost)).

## Localhost HTTP
If you just run the code as-is, it will run on HTTP, no additional changes or setup necessary.

## Localhost HTTPS
To enable HTTPS locally, you'll need to change line 32 in `app/server.js`:
```javascript
// Before
this.server = httpServer(this.express)
// After
this.server = httpsServer(this.express)
```

One of the easiest ways to use HTTPS locally is with mkcert. It's really simple:

```bash
# 1. Install mkcert
# Mac
brew install mkcert
brew install nss      # for Firefox
# Linux: https://github.com/FiloSottile/mkcert#linux
mkcert -install

# 2. Issue certificates
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

If you want to run tests against your API outside the browser, you'll want the additional setup steps below.

### Running tests with local HTTPS (not necessary to run this project)
Even though mkcert certificates are a step up from being self-signed, since there's a self-issued certificate authority that signed them, the CA (Certificate Authority) is not recognizable by standard HTTPS clients (e.g. via `fetch` or node's `https` module): they will error out with `UNABLE_TO_VERIFY_LEAF_SIGNATURE`, saying `Error: unable to verify the first certificate`.

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

