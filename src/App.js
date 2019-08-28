import React, { Component } from 'react'
import Styled from 'styled-components'

import Layout from './components/layout'
import TemplateGrid from './pages/template-grid'
import Cardkit from './pages/cardkit'


// function Cardkit () {
//   return <div>
//     <h1>This will be the cardkit page</h1>
//   </div>
// }


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cardkit: null,
    }

    this.setCardkit = this.setCardkit.bind(this)
  }

  setCardkit (template, el) {
    this.setState({ cardkit: template })
  }

  render () {
    return (<Layout>

    {
      this.state.cardkit
        ? <Cardkit template={ this.state.cardkit } />
        : <TemplateGrid setCardkit={ this.setCardkit } />
    }

    </Layout>
    )
  }
}

export default App





// window.config = config

// window.layouts = config.layouts

// function startCardKit () {
//   console.log('stating...')
//   // Initialise CardKit
//   var cardkit = new window.CardKit(window.config.configuration, {
//     themes: window.config.themes,
//     layouts: window.config.layouts,
//     templates: window.config.templates,
//   });
  
//   // Initialise Renderer
//   var renderer = new window.CardKitDOM(cardkit);

//   // OR To render the editing UI
//   renderer.renderUI('ui');
// }

// function checkForCardkit () {
//   console.log('checking...')
//   if (window.CardKit && window.CardKitDOM) {
//     startCardKit()
//   } else {
//     setTimeout(() => {
//       checkForCardkit()
//     }, 200)
//   }
// }

// checkForCardkit()