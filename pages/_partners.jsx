import React from 'react';

const partners = [
  //{ img: require('../css/img/logos/envato.jpg') },
  {
    img: 'http://www.goiabeirasshopping.com.br/images/logo.png'
  },
  {
    img: 'http://www.sebrae.com.br/sebraena-templating/files/img/logo.png',
  },
  {
    img: 'http://www.univag.com.br/assets/default/img/logo.png',
  },
  {
    img: 'http://frontincuiaba.com.br/themes/yellow-swan/img/backstage-gae.png',
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
                              <img src={partner.img} className="img-responsive img-centered" alt=""/>
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
