import React from 'react';
import './App.css';

import Menu from './Menu';
import About from './About';
import Music from './Music';
import Video from './Video';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Menu />
        <About />
        <Music />
        <Video />
      </div>
    </div>
  );
}

export default App;
