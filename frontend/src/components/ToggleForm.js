import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

function ToggleForm() {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div>
            {isLogin ? <Login toggleForm={toggleForm} /> : <Register toggleForm={toggleForm} />}
        </div>
    );
}

export default ToggleForm;
