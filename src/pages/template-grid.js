import React, { Component } from 'react'
import Styled from 'styled-components'

// import templates from '../config/templates'
import placeholder from '../config/templates/previews/placeholder.jpg'
import layouts from '../config/layouts'
import { jsxClosingElement } from '@babel/types'

// console.log({ templates })

class TemplateGrid extends Component {
  constructor (props) {
    super(props)
    this.state = {
      templates: [],
    }
  }

  componentDidMount () {
    const allTemplates = Object.keys(this.props.templates)
    const templateLayouts = allTemplates.reduce((output, templateKey) => {
      const update = output
      Object.keys(this.props.templates[templateKey].layerItems)
        .forEach(key => {
          update.push({
            layout: key,
            template: templateKey,
            thumb: this.props.templates[templateKey].layerItems[key].preview
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
          Object.keys(this.props.templates).map((k, i) => (
            <Template
              onClick={ this.props.setCardkit.bind(null, this.props.templates[k]) }
              key={ `template-${i}` }
            >
              <Preview
                src={ this.props.templates[k].info.preview || placeholder }
                alt={ `${this.props.templates[k].title} preview` }
              />
              <h3>{ this.props.templates[k].info.title }</h3>
            </Template>
          ))
        }
      </Grid>

      <hr />

      <Grid>{
        Object.keys(this.props.templates)
          .reduce((output, templateKey) => {
            const update = output
            Object.keys(this.props.templates[templateKey].layerItems)
              .forEach(layout => {
                const newTemplateObj = this.props.templates[templateKey]
                newTemplateObj.defaultLayout = layout
                console.log({ layout })
                update.push({
                  layout,
                  templateName: templateKey,
                  thumb: this.props.templates[templateKey].layerItems[layout].preview,
                  template: newTemplateObj,
                })
              })
            return update
          }, [])
          .filter(template => !this.props.showLayout || (template.layout === this.props.showLayout))
          .map((template, i) => <Template
            onClick={ this.props.setCardkit.bind(
              null,
              {
                template: template.template,
                layout: template.layout
              }
            )
          }
            key={ `template-${i}` }
          >
          {/* <Preview
            src={ template.thumb || placeholder }
            alt={ `${template.template}-${template.layout}-thumb` }
          /> */}
          <h6>{ template.layout }</h6>
          <h3>{ template.templateName }</h3>
          <p>Used for:</p>
          <ul>
            {
              layouts[template.layout].usecases
                .map(usecase => <li
                    key={ `usecase-${template.template}-${usecase}` }
                  >{ usecase }</li>
                )
            }
          </ul>

        </Template>)
      }</Grid>

      {/* <Grid>
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
      </Grid> */}

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
