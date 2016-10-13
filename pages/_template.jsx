import React from 'react'
import { Link } from 'react-router'
import { Container, Grid, Span } from 'react-responsive-grid'
import { prefixLink } from 'gatsby-helpers'
import includes from 'underscore.string/include'
import { colors, activeColors } from 'utils/colors'

import typography from 'utils/typography'
import { config } from 'config'

// Import styles.
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'css/main.css';
import 'css/github.css';
import 'css/agency/agency.scss';

const { rhythm, adjustFontSizeTo } = typography

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.object,
    }
  },
  getInitialState() {
    return {
      open: false
    }
  },
  toggleMenu(){
    let open = this.state.open;
    this.setState({
      open: !open
    });
  },
  closeMenu(){
    this.setState({
      open: false
    });
  },
  render () {
    const docsActive = includes(this.props.location.pathname, '/docs/')
    const examplesActive = includes(this.props.location.pathname, '/examples/')

    return (
      <div id="page-wrapper">
        <nav id="mainNav" className="navbar navbar-default navbar-custom navbar-fixed-top affix">
            <div className="container">
                <div className="navbar-header page-scroll">
                    <button type="button" className="navbar-toggle" onClick={() => this.toggleMenu()}>
                        <span className="sr-only">
                          Toggle navigation
                        </span>
                        <i className="fa fa-bars"/> Menu
                    </button>
                    <Link
                      className="navbar-brand page-scroll"
                      to={prefixLink('/')}
                      onClick={() => this.closeMenu()}>
                      GovHackMT
                    </Link>
                </div>
                <div className={!this.state.open && "collapse navbar-collapse"}>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="hidden">
                            <a href="#page-top"></a>
                        </li>
                        {/*
                        <li>
                          <Link
                            to={prefixLink('/docs/')}
                            onClick={() => this.closeMenu()}>
                            Guia do Desenvolvedor
                          </Link>
                        </li>
                        */}
                        <li>
                          <Link
                            to={prefixLink('/rules/')}
                            onClick={() => this.closeMenu()}>
                            Regras
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={prefixLink('/faq/')}
                            onClick={() => this.closeMenu()}>
                            FAQ
                          </Link>
                        </li>
                        <li>
                          <a href="https://github.com/GovHackMT" target="_blank">
                            <i className="fa fa-github"></i>
                            Github
                          </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        {this.props.children}
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <span className="copyright">Copyright &copy; GovHackMT 2016</span>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-inline social-buttons">
                            <li>
                              <a href="https://www.facebook.com/govhackmt/" target="_blank"><i className="fa fa-facebook"></i></a>
                            </li>
                            <li>
                              <a href="https://www.github.com/govhackmt/" target="_blank"><i className="fa fa-github"></i></a>
                            </li>
                            {/*
                            <li>
                              <a href="#"><i className="fa fa-twitter"></i></a>
                            </li>
                            <li>
                              <a href="#"><i className="fa fa-linkedin"></i></a>
                            </li>
                            */}
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-inline quicklinks">
                          <li>
                            <Link
                              to={prefixLink('/rules/')}>
                              Regras
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={prefixLink('/faq/')}>
                              FAQ
                            </Link>
                          </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
      </div>
    )
  },
})
