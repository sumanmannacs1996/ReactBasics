import React from 'react';
import Counter from './components/Counter';
import Auth from './components/Auth';
import Header from  './components/Header'
import UserProfile from './components/UserProfile';
import {useSelector} from 'react-redux';

function App() {
  const authState= useSelector(state=>state.auth.isAuthenticated);
  return (
    <React.Fragment>
      <Header></Header>
      {!authState && <Auth></Auth>}
      {authState && <UserProfile></UserProfile>}
      <Counter />
    </React.Fragment>
  );
}

export default App;
