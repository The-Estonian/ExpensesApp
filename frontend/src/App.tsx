import { useEffect, useState } from 'react';
import Login from './components/Login/Login';
import Posts from './components/Posts/Posts';

import styles from './App.module.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = document.cookie
      .split(';')
      .some((item) => item.trim().startsWith(`token=`));
    if (token == undefined) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  }, []);

  const setAuthenticated = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <div className={styles.container}>
      {!loggedIn && <Login setAuthenticated={setAuthenticated} />}
      {loggedIn && <Posts />}
      {loggedIn && (
        <span className={styles.logout} onClick={setAuthenticated}>
          Logout
        </span>
      )}
    </div>
  );
}

export default App;
