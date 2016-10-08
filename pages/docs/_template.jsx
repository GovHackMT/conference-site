import React from 'react'
import { Link } from 'react-router'
import Breakpoint from 'components/Breakpoint'
import find from 'lodash/find'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

import typography from 'utils/typography'
const { rhythm } = typography

module.exports = React.createClass({
  propTypes () {
    return {
      route: React.PropTypes.object,
    }
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },

  handleTopicChange (e) {
    return this.context.router.push(e.target.value)
  },

  render () {
    const childPages = config.docPages.map((p) => {
      const page = find(this.props.route.pages, (_p) => _p.path === p)
      return {
        title: page.data.title,
        path: page.path,
      }
    })
    const docOptions = childPages.map((child) =>
      <option
        key={prefixLink(child.path)}
        value={prefixLink(child.path)}
      >
        {child.title}
      </option>

    )
    const docPages = childPages.map((child) => {
      const isActive = prefixLink(child.path) === this.props.location.pathname
      return (
        <li key={child.path}>
          <Link
            to={prefixLink(child.path)}
            style={{
              textDecoration: 'none',
            }}>
            {isActive ? <strong>{child.title}</strong> : child.title}
          </Link>
        </li>
      )
    })
    return (
      <section className="container">
        <Breakpoint mobile>
          <div className="col-md-2">
            <ul style={{listStyle: 'none'}}>
              {docPages}
            </ul>
          </div>
          <div className="col-md-10">
            {this.props.children}
          </div>
        </Breakpoint>
        <Breakpoint>
          <strong>Temas:</strong>
          {' '}
          <select
            defaultValue={this.props.location.pathname}
            onChange={this.handleTopicChange}>
            {docOptions}
          </select>
          <br/>
          <div className="container">
            {this.props.children}
          </div>
        </Breakpoint>        
      </section>
    )
  },
})
