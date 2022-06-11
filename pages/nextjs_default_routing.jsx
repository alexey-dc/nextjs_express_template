import React from 'react'
import Layout from '../view/layout.jsx'

export default function NextjsDefaultRouting(props) {
  return <Layout>
    <h2> Welcome to the the default routing page </h2>
    <a href=""> See page source </a>
    <p>THis route is not defined in the <a href="">custom page routing logic</a>. </p>
    <p> However, there is a fallback <a href="">route</a> that defaults to NextJS's built-in routing: the file name is the page route. </p>
    <a href="/"> Go back </a>
  </Layout>
}
