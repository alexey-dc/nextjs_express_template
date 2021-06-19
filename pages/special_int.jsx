import React from 'react'
import Layout from '../view/layout.jsx'

export default class extends React.Component {
  static async getInitialProps({ req, res }) {
    const locals = res.locals
    return {
      locals,
      pageValue: locals.value
    }
  }

  constructor(props) {
    super(props)
    this.state = {i: '?'}
    this.increment = async () => {
      const response = await fetch("/api/increment", {method: 'POST', });
      const json = await response.json()
      this.setState({i: json.i})
    }
  }

  componentDidMount() {
    fetch("/api/get").then(async (response) => {
      const json = await response.json()
      this.setState({i: json.i})
    })
  }

  render() {
    return <Layout>
      <h2> Welcome to the the special int page </h2>
      <div style={{fontSize: "28px", marginBottom: "16px"}}> Prop received: {this.props.pageValue} </div>
      <span style={{fontSize: "28px"}}>API value:</span> <span style={{fontSize: "48px"}}> <u> {this.state.i} </u> </span>
      <br/><br/>
      <button onClick={this.increment}> Increment </button>
      <h3> Refresh - and the bottom number stays persisted. Change the number in the URL - change the top number. </h3>

      <a style={{fontSize: "36px"}} href="/"> Go back </a>
    </Layout>
  }


}
