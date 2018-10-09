import React from 'react';
import {NavLink} from 'react-router-dom';
const SignedOutLink=()=>{
    return (
      <ul className="right"  >
      <li><NavLink to='/signin'>Signin</NavLink></li>
      <li><NavLink to='/task'>Tasks</NavLink></li>
      <li><NavLink to='/signup'>Signup</NavLink></li>
      </ul>
    )
};
export default SignedOutLink