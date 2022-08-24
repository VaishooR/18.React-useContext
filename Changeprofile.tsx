import * as React from 'react';
import {useState} from 'react';
import {useContext} from 'react';
import {AppContext} from './App';

function Changeprofile(props){
  const{setusername}=useContext(AppContext);

  const[newusername,setnewusername]=useState('')
  return(
    <div>
      <input type="text" onChange={(e)=>{
        setnewusername(e.target.value)
      }}/>
      <button onClick={()=>{setusername(newusername)}}>Change username</button>
    </div>
  )
}
export default Changeprofile;