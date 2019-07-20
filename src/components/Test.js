import React, { Component } from 'react'

class Test extends Component {
  constructor(props){
    super(props)
    this.state = {
      a:10
    }
    console.log("constructor");
  }

  componentDidMount(){
    console.log("didmount")
    this.setState({
      a: 20
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("didupdate")
  }

  render() {
    console.log("render")
    return (
      <div>

      </div>
    )
  }
}

export default Test;