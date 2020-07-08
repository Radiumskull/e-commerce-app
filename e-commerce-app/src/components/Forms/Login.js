import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { auth } from '../../actions/authActions';

const Login = (props) => {
    const authError = useSelector(state => state.auth.error);
    const authLoading = useSelector(state => state.auth.loading);
    const dispatch = useDispatch();
    const [email, setEmail ] = useState("");
    const [password, setPassword ] = useState("");
    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(auth(false, {email : email, password : password}));
    }
    return(<div className="form">
    <form onSubmit={submitHandler}>
      <div className="form-container">

          <h2 className="form-title">Sign-In</h2>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                
            </div>


            <div className="input-group">
            <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>


            <strong style={{color : 'red'}}>{authError}</strong>
          <button type="submit" className="button primary">Signin</button>


          <div>New to FlipMarket?<span onClick={() => props.viewHandler('register')} style={{color : 'blue', cursor : 'pointer'}}> Register</span></div>
      </div>
    </form>
  </div>);
}

export default withRouter(Login);