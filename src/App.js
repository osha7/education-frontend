import React from 'react';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import SignIn from './components/signin';

function App() {

  const user = useSelector( state => state.userReducer.user);
  const dispatch = useDispatch(); 

  return (
    <div className="App">
      <SignIn />
  
    </div>
  );
}

export default App;
