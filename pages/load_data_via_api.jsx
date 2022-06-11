import React from 'react'
import Layout from '../view/layout.jsx'
import Button from '../view/button.jsx'

const LoadDataViaApi = (props) => {
  const [value, setValue] = React.useState(null)
  const increment = React.useCallback(async () => {
    const response = await fetch("/api/increment", {method: 'POST', });
    const json = await response.json()
    setValue(json.i)
  })
  React.useEffect(() => {
    // Timeout to showcase loading state
    setTimeout(async () => {
      const response = await fetch("/api/get", {method: 'GET', });
      const json = await response.json()
      setValue(json.i)
    }, 2000)
  }, [])
  if(!value) {
    return <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <h1 style={{textAlign: "center", marginTop: "20vh"}}>
        Loading (artificially slowed, 2 seconds)...
      </h1>
    </div>
  }
  return <Layout>
    <h2>Data fetch after page load</h2>
    <a target="_blank" href="https://github.com/alexey-dc/nextjs_express_template/blob/main/pages/load_data_via_api.jsx"> See page source </a>
    <p> This page is loaded in several steps: </p>
    <ol>
      <li>Fetch the page</li>
      <li>Render loading state</li>
      <li>Fetch data</li>
      <li>Re-render page with data</li>
    </ol>
    <p>This is a common and useful pattern in modern applications, especially for Single Page Applications.</p>
    <p>It is also more complex. The aim of this project is to allow for simpler patterns that allow more efficient prototyping. See <a href="/preload_data">this example</a> for an alternative that is possible with this NextJS+Express combo setup.</p>
    <div className="f-row">
      <h2 style={{marginRight: "6vw"}}> {value} </h2>
      <Button  style={{width: "max(12vw, 60px)"}} onClick={increment}> + </Button>
    </div>
    <div style={{marginBottom: "2vh"}}/>
    <a href="/"> Back </a>
  </Layout>
  
}

export default LoadDataViaApi
