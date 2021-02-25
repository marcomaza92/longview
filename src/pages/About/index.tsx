import { Link } from 'react-router-dom';
import styles from './About.module.css';

function About() {
  return (
    <div className={styles.main}>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <h1>About Page</h1>
    </div>
  );
}

export default About;