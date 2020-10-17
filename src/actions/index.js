export const addToClicks = (store, amount) => {
    const clicks = store.state.clicks + amount;
    store.setState({ clicks });
};

export const setRate = (store, rate) => {
    store.setState({ rate });
};

export const setAutoRate = (store, autoRate) => {
    store.setState({ autoRate });
};