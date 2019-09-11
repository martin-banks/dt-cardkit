import React, { Component } from 'react'
import configuration from '../configuration'
import layers from '../config'
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
    console.log('\n\n--------------\n')
    console.log('starting cardkit...')
    console.log(window.config, configuration)
    console.log({ layers })
    console.log('PROPS', this.props)
    console.log('\n--------------\n\n')
    // Initialise CardKit
    const config = JSON.parse(JSON.stringify(window.config.configuration, 'utf8', 2))
    console.log({ config })
    // config.useLayout = 'square'
    const cardkitInstance = new window.CardKit(
      config, // window.config.configuration,
      {
        // themes: window.configuration.themes,
        layouts: window.layouts,
        defaultLayout: this.props.layout, // '4x3',
        // activeLayout: '4x3',
        // templates: this.props.template,
        // templates: [], // window.config.templates,
      }
    )

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

    // window.config.configuration.layers = this.props.template.layerItems
    //   .filter(layer => !!layers[layer])
    //   .reduce((output, layer) => {
    //     const update = output
    //     console.log('layer', layer, layers[layer])
    //     update[layer] = layers[layer]
    //     return update
    //   }, {})
    const layerItemKeys = Object.keys(this.props.template.layerItems)
    window.config.configuration.layers = this.props.template.layerItems[layerItemKeys[0]]
      .filter((layout, i, arr) => {
        // console.log({ arr, layout })
        // console.log('layers', layers)
        // console.log('layer filter', this.props.template.layerItems[layout])
        return !!layers[layout.name]
      })
      .reduce((output, layer) => {
        // console.log('starting reduce')
        // console.log('layer', layer, layers[layer.name])
        const update = output
        const layerClone = JSON.parse(JSON.stringify(layers[layer.name]))
        update.push(layerClone)
        return update
      }, [])
    window.config.configuration.template = this.props.template
    this.checkForCardkit()
  }

  render () {
    return (
      <div id="ui"></div>
    )
  }
}
