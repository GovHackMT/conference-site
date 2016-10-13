
import ReactGA from 'react-ga';
ReactGA.initialize("UA-37452057-9");

function logPageView(){
  let page = window.location.pathname;
  ReactGA.set({ page });
  ReactGA.pageview(page);
}

exports.onRouteUpdate = () => {  
  logPageView();
}
