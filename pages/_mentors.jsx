import React from 'react';

const mentors = [
  {
    name: 'Joselito Junior',
    about: 'GDG Recife',
    img: require('../css/img/mentors/joselito.jpeg'),
  },
  {
    name: 'Wagner Marcelo',
    about: 'Guia Hacker',
    img: '',
  },
  {
    name: 'Mahmoud Ali',
    about: 'Lambda3',
    img: '',
  }
];

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
                  {mentors.map( mentor => {
                    return (
                      <div className="col-sm-4" key={mentor.name}>
                          <div className="team-member">
                              <img src={mentor.img} className="img-responsive img-circle" alt=""/>
                              <h4>{mentor.name}</h4>
                              <p className="text-muted">{mentor.about}</p>
                              <ul className="list-inline social-buttons">
                                  <li><a href="#"><i className="fa fa-twitter"></i></a>
                                  </li>
                                  <li><a href="#"><i className="fa fa-facebook"></i></a>
                                  </li>
                                  <li><a href="#"><i className="fa fa-linkedin"></i></a>
                                  </li>
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
