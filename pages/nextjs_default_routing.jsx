import React from 'react'
import Layout from '../view/layout.jsx'

export default function NextjsDefaultRouting(props) {
  return <Layout>
    <h2> Welcome to the the default routing page </h2>
    <a target="_blank" href="https://github.com/alexey-dc/nextjs_express_template/blob/main/pages/nextjs_default_routing.jsx"> See page source </a>
    <p>This route is not defined in the <a target="_blank" href="https://github.com/alexey-dc/nextjs_express_template/blob/main/app/routes/pages.js#L14">custom page routing logic</a>. </p>
    <p>However, there is an <a target="_blank" href="https://github.com/alexey-dc/nextjs_express_template/blob/main/app/routes/pages.js#L42">express route</a> that falls back to NextJS's built-in routing, i.e. the file name is the page route. </p>
    <a href="/"> Go back </a>
  </Layout>
}
