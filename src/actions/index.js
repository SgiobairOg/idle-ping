import { idbSet } from './../idb';

export const addToClicks = (store, amount) => {
    const clicks = store.state.clicks + amount;
    store.setState({ clicks });
    persistState(store.state);
};

export const setClicks = (store, clicks) => {
    store.setState({ clicks });
    persistState(store.state);
};

export const setRate = (store, rate) => {
    store.setState({ rate });
    persistState(store.state);
};

export const setAutoRate = (store, autoRate) => {
    store.setState({ autoRate });
    persistState(store.state);
};

const persistState = state => idbSet('state', state);