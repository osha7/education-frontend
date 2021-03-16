import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Routing:
import {BrowserRouter as Router} from 'react-router-dom';

// Redux:
import { createStore, applyMiddleware } from 'redux';
// Thunk:
import thunk from "redux-thunk";
import { Provider } from 'react-redux'; 
// Reducers:
import rootReducer from './redux/reducers/combineReducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router >
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

