import { ReactElement } from 'react';
import Controls from '../../components/molecules/Controls';
import Display from '../../components/molecules/Display';
import styles from './Home.module.scss';

function Home(): ReactElement {
  return (
    <main className={styles.content}>
      <Display />
      <Controls />
    </main>
  );
}

export default Home;
