// @ts-check
import React from 'react';
import Home from './Home';
import Route from './Route';
import { 
  Router 
} from '@reach/router';

const App = () => (
  <Router>
    <Route component={Home} path="/" />
  </Router>
);

export default App;
