import React from 'react'
import Layout from '../view/layout.jsx'

export async function getServerSideProps({req, res}) {
  return {
    props: {
      value: req.params.special_value
    }
  }
}

const InvalidValue = (props) => {
  return <Layout>
    <h1> Invalid value: '{props.value}'. </h1>
    <a target="_blank" href="https://github.com/alexey-dc/nextjs_express_template/blob/main/pages/invalid_value.jsx"> See page source </a>
    <p> The <a target="_blank" href="https://github.com/alexey-dc/nextjs_express_template/blob/main/app/routes/pages.js#L24">backend logic for this route</a> renders a different page depending on the value. </p>
    <p> Only integers are considered valid input. </p>
    <div className="f-col">
      <a href="/large_or_small/5"> Start counting </a>
      <div style={{marginBottom: "2vh"}}/>
      <a href="/"> Go back </a>
    </div>
  </Layout>
}


export default InvalidValue
