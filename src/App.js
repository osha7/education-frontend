import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import Home from './components/home/home';
import Jurisdictions from './components/jurisdictions/jurisdictions';
import Standards from './components/standards/standards';

function App() {

  const user = useSelector( state => state.userReducer.user);
  const dispatch = useDispatch(); 

  return (
    <div className="App">
      <Switch >
        <Route exact path="/" component={Home} />
        <Route exact path="/jurisdictions" component={Jurisdictions} />
        <Route exact path="/standards" component={Standards} />
      </Switch>
    </div>
  );
}

export default App;
