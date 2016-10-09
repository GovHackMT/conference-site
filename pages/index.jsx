import React from 'react';
import DocumentTitle from 'react-document-title';
import { config } from 'config';

import Header from './_header';
import Intro from './_intro';
import Schedule from './_schedule';
import Mentors from './_mentors';
import Partners from './_partners';

const IndexPage = React.createClass({
  statics: {
    metadata () {
      return {
        title: 'HackGovMT: O primeiro Hackathon do Estado de Mato Grosso',
      }
    },
  },

  render () {
    return (
      <DocumentTitle title={`${IndexPage.metadata().title} | ${config.siteTitle}`}>
        <div>
          <Header/>
          <Intro/>
          <Schedule/>
          <Mentors/>
          <Partners/>
          <section id="contact">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12 text-center">
                          <h2 className="section-heading">Sobre o evento</h2>
                          <h3 className="section-subheading text-muted">
                            Idealizado pela comunidade de desenvolvedores DevMT e pelo Gabinete de Assuntos Estratégicos (GAE).
                          </h3>
                      </div>
                  </div>
              </div>
          </section>
        </div>
      </DocumentTitle>
    )
  },
})

export default IndexPage;
