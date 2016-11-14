import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route ,IndexRoute,browserHistory } from 'react-router';
import App from './components/Main';
import Home from './Views/Home';

// Render the main component into the dom
// ReactDOM.render(<App />, document.getElementById('app'));



const getVirtualInfo=(location, cb) => {
          require.ensure([], function (require) {
          cb(null, require('./Views/VirtualInfo').default)
        })
  }

const getRealInfo=(location, cb) => {
          require.ensure([], function (require) {
          cb(null, require('./Views/RealInfo').default)
        })
  }

ReactDOM.render(( 
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
       <Route path="/virtualInfo/:code" getComponent={getVirtualInfo}/>
       <Route path="/realInfo/:code" getComponent={getRealInfo}/>
    </Route>
  </Router>
), document.getElementById('app'));

