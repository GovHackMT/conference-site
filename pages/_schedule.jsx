import React from 'react';

const entries = [
  {
    name: 'Primeiro dia',
    entries: [
      { time: 'Primeiro dia de evento', name: '04/11 Sexta'},
      { time: '19:00' , name: 'Credenciamento e Coffe Break' },
      { time: '20:00' , name: 'Abertura', desc: 'Cerimonia de Abertura e Talks dos patrocinadores' },
      { time: '20:30' , name: 'Painel de desafios', desc: 'Desafios apresentados por órgãos públicos locais.' },
      { time: '21:00' , name: 'Apresentação das Ferramentas', desc: 'APIs, databases, github e demais ferramentas disponíveis aos participantes.' },
      { time: '21:10' , name: 'Formação das Equipes' },
    ],
  },
  {
    name: 'Segundo dia',
    entries: [
      { time: 'Segundo dia de evento', name: '05/11 Sábado' },
      { time: '08:00' , name: 'Abertura', desc: 'Abertura com Joselito Júnior contando sua experiência em Hackathons' },
      { time: '08:30' , name: 'Palestra Master AGRIHUB', desc: 'Heygler de Paula - AgriHub' },
      { time: '09:00' , name: 'Codificação Begins', desc: 'Start no Cronômetro' },
      { time: '09:30 às 10:30' , name: 'Sessões de Massagem' },
      { time: '10:30 às 11:30' , name: 'Sessões de Massagem' },
      { time: '13:00' , name: 'Almoço' },
      { time: '14:00 às 15:00' , name: 'Sessões de Massagem' },
      { time: '15:00 às 16:00' , name: 'Sessões de Massagem' },
      { time: '18:00' , name: 'Palestra -  Economia Criativa e o Mercado de TI', desc: 'Marcelo Siqueira' },
      { time: '19:00' , name: 'Jantar' },
    ],
  },
  {
    name: 'Terceiro dia',
    entries: [
      { time: 'Terceiro dia de evento', name: '06/11 Domingo' },
      { time: '8:00', name: 'Breakfast of Champions' },
      { time: '09:30 às 10:30' , name: 'Sessões de Massagem' },
      { time: '10:30 às 11:30' , name: 'Sessões de Massagem' },
      { time: '12:00', name: 'Pré-Demo', desc: 'Uma apresentação para um conjunto de mentores para se preparar para a última apresentação.' },
      { time: '13:00', name: 'Almoço' },
      { time: '14:00 às 15:00' , name: 'Sessões de Massagem' },
      { time: '15:00 às 16:00' , name: 'Sessões de Massagem' },
      { time: '16:45', name: 'Codificação Termina', desc: 'Stop no cronômetro e submissões dos códigos ao GitHub do evento!' },
      { time: '17:00', name: 'Apresentação das Demos', desc: 'Demos apenas / Slides são opcionais, se a sua demo não funcionar, apresentar o código e mostrar onde ficou parado. Trata-se de mostrar o que você aprendeu e não sobre o lançamento de uma idéia' },
      { time: '18:30' , name: 'Palestra Master UNIVAG' },
      { time: '19:00' , name: 'Palestra Master SENAR' },
      { time: '20:00', name: 'Prizathon!', desc: 'Vencedores são anunciados.' }
    ]
  }
];

module.exports = React.createClass({

  getInitialState(){
    return {
      tab: 0
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
