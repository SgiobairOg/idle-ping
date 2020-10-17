import './ClickDisplay.css'

import React from 'react';
import useGlobal from './../../store';

function ClickDisplay() {
    const [globalState] = useGlobal();

  return (
    <div>
      <p>You have completed { globalState.clicks } clicks! { globalState.clicks > 0 ? 'Yay you!' : 'Click it, click it!'}</p>
      <p>Your click rate is { globalState.rate }</p>
    </div>
  );
}

export default ClickDisplay;