import React from 'react'
import Layout from '../view/layout.jsx'
import Button from '../view/button.jsx'

export async function getServerSideProps({req, res}) {
  return {
    props: {
      value: parseInt(res.pageParams.value)
    }
  }
}

const PreloadData = (props) => {
  const [value, setValue] = React.useState(props.value)
  const increment = React.useCallback(async () => {
    const response = await fetch("/api/increment", {method: 'POST', });
    const json = await response.json()
    setValue(json.i)
  })
  return <Layout>
    <h2>Preloaded data</h2>
    <a href=""> See page source </a>
    <p> The data for this page was fetched <a target="_blank" href="">as the page was loaded.</a></p>
    <p> It was <a target="_blank" href="">loaded into the page's state on the first load</a>, and is updated via subsequent API calls. </p>
    <p> It's <a target="_blank" href="">stored on the backend</a> - so it survives page refreshes (but not server restarts: the data is in memory).</p>
    <p> The alternative is to serve the page first, and have it fetch the data afterwards. See <a href="/load_data_via_api">this example</a> for that pattern. </p>

    <div className="f-row">
      <h2 style={{marginRight: "6vw"}}> {value} </h2>
      <Button  style={{width: "max(12vw, 60px)"}} onClick={increment}> + </Button>
    </div>
    <div style={{marginBottom: "2vh"}}/>
    <a href="/"> Back </a>
  </Layout>
}

export default PreloadData
