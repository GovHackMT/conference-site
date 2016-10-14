import React from 'react';

const mentors = [
  {
    name: 'Joselito Júnior',
    about: 'Tampa / GDG Recife',
    img: require('../css/img/mentors/joselito.jpeg'),
  },
  {
    name: 'Wagner Marcelo',
    about: 'Coordenador do grupo de Startups da PUC-SP e Sócio do Guia do Hacker',
    img: require('../css/img/mentors/wagner.jpg'),
  },
  {
    name: 'Mahmoud Ali',
    about: 'Lambda3',
    img: require('../css/img/mentors/akamud.jpg'),
  },
  {
    name: 'Gabriel Pedro',
    about: 'RCF Inovações / DevMT',
    img: require('../css/img/mentors/gpedro.jpg'),
  },
  {
    name: 'Dhyego Fernando',
    about: 'Código5 / DevMT',
    img: require('../css/img/mentors/dhyego.jpg'),
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
                          <div className="team-member" style={{minHeight: 240}}>
                              <img src={mentor.img} className="img-responsive img-circle img-mentor" alt=""/>
                              <h4>{mentor.name}</h4>
                              <p className="text-muted">{mentor.about}</p>
                              {/*
                              <ul className="list-inline social-buttons">
                                  <li><a href="#"><i className="fa fa-twitter"></i></a>
                                  </li>
                                  <li><a href="#"><i className="fa fa-facebook"></i></a>
                                  </li>
                                  <li><a href="#"><i className="fa fa-linkedin"></i></a>
                                  </li>
                              </ul>
                              */}
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
