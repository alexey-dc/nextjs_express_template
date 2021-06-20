import React from 'react'
import Layout from '../view/layout.jsx'

export async function getServerSideProps({req, res}) {
  return {
    props: {
      value: req.params.special_value
    }
  }
}

export default function SpecialString(props) {
  return <Layout>
    <h2> Welcome to the the special string page </h2>
    <h3> The server told me that the sub-route is: </h3>
    <div style={{fontSize:"36px", marginBottom: "36px", color: "teal"}}>{props.value}</div>
    <a style={{fontSize: "36px"}} href="/"> Go back </a>
  </Layout>
}
