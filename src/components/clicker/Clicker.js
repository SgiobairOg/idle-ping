import './Clicker.css';

import React from 'react';
import useGlobal from './../../store';

function Clicker(props) {
  const { children } = props;
  const [globalState, globalActions] = useGlobal();

  return (
    <button onClick={() => globalActions.addToClicks( globalState.rate )}>
      { children }
    </button>
  );
}

export default Clicker;