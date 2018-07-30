import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';

const createStoreWithMiddleware=applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
            <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())} >
            <App />
            </Provider>, document.getElementById('container'));
registerServiceWorker();