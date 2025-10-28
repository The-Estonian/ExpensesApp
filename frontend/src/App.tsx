import { useEffect, useState } from 'react';
import Login from './components/Login/Login';
import Posts from './components/Posts/Posts';
import { status, logOut } from './components/connection/backend';

import styles from './App.module.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkStatus = async () => {
      const response = await status();
      const data = await response.json();
      if (data.authenticated == true) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    };

    checkStatus();
  }, []);

  const setAuthenticated = () => {
    setLoggedIn(!loggedIn);
  };

  const handleLogOut = () => {
    logOut();
    setAuthenticated();
  };

  return (
    <div className={styles.container}>
      {!loggedIn && <Login setAuthenticated={setAuthenticated} />}
      {loggedIn && <Posts />}
      {loggedIn && (
        <span className={styles.logout} onClick={handleLogOut}>
          Logout
        </span>
      )}
    </div>
  );
}

export default App;
