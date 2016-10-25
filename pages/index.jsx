import React from 'react';
import DocumentTitle from 'react-document-title';
import { config } from 'config';

import Header from './_header';
import Intro from './_intro';
import Schedule from './_schedule';
import Mentors from './_mentors';
import Partners from './_partners';
//import Organizers from './_organizers';

const IndexPage = React.createClass({
  statics: {
    metadata () {
      return {
        title: 'O primeiro Hackathon do Estado de Mato Grosso',
      }
    },
  },
  getInitialState(){
    return {
      isHuman: false
    };
  },
  componentDidMount(){
    let el = window.document.getElementById('react-mount');
    return this.setState({
      isHuman: el && !el.classList.contains('hacker')
    });
  },
  changeTheme(){
    this.setState({
      isHuman: !this.state.isHuman
    }, () => {
      let el = window.document.getElementById('react-mount');
      el.classList.toggle('human', this.state.isHuman);
      el.classList.toggle('hacker', !this.state.isHuman);
    });
  },
  render () {
    return (
      <DocumentTitle title={`${config.siteTitle} | ${IndexPage.metadata().title}`}>
        <div className={this.state.isHuman ? 'human' : 'hacker'}>
          <Header changeTheme={() => this.changeTheme()} isHuman={this.state.isHuman}/>
          <Intro/>
          <Schedule/>
          <Mentors/>
          <Partners/>
          {/*<Organizers/> */}
          <section id="contact">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12 text-center">
                          <h2 className="section-heading">
                            Seja um patrocinador
                          </h2>
                          <h3 className="section-subheading text-muted">
                            <a href="https://docs.google.com/presentation/d/1FRVsNyjI9u_53beTwD3ci9UcsfNZZblfTeWx4XPujxQ/export/pdf" target="_blank">
                              Baixe nossa proposta de patrocínio.
                            </a>
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
