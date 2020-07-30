import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../actions/authActions';

const Register = (props) => {
    const [email, setEmail ] = useState("");
    const [password, setPassword ] = useState("");
    
    
    const dispatch = useDispatch();
    const authLoading = useSelector(state => state.auth.loading);
    const authError = useSelector(state => state.auth.error);

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(auth(true, {email : email, password : password}));
    }

    return(<div className="form">
    <form onSubmit={submitHandler}>
      <div className="form-container">

          <h2 className="form-title">Register</h2>

            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                
            </div>


            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>


            <strong style={{color : 'red'}}>{authError}</strong>
          <button type="submit" className="button primary">Register</button>


          <div>Already a User?<span onClick={() => props.viewHandler('login')} style={{color : 'blue', cursor : 'pointer'}}> Login</span></div>
          
      </div>
    </form>
  </div>);
}


export default withRouter(Register);