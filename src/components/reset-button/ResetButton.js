import './ResetButton.css';

import React, { useState } from 'react';

import useGlobal from './../../store';

function ResetButton(props) {
  const { children } = props;
  const [, globalActions] = useGlobal();
  const [needsConfirm, setNeedsConfirm] = useState(false);

  const handleReset = () => {
    console.log('Reset');
    if( !needsConfirm ) {
      setNeedsConfirm(true);
    } else {
      globalActions.setRate(1);
      globalActions.setAutoRate(0);
      globalActions.setClicks(0);
      setNeedsConfirm(false);
    }
  };

  const cancelReset = () => {
    setNeedsConfirm(false);
  }

  const resetButton = () => {
    return (      
      <button onClick={() => handleReset()}>
        { children }
      </button>
    )
  }

  const confirmButton = () => {
    return (
      <>   
        <button onClick={() => handleReset()}>Lose my data!</button> 
        <button onClick={() => cancelReset()}>Cancel</button>
      </>
    )
  }

  return (
    <div>
      { needsConfirm ? confirmButton() : resetButton() }
    </div>
  );
}

export default ResetButton;