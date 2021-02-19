import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header';
import Nav from './nav/Nav';
import Content from './Content';

import '../style/layout/App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">

        <div className="header">{<Header />}</div>
        <div className="menu">{<Nav />}</div>
        <div className="content">{<Content />}</div>

      </div>
    </Router>
  );
}

export default App;
