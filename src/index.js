import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

// import { reducer } from './components/reducers/reducer';


import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

// export const store = createStore(reducer);

// console.log(store);

const rootElement = document.getElementById('root');
ReactDOM.render(
    // <Provider store={store}>
        <App />,
    /* </Provider>, */
 rootElement
);
