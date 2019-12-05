import React, { Component } from 'react'
import Styled from 'styled-components'

import Layout from './components/layout'
import TemplateGrid from './pages/template-grid'
import Cardkit from './pages/cardkit'
import googleAnalytics from './functions/google-analytics'
import templates from './config/templates'
import { thisExpression } from '@babel/types'


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
      templates: JSON.parse(JSON.stringify(templates)),
      layout: null, // 'square',
      showLayout: null
    }

    this.setCardkit = this.setCardkit.bind(this)
    this.backToGallery = this.backToGallery.bind(this)
    this.filterLayouts = this.filterLayouts.bind(this)
  }

  setCardkit (config, el) {
    // Sets the options to use in CardKit
    // Also triggers CardKit render
    console.log('\n\n\n\n\nTemplate to set cardkit', {config}, '\n\n\n\n\n\n')
    // const template = JSON.parse(JSON.stringify(config.template))
    const options = {
      cardkit: config.template,
      title: `Editor / ${config.template.info.title}`,
      layout: config.layout, // '16x9',
    }
    console.log(`${config.template.info.title} - ${config.layout}`, { options })
    this.setState(options)
    /* eslint-disable */
    ga('send', {
      hitType: 'event',
      eventAction: 'template-set',
      eventCategory: 'CardKit templates',
      eventLabel: `${config.template.info.title} - ${config.layout}`,
      // hitCallback: () => console.log('event sent', config.template.info.title),
    })
    /* eslint-enable */
  }
  backToGallery () {
    /* eslint-disable */
    location.reload()
    /* eslint-enable */
  }

  filterLayouts (layout) {
    // Filters the layouts shown in new granular grid
    if (!layout) {
      this.setState({
        templates,
        showLayout: layout,
      })
      return
    }
    const layoutSet = Object.keys(templates)
      .filter(key => {
        if (!layout) return true
        return templates[key].layerItems[layout]
      })
      .reduce((output, key) => {
        const update = output
        update[key] = templates[key]
        return update
      }, {})
    this.setState({
      templates: layoutSet,
      showLayout: layout,
    })
  }

  componentDidMount () {
    googleAnalytics.setup('UA-144546012-1')
    // console.log({ templates })
  }

  render () {
    return (<Frame>
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
        ? <Cardkit
            template={ this.state.cardkit }
            layout={ this.state.layout }
          />
        :
        <Layout>
          <TemplateGrid
            setCardkit={ this.setCardkit }
            templates={ this.state.templates }
            showLayout={ this.state.showLayout }
            filterLayouts={ this.filterLayouts }
          />
        </Layout>
    }

    </Frame>
    )
  }
}

export default App




const Frame = Styled.article`
  background: #eee;
`


// window.config = config

// window.layouts = config.layouts

// function startCardKit () {
  console.log('stating...')
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
  console.log('checking...')
//   if (window.CardKit && window.CardKitDOM) {
//     startCardKit()
//   } else {
//     setTimeout(() => {
//       checkForCardkit()
//     }, 200)
//   }
// }

// checkForCardkit()