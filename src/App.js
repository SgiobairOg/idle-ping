import './App.css';

import AutoClicker from './components/auto-clicker/AutoClicker';
import ClickDisplay from './components/click-display/ClickDisplay';
import Clicker from './components/clicker/Clicker';
import Enhancement from './components/enhancement/Enhancement';
import React from 'react';
import { config } from './../src/configuration';

function App() {

  const enhancements = config.enhancements.map( (enhancement, index) =>
    <Enhancement options={enhancement} key={index}></Enhancement>
  )

  return (
    <div>
      <h1>{config.gameInfo.title}</h1>
      <ClickDisplay></ClickDisplay>
      <Clicker>Click</Clicker>
      <AutoClicker></AutoClicker>
      <hr></hr>
      {enhancements}
    </div>
  );
}

export default App;
