import React from 'react';

const partners = [
  {
    name: 'Realizadores',
    height: 120,
    entries: [
      { img: require('../css/img/logos/devmt.jpg') }
    ]
  },
  {
    name: 'Catalisadores',
    height: 100,
    entries: [
      { img: require('../css/img/logos/gae.png') },
      { img: require('../css/img/logos/seplan.png') },
      { img: require('../css/img/logos/mti.png') }
    ]
  },
  {
    name: 'Parceiros',
    height: 60,
    entries: [
      { img: require('../css/img/logos/goibeiras.png') },
      { img: require('../css/img/logos/sebrae.png') },
      { img: require('../css/img/logos/univag.png') },
    ]
  }
];

module.exports = React.createClass({
  render() {
    return (
      <aside className="clients">
          <div className="container">
              {partners.map( (partner,idx) => {
                return (
                  <div key={idx}>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h3 className="section-heading">
                              {partner.name}
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        {partner.entries.map( (entry,i) => {
                          return (
                            <div className={`col-md-${12 / partner.entries.length} col-sm-6`} key={i}>
                                <a href="#">
                                    <img src={entry.img} className="img-responsive img-centered"
                                      style={{height: partner.height}} alt=""/>
                                </a>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                );
              })}
          </div>
      </aside>
    );
  }
});
