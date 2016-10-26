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
    name: 'Patrocinadores Master',
    height: 100,
    entries: [
      {
        img: require('../css/img/logos/univag.png'),
        url: 'http://univag.com.br/'
      },
    ]
  },
  {
    name: 'Catalisadores',
    height: 100,
    entries: [
      {
        img: require('../css/img/logos/gae.png'),
        url: 'https://facebook.com/gaeoficial'
      },
      {
        img: require('../css/img/logos/seplan.png'),
        url: 'https://seplan.mt.gov.br'
      },
      {
        img: require('../css/img/logos/mti.png'),
        url: 'https://mti.mt.gov.br'
      }
    ]
  },
  {
    name: 'Patrocinadores',
    height: 60,
    entries: [
      {
        img: require('../css/img/logos/loglab.jpg'),
        url: 'https://loglab.online'
      },
      {
        img: require('../css/img/logos/rcf.png'),
        url: 'http://rcfinovacoes.com.br/'
      },
    ]
  },
  {
    name: 'Parceiros',
    height: 60,
    entries: [
      {
        img: require('../css/img/logos/goibeiras.png'),
        url: 'http://goiabeirasshopping.com.br/'
      },
      {
        img: require('../css/img/logos/ms.png'),
        url: 'http://microsoft.com.br/'
      },
      {
        img: require('../css/img/logos/sebrae.png'),
        url: 'http://www.sebrae.com.br/sites/PortalSebrae/ufs/mt?codUf=12'
      },
      {
        img: require('../css/img/logos/webflavia.png'),
        url: 'http://webflavia.com.br/'
      },
      {
        img: require('../css/img/logos/nasc.png'),
        url: 'http://nasc.io/'
      },
      {
        img: require('../css/img/logos/braziljs.png'),
        url: 'http://braziljs.org/'
      },
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
                            <div className={`col-md-${Math.max(12 / partner.entries.length,3)} col-sm-6`} key={i}>
                                <a href={entry.url || "#"} target={entry.url && "_blank"}>
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
