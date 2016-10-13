import React from 'react';

module.exports = React.createClass({
  render() {
    return (
      <section id="services" className="bg-light-gray">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 text-center">
                      <img src={require('../css/img/logos/logo.png')} height={240} alt="GovHackMT logo"/>
                      <h2 className="section-heading">
                        Hackeando o governo
                      </h2>
                      <h3 className="section-subheading text-muted">
                        Para acelerar o desenvolvimento de solucoes inovadoras,
                        rompendo as barreiras burocráticas e conectando o governo
                        com o cidadão o GovHackMT 2016 reune equipes multidisciplinares
                        para desenvolver soluções com objetivo de aproximar a
                        máquina pública da imersão dinâmica e objetiva de um hackathon,
                        com a meta de desenvolver soluções práticas para resolver
                        problemas comuns a todos cidadãos, promovendo assim a
                        conexão entre governo e sociedade.
                      </h3>
                      <h3 className="section-subheading text-muted">
                        O hackathon é idealizado pela comunidade de desenvolvedores
                        de Mato Grosso e junto do Governo do
                        Estado, através da Empresa Matogrossense de Tecnologia (MTI),
                        Gabinete de Assuntos Estratégicos (GAE) e da Secretaria de
                        Estado de Planejamento.
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
                        Soluções que auxiliem o governo e a sociedade a se comunicarem.
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
