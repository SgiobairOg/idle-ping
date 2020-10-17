import React, { useEffect } from 'react';

import useGlobal from './../../store';

function AutoClicker() {
    const [globalState, globalActions] = useGlobal();
    const isActive = globalState.autoRate > 0;
    const activeMessage = <p>The Auto-clicker is adding { globalState.autoRate } clicks per second.</p>

    useEffect(() => {
        const interval = setInterval(() => {
            if(isActive) globalActions.addToClicks( globalState.autoRate )
        }, 1000);
        return () => clearInterval(interval);
    }, [globalActions, globalState, isActive]);


    return (
        <>
            { isActive ? activeMessage : null }
        </>
    );
}

export default AutoClicker;