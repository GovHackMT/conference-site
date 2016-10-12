import React from 'react';

module.exports = React.createClass({
  render() {
    return (
      <section id="services" className="bg-light-gray">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 text-center">
                      <h2 className="section-heading">
                        Hackeando o governo, conectando cidadãos
                      </h2>
                      <h3 className="section-subheading text-muted">
                        Idealizado pelo DevMT (Comunidade de desenvolvedores de MT), o Hackathon, em sua 1a edicao, e uma iniciativa para ajudar a implantar novas ideias e solucoes na plataforma digital.
                        Entre os dias 04 e 06 de Novembro, programadores, designers e profissionais ligados ao desenvolvimento de softwares se reunirao para uma maratona de palestras, brainstormings, mentorias e avaliacoes de projetos e muito CODING!
                      </h3>
                  </div>
              </div>
              <div className="row text-center">
                  <div className="col-md-4">
                      <span className="fa-stack fa-4x">
                          <i className="fa fa-circle fa-stack-2x text-primary"></i>
                          <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
                      </span>
                      <h4 className="service-heading">Hackathon</h4>
                      <p className="text-muted">
                        O Hackathon é um evento que reúne programadores, designers e outros profissionais ligados ao desenvolvimento para uma insana jornada para criar, inovar e construir softwares e hardwares em 24 horas sem parar.
                      </p>
                  </div>
                  <div className="col-md-4">
                      <span className="fa-stack fa-4x">
                          <i className="fa fa-circle fa-stack-2x text-primary"></i>
                          <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
                      </span>
                      <h4 className="service-heading">Governo Digital</h4>
                      <p className="text-muted">
                        O tema deste ano é Governo Digital: Soluções que auxiliem o governo e a sociedade a se comunicarem.
                      </p>
                  </div>
                  <div className="col-md-4">
                      <span className="fa-stack fa-4x">
                          <i className="fa fa-circle fa-stack-2x text-primary"></i>
                          <i className="fa fa-users fa-stack-1x fa-inverse"></i>
                      </span>
                      <h4 className="service-heading">Público</h4>
                      <p className="text-muted">Toda a comunidade de tecnologia e desenvolvimento está convidada a participar deste evento histórico em nosso estado.</p>
                  </div>
              </div>
          </div>
        </section>
    );
  }
});
