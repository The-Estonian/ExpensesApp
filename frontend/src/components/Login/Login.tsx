import { useState } from 'react';
import styles from './Login.module.css';

const Login = ({ setAuthenticated }: { setAuthenticated: () => void }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    setAuthenticated();
  };
  return (
    <div className={styles.loginContainer}>
      <span>Username</span>
      <input type='text' name='' id='' />
      <span>Password</span>
      <input type='text' name='' id='' />
      <input type='submit' value='Login' onClick={handleLogin} />
    </div>
  );
};

export default Login;
