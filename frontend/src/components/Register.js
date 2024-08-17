import React, { useState } from 'react';
import axios from 'axios';

function Register({ toggleForm }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/register', { email, password });
            if (response.data.success) {
                window.location.href = 'https://www.youtube.com';
            }
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    return (
        <div className="form-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit">Register</button>
            </form>
            <p>Already have an account? <span onClick={toggleForm}>Login</span></p>
        </div>
    );
}

export default Register;
