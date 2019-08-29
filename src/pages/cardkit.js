import React, { Component } from 'react'
import configuration from '../configuration'
import layers from '../config/layers'
import layouts from '../config/layouts'


export default class Cardkit extends Component {
  constructor (props) {
    super(props)

    this.checkForCardkit = this.checkForCardkit.bind(this)
    this.checkForCardkit = this.checkForCardkit.bind(this)
  }

  checkForCardkit () {
    console.log('checking...')
    if (window.CardKit && window.CardKitDOM) {
      this.startCardkit()
    } else {
      setTimeout(() => {
        this.checkForCardkit()
      }, 200)
    }
  }

  startCardkit () {
    console.log('stating cardkit...')
    console.log(window.config, configuration)
    console.log({ layers })
    // Initialise CardKit
    
    const cardkitInstance = new window.CardKit(window.config.configuration, {
      // themes: window.configuration.themes,
      layouts: window.layouts,
      // templates: [], // window.config.templates,
    })

    // Initialise Renderer
    const renderer = new window.CardKitDOM(cardkitInstance)
    // OR To render the editing UI
    // TODO -> change to element ref?
    renderer.renderUI('ui')
  }

  componentDidMount () {
    console.log('mounted!', this.props)
    console.log(configuration)
    // const config = configuration
    // config.layers = this.props.template.layerItems.map(l => layers[l])
    // config.layers = configuration.layers // this.props.layers
    window.config = configuration

    console.log('?', this.props.template.layouts)
    window.layouts = !this.props.template.layouts
      ? configuration.layouts
      : this.props.template.layouts
        // .filter(layout => !!layouts[layout])
        .reduce((output, layout) => {
          const update = output
          update[layout] = layouts[layout]
          return update
        }, {})

    window.config.configuration.layers = this.props.template.layerItems
      .filter(layer => !!layers[layer])
      .reduce((output, layer) => {
        const update = output
        console.log('layer', layer, layers[layer])
        update[layer] = layers[layer]
        return update
      }, {})
    this.checkForCardkit()
  }

  render () {
    return (
      <div id="ui"></div>
    )
  }
}
