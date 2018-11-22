import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
//import { createLogger } from 'redux-logger';
import { searchRobots, requestRobots } from './reducers';
import './index.css';
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({ searchRobots, requestRobots });
//const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware/*, logger*/));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById('root'));

registerServiceWorker();