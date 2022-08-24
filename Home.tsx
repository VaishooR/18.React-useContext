import * as React from 'react';
import {useContext} from 'react';
import {AppContext} from './App';

function Home(){
  const{username}=useContext(AppContext);
  return(
    <div>
      <h1>Home page</h1>
      <h3>Name: {username}</h3>
    </div>
  )
}
export default Home;