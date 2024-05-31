import React,{useState} from 'react';
import styles from './Login.module.css';
import axios from 'axios';

function Login({ handleClose }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    function handleSubmit(e) {
      e.preventDefault();
  
      axios.post('http://localhost:8000/login', { username, password })
        .then((result) => {
          console.log(result);
          if (result.data==='success Password Match') {
           console.log("This is correct syntax"); 
          } 
        })
        .catch(err => console.log(err));
    }
    return (
        <div className={styles.overlay}>
            <div className={styles.main}>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
          <input type="text" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br/>
                    <button type="submit" className={styles.loginButton}>Login</button><br />
                    <button type="button" onClick={handleClose} className={styles.closeButton}>Close</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
