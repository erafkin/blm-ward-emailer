import React from 'react';
import './App.css';
// import Form from './Form';
import HairstonForm from './HairstonForm';

import ReactGA from 'react-ga';


function App() {
  ReactGA.initialize('UA-168571845-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <div className="App">
      <header className="main">
        <HairstonForm className = 'form'/>
      </header>
    </div>
  );
}

export default App;
