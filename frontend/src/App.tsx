import { useState } from 'react';

import styles from './App.module.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className={styles.container}>
      {!loggedIn && <p>Log In</p>}
      {loggedIn && <p>Log Out</p>}
    </div>
  );
}

export default App;
