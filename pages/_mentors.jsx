import React from 'react';

const mentors = [
  {
    name: 'Joselito Júnior',
    about: 'Tampa / GDG Recife',
    img: require('../css/img/mentors/joselito.jpeg'),
    social: [
      { type: 'facebook', url: 'http://facebook.com/joselitojr'},
      { type: 'twitter', url: 'http://twitter.com/joselitojunior1'},
      { type: 'briefcase', url: 'http://tampa.works'},
      { type: 'github', url: 'http://www.github.com/joselitojunior1' },
    ],
  },
  {
    name: 'Wagner Marcelo',
    //about: 'Coordenador do grupo de Startups da PUC-SP e Sócio do Guia do Hacker',
    about: 'PUC-SP / Guia Hacker',
    img: require('../css/img/mentors/wagner.jpg'),
    social: [
      { type: 'twitter', url: 'http://www.twitter.com/wagner3m' },
      { type: 'linkedin', url: 'http://br.linkedin.com/in/wagner3m' },
      { type: 'facebook', url: 'http://www.facebook.com/wagner3m' }
    ]
  },
  {
    name: 'Marcelo Siqueira',
    //about: 'Coordenador do grupo de Startups da PUC-SP e Sócio do Guia do Hacker',
    about: 'BonoBee / Hackathon.me',
    img: require('../css/img/mentors/marcelo-siqueira.jpeg'),
    social: [
      { type: 'twitter', url: 'http://twitter.com/marcelosiqueira' },
      { type: 'facebook', url: 'https://www.facebook.com/marsiqueira' },
      { type: 'linkedin', url: 'https://www.linkedin.com/in/marsiqueira' }
    ]
  },
  {
    name: 'Mahmoud Ali',
    about: 'Lambda3 / DevMT',
    img: require('../css/img/mentors/akamud.jpg'),
    social: [
      { type: 'twitter', url: 'http://www.twitter.com/akamud' },
      { type: 'github', url: 'http://www.github.com/akamud' },
      { type: 'facebook', url: 'http://www.facebook.com/iamakamud' }
    ]
  },
  {
    name: 'Gabriel Pedro',
    about: 'RCF Inovações / DevMT',
    img: require('../css/img/mentors/gpedro.jpg'),
    social: [
      { type: 'twitter', url: 'http://www.twitter.com/gpedro_' },
      { type: 'facebook', url: 'http://www.facebook.com/gpedro842' },
      { type: 'github', url: 'http://www.github.com/gpedro' },
    ]
  },
  {
    name: 'Dhyego Fernando',
    about: 'Código5 / DevMT',
    img: require('../css/img/mentors/dhyego.jpg'),
    social: [
      { type: 'twitter', url: 'https://twitter.com/dhyegofernando' },
      { type: 'facebook', url: 'https://www.facebook.com/DhyegoFernando' },
      { type: 'github', url: 'http://www.github.com/dhyegofernando' },
    ]
  },
  {
    name: 'Luan Castro',
    about: 'Tribunal de Justiça de Mato Grosso',
    img: require('../css/img/mentors/castrolol.jpg'),
    social: [
      { type: 'twitter', url: 'https://twitter.com/castrolol' },
      { type: 'github', url: 'https://github.com/castrolol' },
    ]
  },
  {
    name: 'Henrique Ribeiro',
    about: 'Tribunal de Justiça de Mato Grosso',
    img: require('../css/img/mentors/henriqueprj.jpg'),
    social: [
      { type: 'twitter', url: 'https://twitter.com/henriqueprj' },
      { type: 'facebook', url: 'https://www.facebook.com/henrique.ribeiro.71465572' },
      { type: 'github', url: 'http://www.github.com/henriqueprj' },
    ]
  },
  {
  	name: 'William Chitto',
  	about: 'MTI / RCF Inovações',
  	img: require('../css/img/mentors/william-chitto.jpg'),
  	social: [
      { type: 'facebook', url: 'https://www.facebook.com/william.cspinto' },
      { type: 'github', url: 'https://github.com/williamchitto' },
  	]
  }
];

let dummy = {
  name: 'Em breve',
  about: 'fsociety',
  img: require('../css/img/mentors/fsociety.jpg')
}


for(let i = mentors.length; i < 9;i++){
  mentors.push({id: i, ...dummy });
}

module.exports = React.createClass({
  render() {
    return (
      <section id="team" className="bg-light-gray">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 text-center">
                      <h2 className="section-heading">Os mentores</h2>
                      <h3 className="section-subheading large text-muted">A galera mais fera da área de tecnologia e desenvolvimento que vão ajudar a desenvolver </h3>
                  </div>
              </div>
              <div className="row">
                  {mentors.map( (mentor,idx) => {
                    return (
                      <div className="col-sm-4" key={idx}>
                          <div className="team-member">
                              <img src={mentor.img} className="img-responsive img-circle img-mentor" alt=""/>
                              <h4>{mentor.name}</h4>
                              <p className="text-muted">
                                {mentor.about}
                              </p>
                              <ul className="list-inline social-buttons">
                                  {mentor.social && mentor.social.map( social => {
                                    return (
                                      <li key={idx+"_"+social.type}>
                                        <a href="social" href={social.url} target="_blank">
                                          <i className={"fa fa-"+social.type}></i>
                                        </a>
                                      </li>
                                    )
                                  })}
                              </ul>
                          </div>
                      </div>
                    )
                  })}
              </div>
          </div>
      </section>
    );
  }
});
