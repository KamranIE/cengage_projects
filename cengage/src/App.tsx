import React from 'react';
import RouteConfig from './Routing/routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <RouteConfig />
    </Router>
  );
}

export default App;
