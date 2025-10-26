import { Suspense, useState } from 'react';
import Login from './components/Login/Login';
import Posts from './components/Posts/Posts';

import styles from './App.module.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const setAuthenticated = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <div>
      {!loggedIn && <Login setAuthenticated={setAuthenticated} />}
      {loggedIn && <Posts />}
      {loggedIn && <span className={styles.logout} onClick={setAuthenticated}>Logout</span>}
    </div>
  );
}

export default App;
