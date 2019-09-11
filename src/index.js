import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

//Imports
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './components/reducers/Reducer';

const store = createStore(reducer);

console.log('Store in index',store);



const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    rootElement
);
