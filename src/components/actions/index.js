export const removeFeature = item => {
    console.log('action creator was invoked');
    return { type: 'REMOVE_FEATURE', payload: item};
};

export const buyItem = item => {
    return { type: 'BUY_ITEM', payload: item};
}