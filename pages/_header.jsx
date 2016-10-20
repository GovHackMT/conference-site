import React from 'react';

module.exports = React.createClass({
  render() {
    return (
      <header>
        <div className="container">
          <div className="intro-text">
            <div className="intro-heading">
              GovHackMT
            </div>
            <div className="intro-subheading">
              Hackeando o governo, conectando cidadãos
            </div>
            <div className="intro-lead-in">
              04 a 06 de Novembro
              <br/>
              Goiabeiras Shopping
            </div>
           <div className="into-cta">
             <a href="https://www.sympla.com.br/govhackmt---novembro-2016__95411" target="_blank" className="page-scroll btn btn-primary btn-xl">
               Inscreva-se
             </a>
             <a onClick={() => this.props.changeTheme()} className="page-scroll btn btn-primary btn-xl">
               {!this.props.isHuman ? 'Site para humanos' : 'Site Hacker'}
             </a>
           </div>
          </div>
        </div>
      </header>
    );
  }
});
