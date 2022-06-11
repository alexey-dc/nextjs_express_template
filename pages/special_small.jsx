import React from 'react'
import Layout from '../view/layout.jsx'

export async function getServerSideProps({req, res}) {
  return {
    props: {
      value: parseInt(req.params.special_value)
    }
  }
}

export default function SpecialLarge(props) {
  return <Layout>
    <h3> Small value from link: {props.value} </h3>
    <a href=""> See page source </a>
    <p> The backend logic for this route renders a different page depending on the value. </p>
    <p> If the value >= 5, a <b>larger header</b> is rendered. </p>
    <div style={{marginBottom: "5vh"}}/>
    <div className="f-col">
      <a href="/"> Home </a>
      <div style={{marginBottom: "5vh"}}/>
      <div className="f-row f-j-space-between" style={{width: "max(40%, 256px)"}}>
        <a href={`/large_or_small/${props.value - 1}`}> Previous </a>
        <a href={`/large_or_small/invalid`}> Invalid </a>
        <a href={`/large_or_small/${props.value + 1}`}> Next </a>
      </div>
    </div>

  </Layout>
}
