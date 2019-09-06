import React, { Component } from 'react'
import Styled from 'styled-components'

import templates from '../config/templates'
import placeholder from '../config/templates/previews/placeholder.jpg'

console.log({ templates })

class TemplateGrid extends Component {
  constructor (props) {
    super(props)
    this.state = {
      templates: [],
    }
  }

  componentDidMount () {
    const allTemplates = Object.keys(templates)
    const templateLayouts = allTemplates.reduce((output, templateKey) => {
      const update = output
      Object.keys(templates[templateKey].layerItems)
        .forEach(key => {
          update.push({
            layout: key,
            template: templateKey,
            thumb: templates[templateKey].layerItems[key].preview
          })
        })
      return update
    }, [])

    this.setState({ templates: templateLayouts })
  }

  render () {
    return (<Layout>
       {/* <Header>
         <h1>Templates</h1>
       </Header> */}
      <Grid>
        {
          Object.keys(templates).map((k, i) => (
            <Template
              onClick={ this.props.setCardkit.bind(null, templates[k]) }
              key={ `template-${i}` }
            >
              <Preview
                src={ templates[k].info.preview || placeholder }
                alt={ `${templates[k].title} preview` }
              />
              <h3>{ templates[k].info.title }</h3>
            </Template>
          ))
        }
      </Grid>

      <hr />

      <Grid>
        {
          this.state.templates.map((template, i) => (
            <Template
              // onClick={ this.props.setCardkit.bind(null, template) }
              key={ `template-${i}` }
            >
              <Preview
                src={ template.thumb || placeholder }
                alt={ `${template.template}-${template.layout}-thumb` }
                />
              <h6>{ template.layout }</h6>
              <h3>{ template.template }</h3>
            </Template>
          ))
        }
      </Grid>

      <pre>
        Pay no attention to the man behind the curtain: 
        <code>
          { JSON.stringify(this.state.templates, 'utf8', 2) }
        </code>
      </pre>

    </Layout>
    )
  }
}

export default TemplateGrid


const Layout = Styled.article`
  display: block;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 0;
`

const Grid = Styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 4px;
`

const Template = Styled.div`
  position: relative;
  padding: 1rem;
  border: solid 1px #ccc;
  cursor: pointer;
  overflow: hidden;
`

const Preview = Styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin: 0;
  margin-bottom: 2rem;
`
