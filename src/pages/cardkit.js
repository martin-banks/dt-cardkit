import React, { Component } from 'react'


export default class Cardkit extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    console.log('mounted!', this.props)
    // TODO
    // Do cardkit stuff
  }

  render () {
    return (
      <div id="cardkit-ui"></div>
    )
  }
}
