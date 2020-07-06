import React, { useState } from 'react';

import Login from '../components/Forms/Login';
import Register from '../components/Forms/Register';

const Auth = () => {
    const [formView, setView ] = useState('login');
    return(<div className="auth-page">
        {formView === 'login' ? <Login viewHandler={setView}/> : <Register viewHandler={setView}/>}
    </div>);
}

export default Auth;