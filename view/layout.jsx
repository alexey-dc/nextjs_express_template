import React from 'react'
import Head from 'next/head'

const renderBack = (backPath) => {
  return <a style={{position: "fixed", fontSize: "3vh"}} href={backPath}> Back </a>
}

export default function Layout(props) {
  return <div>
    <Head>
      <title>NextJS+ExpressJS!</title>
      <meta name="description" content="Barebones nextjs+express setup"/>
      <meta name="keywords" content="nextjs,express"/>
      <meta name="author" content="Alexey Chernikov"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
    </Head>
      {props.backPath ? renderBack(props.backPath) : "" }
      <div style={{
        marginLeft: "20%",
        marginRight: "20%",
        paddingTop: "16px"
      }}>
      {props.children}
    </div>
  </div>
}
