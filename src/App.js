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


const Header = Styled.header`
  display: block;
  position: relative;
  height: 100px;
  color: black;
  background: #111;
  h1 {
    font-size: 24px;
    color: white;
  }
`

const Back = Styled.button`
  background: none;
  border: solid 1 px white;
  border-radius: 100px;
  font-size: 18px;
  /* padding: 0 20px; */
  height: 100%;
  width: 100%;
  color: white;
  &:hover {
    background: gold;
    color: black;
  }
`

const HeaderWrapper = Styled.div`
  margin: 0 auto;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 200px;
  height: 100%;
`

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cardkit: null,
      title: 'Template gallery',
    }

    this.setCardkit = this.setCardkit.bind(this)
    this.backToGallery = this.backToGallery.bind(this)
  }

  setCardkit (template, el) {
    this.setState({
      cardkit: template,
      title: `Editor / ${template.info.title}`,
    })
  }
  backToGallery () {
    /* eslint-disable */
    location.reload()
    /* eslint-enable */
  }

  render () {
    return (<>
      <Header>
        <HeaderWrapper>
          <h1>{ this.state.title }</h1>
          {
            this.state.cardkit && <Back onClick={ this.backToGallery } >Back to Gallery</Back>
          }
        </HeaderWrapper>
      </Header>
    {
      this.state.cardkit
        ? <Cardkit template={ this.state.cardkit } />
        : <Layout><TemplateGrid setCardkit={ this.setCardkit } /></Layout>
    }

    </>
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