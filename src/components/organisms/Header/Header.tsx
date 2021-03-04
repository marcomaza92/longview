import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import Toggler from '../../molecules/Toggler';
import styles from './Header.module.scss';

function Header(): ReactElement {
  return (
    <header className={styles.main}>
      <nav className={styles.navigation}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <div className={styles.title}>
        <h1>Longview</h1>
      </div>
      <div className={styles.switch}>
        <Toggler />
      </div>
    </header>
  );
}

export default Header;
