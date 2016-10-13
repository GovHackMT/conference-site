import React from 'react';

const partners = [
  {
    img: require('../css/img/logos/goibeiras.png')
  },
  {
    img: require('../css/img/logos/sebrae.png')
  },
  {
    img: require('../css/img/logos/unirondom.png')
  }
];

const friends = [
  {
    img: require('../css/img/logos/gae.png')
  },
  {
    img: require('../css/img/logos/seplan.png')
  },
  {
    img: require('../css/img/logos/mti.png')
  }
]

module.exports = React.createClass({
  render() {
    return (
      <aside className="clients">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 text-center">
                      <h3 className="section-heading">
                        Patrocinadores
                      </h3>
                  </div>
              </div>
              <div className="row">
                  {partners.map( (partner,idx) => {
                    return (
                      <div className="col-md-3 col-sm-6" key={idx}>
                          <a href="#">
                              <img src={partner.img} className="img-responsive img-centered"
                                style={{height: 60}} alt=""/>
                          </a>
                      </div>
                    );
                  })}
              </div>
              <div className="row">
                  <div className="col-lg-12 text-center">
                      <h3 className="section-heading">
                        Co-realizadores
                      </h3>
                  </div>
              </div>
              <div className="row">
                  {friends.map( (partner,idx) => {
                    return (
                      <div className="col-md-3 col-sm-6" key={idx}>
                          <a href="#">
                              <img src={partner.img} className="img-responsive img-centered"
                                style={{height: 60}} alt=""/>
                          </a>
                      </div>
                    );
                  })}
              </div>
          </div>
      </aside>
    );
  }
});
