import React from 'react'
import Layout from '../view/layout.jsx'

export default function Main(props) {
  return <Layout>
    <h2> Welcome to the main page </h2>
    <div style={{fontSize:"24px"}}>The main page is rendered via a custom route in the NextjsExpressRouter.</div>
    <p style ={{fontsize:"24px"}}>
      There are two routes defined: "/" and "/my_special_page". There is also a default routing fallback that
      renders the page with the filename of the route, which runs if no custom route is matched.
    </p>
    <p style ={{fontsize:"24px"}}>
      <b>my_special_page</b> is a demo of special-cased routing that doesn't fit inside of NextJS's standard
      routing style. It renders a special page for integer subroutes, that goes to a page that can view and
      increment an integer that's stored on the server through the express API.
    </p>
    <h3> Exhibit A </h3>
    <a style={{fontSize: "36px"}} href="/my_special_page/5"> Test special routing + API </a>
    <h3> Exhibit B </h3>
    <a style={{fontSize: "36px"}} href="/my_special_page/a_special_string"> Test special routing </a>
    <h3> Exhibit C </h3>
    <a style={{fontSize: "36px"}} href="/nextjs_default_routing"> Test the fallback to NextJS's default routing mechanism </a>
  </Layout>
}
