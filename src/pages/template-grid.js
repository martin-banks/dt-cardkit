import React, { Component } from 'react'
import Styled from 'styled-components'

import templates from '../config/templates'

function Cardkit () {
  return <div>
    <h1>This will be the cardkit page</h1>
  </div>
}

class TemplateGrid extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (<Layout>
      <Header>
        <h1>Templates</h1>
      </Header>
  
      {
        Object.keys(templates).map(k => <>
          <Template onClick={ this.props.setCardkit.bind(null, templates[k]) }>
            <h3>{ templates[k].info.title }</h3>
          </Template>
        </>
        )
      }

  
      <pre>{ JSON.stringify(templates, 'utf8', 2) }</pre>
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
  padding: 1rem;
  border: solid 1px #ccc;
  cursor: pointer;
`

const Header = Styled.header`
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  border-bottom: solid 1px #ccc
`