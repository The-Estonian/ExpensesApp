import { NavLink } from 'react-router-dom';

import styles from './Menu.module.css';

const Menu = ({ auth, loggedIn }:{auth: boolean, loggedIn: boolean}) => {
  const linkChecker = ({ isActive }: { isActive: boolean }) =>
    isActive ? styles.activeLink : styles.notActiveLink;
  return (
    <ul className={styles.navigation}>
      <li>
        <NavLink to='/' end className={linkChecker}>
          Posts
        </NavLink>
      </li>
      <li>
        <NavLink to='/portfolio' className={linkChecker}>
          Login
        </NavLink>
      </li>
      {loggedIn && (
        <li>
          <p className={styles.notActiveLink}>Logout</p>
        </li>
      )}
    </ul>
  );
};

export default Menu;
