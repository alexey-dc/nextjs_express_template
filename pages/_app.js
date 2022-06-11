// https://nextjs.org/docs/basic-features/built-in-css-support
import '../public/main.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
