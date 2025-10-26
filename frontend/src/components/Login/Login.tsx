import { useState } from 'react';

import { loginUser } from '../connection/backend';
import Loader from '../Loader/Loader';
import styles from './Login.module.css';

type LoginProps = {
  setAuthenticated: () => void;
};

const Login = ({ setAuthenticated }: LoginProps) => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState('');

  const usernameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    setLoading(true);
    setShowError(false);
    try {
      const response = await loginUser({
        username,
        password,
      });

      const data = await response.json();

      if (!response.ok || (data.status && data.status !== 200)) {
        setError(data.message || 'Login failed');
        setShowError(true);
        setLoading(false);
        return;
      }
      setAuthenticated();
    } catch (error: any) {
      setError(error.message || 'Unexpected error');
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={styles.loginContainer}>
      {!loading && (
        <div className={styles.loginInput}>
          <span>Username</span>
          <input type='text' value={username} onChange={usernameHandler} />
          <span>Password</span>
          <input type='text' value={password} onChange={passwordHandler} />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
      {showError && <p>{error}</p>}
      {loading && <Loader />}
    </div>
  );
};

export default Login;
