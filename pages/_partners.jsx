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
  },
  {
    img: require('../css/img/logos/mti.png')
  }
];

module.exports = React.createClass({
  render() {
    return (
      <aside className="clients">
          <div className="container">
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
          </div>
      </aside>
    );
  }
});
