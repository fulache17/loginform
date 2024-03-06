import React from "react";
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import logo from './logo.png';

const LoginForm = () => {
    return (
        <div className='wrapper'>
            <form action="">
            <img src={logo} alt="Logo" />
                <h1>Inzpect Technologies Inc.</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required/>
                    <FaUser className="icon"/>
                    </div>
                    <div className="input-box">
                    <input type="password" placeholder='Password' required/>
                    <FaLock className="icon"/>
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;