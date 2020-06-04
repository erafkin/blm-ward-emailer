import React from 'react';
import './App.css';
import Form from './Form';
import ReactGA from 'react-ga';


function App() {
  ReactGA.initialize('UA-168571845-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <div className="App">
      <header className="main">
        <Form className = 'form'/>
      </header>
    </div>
  );
}

export default App;
