import React, { Component } from 'react'
import Styled from 'styled-components'

import templates from '../config/templates'
import placeholder from '../config/templates/previews/placeholder.jpg'

class TemplateGrid extends Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    return (<Layout>
      <Header>
        <h1>Templates</h1>
      </Header>
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

const Header = Styled.header`
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  border-bottom: solid 1px #ccc
`

const Preview = Styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin: 0;
  margin-bottom: 2rem;
`
