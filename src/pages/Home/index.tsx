import { useContext } from 'react';
import { ThemeContext } from '../../context/Theme';
import styles from './Home.module.scss';

const Home = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className={`${styles.main} ${styles[theme]}`}>
      <h1>Home page</h1>
    </div>
  );
};

export default Home;
