import React from 'react';

const entries = [
  {
    name: 'Pré evento',
    entries: [
      { time: (<span>Pré<br/>evento</span>), name: '04/11 Sexta', desc: 'Esquenta do evento com palestras técnicas e muito networking.' },
    ],
  },
  {
    name: 'Primeiro dia',
    entries: [
      { time: 'Primeiro dia do evento', name: '05/11 Sábado' },
      { time: '08:00' , name: 'Credenciamento / Breakfast of Champions' },
      { time: '09:30' , name: 'Abertura', desc: 'Cerimonia de Abertura e Talks dos patrocinadores' },
      { time: '10:00' , name: 'Keynote', desc: 'Keynote sobre Governo Digital e painel com desafios envolta do assunto.' },
      { time: '10:40' , name: 'Apresentação das Ferramentas', desc: 'APIs, databases, github e demais ferramentas disponíveis aos participantes.' },
      { time: '11:20' , name: 'Formação das Equipes' },
      { time: '12:00' , name: 'Codificação Begins', desc: 'Start no Cronômetro' },
      { time: '13:00' , name: 'Almoço' },
      { time: '19:00' , name: 'Jantar' },
    ],
  },
  {
    name: 'Segundo dia',
    entries: [
      { time: 'Segundo dia de evento', name: '06/11 Domingo' },
      { time: '8:00', name: 'Café da manhã' },
      { time: '12:00', name: 'Almoço' },
      { time: '13:00', name: 'Codificação Termina', desc: 'Stop no cronômetro e submissões dos codes ao GitHub do evento!' },
      { time: '14:00', name: 'Apresentação das Demos', desc: 'Demos apenas / Sem conjuntos de slides se a sua demo não funcionar,apresentar o código e mostrar onde ficou parado. Trata-se de mostrar o que você aprendeu e não sobre o lançamento de uma idéia' },
      { time: '16:00', name: 'Prizathon!', desc: 'Vencedores são anunciados.' }
    ]
  }
];

module.exports = React.createClass({

  getInitialState(){
    return {
      tab: 1
    };
  },

  setTab(tab){
    this.setState({ tab });
  },

  render() {
    return (
      <section id="about">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 text-center">
                      <h2 className="section-heading">Cronograma</h2>
                      <h3 className="section-subheading text-muted">Como irá funcionar o evento.</h3>
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-12" style={{margin: '0 auto'}}>
                      <ul className="nav nav-tabs centered" role="tablist">
                        {entries.map( (day,idx) => {
                          return (
                            <li key={idx} role="presentation" className={this.state.tab === idx ? 'active' : ''}>
                              <a onClick={() => this.setTab(idx)}>
                                {day.name}
                              </a>
                            </li>
                          )
                        })}
                      </ul>
                    <div className="tab-content">
                      <br/>
                      <ul className="timeline">
                      {entries[this.state.tab].entries.map( (entry, i) => {
                          let odd = i%2 === 1;
                          return (
                            <li key={i} className={odd && "timeline-inverted"}>
                                <div className="timeline-image" style={{verticalAlign: 'center'}}>
                                  <h4>{entry.time}</h4>
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                      <br/>
                                      <h4 className="subheading">{entry.name}</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p className="text-muted">
                                          {entry.desc}
                                        </p>
                                    </div>
                                </div>
                            </li>
                          );
                        })}
                        </ul>
                    </div>
                  </div>
              </div>
          </div>
      </section>
    );
  }
});
