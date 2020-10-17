import './Enhancement.css';

import React, { useEffect, useState } from 'react';

import useGlobal from './../../store';

function Enhancement(props) {
  const { name, rate, auto, unlock } = props.options;
  const [globalState, globalActions] = useGlobal();
  const [isLocked, setIsLocked] = useState(true)

  const lockedState = <div>
    <p>{ name } unlocks at {unlock} clicks.</p>
  </div>

  const unlockedState = <div>
    <p>{ name } is active! Now adding { rate } clicks {auto ? 'every second' : 'per click'}.</p>
  </div>

  useEffect(() => {
    if( globalState.clicks >= unlock ) {
      setIsLocked(false);
      auto ? globalActions.setAutoRate(rate) : globalActions.setRate( rate )

    }
  }, [globalState.clicks, unlock, globalActions, rate, auto])

  return (
    isLocked ? lockedState : unlockedState
  );
}

export default Enhancement;
