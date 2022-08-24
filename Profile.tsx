import * as React from 'react';
import Changeprofile from './Changeprofile';
import {useContext} from 'react';
import {AppContext} from './App';


function Profile(){
  const{username}=useContext(AppContext);
  return(
    <div>
      <h1>Profile page</h1>
      <p>Profile name is {username}.</p>
      <Changeprofile />
    </div>
  )
}
export default Profile;