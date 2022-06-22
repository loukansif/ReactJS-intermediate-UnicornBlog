import './App.css';
import Header from './components/Header';
import React, {useState, useEffect} from 'react';
import Articles from './components/Articles';

const App = () => {
  

  return (
    <div className="App">
      <Header  />
      <Articles />
    </div>
  );
}

export default App;
