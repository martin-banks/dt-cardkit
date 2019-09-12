import React, { Component } from 'react'
import Styled from 'styled-components'

// import templates from '../config/templates'
import placeholder from '../config/templates/previews/placeholder.jpg'
import layouts from '../config/layouts'
import { jsxClosingElement } from '@babel/types'


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
      {/* <Grid>
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

      <hr /> */}

      <label>
        Filter layouts
      </label>

      <Grid>
        {
          Object.keys(layouts).map(layout => <ButtonFilter
              key={ `filter-button-${layout}` }
              onClick={ this.props.filterLayouts.bind(null, layout) }
            >
              { layout }
            </ButtonFilter>
          )
        }
        <ButtonFilter
          onClick={ this.props.filterLayouts.bind(null, false) }
        >
          Show all
        </ButtonFilter>
      </Grid>

      <Divider />


      <Grid>{
        Object.keys(this.props.templates)
          .reduce((output, templateKey) => {
            const update = output
            if (!this.props.templates[templateKey]) return update
            Object.keys(this.props.templates[templateKey].layerItems)
              .forEach(layout => {
                const newTemplateObj = JSON.parse(JSON.stringify(this.props.templates[templateKey]))
                const { thumbs, preview } = this.props.templates[templateKey].info
                // console.log({ thumbs })
                newTemplateObj.defaultLayout = layout
                update.push({
                  layout,
                  templateName: this.props.templates[templateKey].info.title, // templateKey,
                  // thumb: this.props.templates[templateKey].layerItems[layout].preview,
                  thumb: thumbs ? thumbs[layout] : preview,
                  template: newTemplateObj,
                })
              })
            return update
          }, [])
          .filter(template => !this.props.showLayout || (template.layout === this.props.showLayout))
          .map((template, i) => <Template
            key={ `template-${i}` }
            onClick={ this.props.setCardkit.bind(
              null,
              {
                template: template.template,
                layout: template.layout
              }
              )
            }
          >
          {/* <Preview
            src={ template.thumb || placeholder }
            alt={ `${template.template}-${template.layout}-thumb` }
          /> */}
          <h6>{ template.layout }</h6>
          <h3>{ template.templateName }</h3>
          <Preview
            // src={ template.template.info.preview || placeholder }
            src={ template.thumb }
            alt={ `${template.template.title} preview` }
          />
          <p className="label">Used for:</p>
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

      {/* <pre>
        Pay no attention to the man behind the curtain: 
        <code>
          { JSON.stringify(this.state.templates, 'utf8', 2) }
        </code>
      </pre> */}

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
  gap: 1rem;
  margin-bottom: 3rem;
`

const Template = Styled.div`
  box-sizing: border-box;
  position: relative;
  padding: 1rem;
  /* border: solid 1px #ccc; */
  cursor: pointer;
  overflow: hidden;
  background: white;
  border-radius: 4px;
  vertical-align: top;
  text-align: center;
  p.label {
    margin: 0;
    font-weight: 800;
  }
  ul {
    padding: 0;
    padding-left: 0;
    /* padding-left: 20px; */
    margin: 0;
    list-style: none;
    li {
      padding: 0;
    }
  }
  &:hover {
    /* border: solid 1px skyblue; */
    box-shadow: 0 0 3rem skyblue;
    z-index: 99;
  }
` 

const Preview = Styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: scale-down;
  margin: 0 auto;
  margin-bottom: 2rem;
  background: linear-gradient(to top, #111, #555);
  padding: 1rem;
`

const ButtonFilter = Styled.button`
  padding: 1rem 2rem;
  border: solid 1px #ccc;
  font-size: 2rem;
  border-radius: 0.5rem;
`

const Divider = Styled.hr`
  border-bottom: solid 0.5rem #888;
`
