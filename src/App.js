import './App.css';

import React, { useEffect } from 'react';

import AutoClicker from './components/auto-clicker/AutoClicker';
import ClickDisplay from './components/click-display/ClickDisplay';
import Clicker from './components/clicker/Clicker';
import Enhancement from './components/enhancement/Enhancement';
import ResetButton from './components/reset-button/ResetButton';
import { config } from './../src/configuration';
import { idbGet } from './idb';
import useGlobal from './store';

function App() {
  const [, globalActions] = useGlobal();

  useEffect(() => {
    idbGet('state').then((lastState) => {
      if( lastState ) {
        globalActions.addToClicks(lastState.clicks);
        globalActions.setRate(lastState.rate);
        globalActions.setAutoRate(lastState.autoRate);
      }
    })
  }, [globalActions])

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
      <ResetButton>Reset the game</ResetButton>
    </div>
  );
}

export default App;
