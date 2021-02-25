import styles from './Home.module.scss';
import Controls from '../../components/Controls';
import Display from '../../components/Display';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className={styles.main}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Controls />
      <Display />
      <h1>Home Page</h1>
    </div>
  );
}

export default Home;
