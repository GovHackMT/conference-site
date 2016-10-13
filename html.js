import React from 'react'
import DocumentTitle from 'react-document-title'

import { prefixLink } from 'gatsby-helpers'
import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from './utils/typography'
import { colors } from 'utils/colors'
//require('bootstrap/dist/css/bootstrap.css');

const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({
  displayName: 'HTML',
  propTypes: {
    body: React.PropTypes.string,
  },
  render () {
    const title = DocumentTitle.rewind()

    let css;
    if (process.env.NODE_ENV === 'production') {
      css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="theme-color" content="#39ca74"/>
          <meta name="apple-mobile-web-app-status-bar-style" content="#39ca74"/>
          <meta name="title" content={title}/>
          <meta name="description" content="O hackathon é idealizado pela comunidade de desenvolvedores
          de Mato Grosso e conta com a co-realização do Governo do
          Estado, através da Empresa Matogrossense de Tecnologia (MTI),
          Gabinete de Assuntos Estratégicos (GAE) e da Secretaria de
          Estado de Planejamento."/>
          <meta name="robots" content="all"/>
          <meta name="content-language" content="pt-br"/>

          <meta property="og:title" content={title}/>
          <meta property="og:url" content="https://govhack.com.br/"/>
          <meta property="og:image" content="https://github.com/GovHackMT/conference-site/raw/master/css/img/logos/logo.png"/>
          <meta property="og:site_name" content="GovHackMT"/>
          <meta property="og:type" content="website"/>
          <meta property="og:locale" content="pt_BR"/>

          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
          <link rel="icon" href="/favicon.ico" type="image/x-icon"/>

          <title>{title}</title>
          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />
          {css}
        </head>
        <body id="page-top" className="index">
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    )
  },
})
