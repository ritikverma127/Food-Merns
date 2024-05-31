import React, { useState } from 'react';
import styles from "./Signup.module.css";
import axios from 'axios';
import Login from '../Login/Login'; 

function SignUp() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showLogin, setShowLogin] = useState(false); 

    const handleLogin = (e) => {
        e.preventDefault();
        setShowLogin(true); 
    };

    const handleCloseLogin = () => {
        setShowLogin(false); 
    };

    const handleSubmit = (e) => {
       
        e.preventDefault();
        axios.post('http://localhost:8000/demo', { name, username, password })
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
         
    };

    return (
        <div id='SignUp'>
            {showLogin && <Login handleClose={handleCloseLogin} />} 
            <div className={styles.main}>
                <h1 className={styles.h1}>SignUp</h1>
                <div className={styles.container}>
                    <form>
                        <input type='text' id='name' name='name' placeholder='Name' onChange={(e) => setName(e.target.value)} /> <br /><br />
                        <input type="text" id='username' name="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} /> <br /><br />
                        <input type="text" id='password' name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /> <br /><br />
                        <h4 className={styles.h44}>Already have an Account?<button className={styles.buttonss} onClick={handleLogin}>Login In</button></h4>
                        <button className={styles.buttons} onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
