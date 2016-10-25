import React from 'react';

const organizers = [
  {
    name: 'Alvaro Viebrantz',
    about: 'MTI / EstudaVest / DevMT',
    img: require('../css/img/mentors/alvaro.jpg'),
    social: [
      { type: 'twitter', url: 'http://twitter.com/alvaroviebrantz'},
      { type: 'briefcase', url: 'http://aviebrantz.com.br'},
      { type: 'github', url: 'http://www.github.com/alvarowolfx' },
    ],
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
    name: 'Felipe Oliveira',
    about: 'GAE',
    img: require('../css/img/mentors/felipe.jpg'),
    social: [
      { type: 'linkedin', url: 'https://br.linkedin.com/in/felipeadner' },
      { type: 'facebook', url: 'https://www.facebook.com/felipeasoliveira' }
    ]
  },
  {
    name: 'Flavio Gomes',
    about: 'GAE',
    img: require('../css/img/mentors/flavio.jpg'),
    social: [
      { type: 'linkedin', url: 'https://br.linkedin.com/in/inflavio/pt' },
      { type: 'facebook', url: 'https://www.facebook.com/flavio.face' }
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
];


module.exports = React.createClass({
  render() {
    return (
      <section id="team" className="bg-light-gray">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 text-center">
                      <h2 className="section-heading">Os organizadores</h2>
                      <h3 className="section-subheading large text-muted">O time que está por trás do evento</h3>
                  </div>
              </div>
              <div className="row">
                  {organizers.map( (org,idx) => {
                    return (
                      <div className="col-sm-4" key={idx}>
                          <div className="team-member">
                              <img src={org.img} className="img-responsive img-circle img-mentor" alt=""/>
                              <h4>{org.name}</h4>
                              <p className="text-muted">
                                {org.about}
                              </p>
                              <ul className="list-inline social-buttons">
                                  {org.social && org.social.map( social => {
                                    return (
                                      <li>
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
