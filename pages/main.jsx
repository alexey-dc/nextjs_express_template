import React from 'react'
import Layout from '../view/layout.jsx'

export default function Main(props) {
  return <Layout>
    <h1> NextJS + ExpressJS demo </h1>
    <h2> Welcome to the main page </h2>
    <p>It features links to the rest of the pages, which demo some common use cases of this setup.</p>
    <p>It is rendered on the root via a custom <a target="_blank" href="https://github.com/alexey-dc/nextjs_express_template/blob/main/app/routes/pages.js#L39">express route</a>.</p>
    <div style={{marginBottom: "4vh"}}/>
    <ul className='large_li'>
      <li> <a href="/preload_data"> Preloading data into pages </a> </li>
      <li> <a href="/load_data_via_api"> Loading data after page load </a> </li>
      <li> <a href="/large_or_small/5"> Special routing </a> </li>
      <li> <a href="/nextjs_default_routing"> Default/fallback NextJS routing </a> </li>
    </ul>
  </Layout>
}
