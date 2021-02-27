import { useContext } from 'react';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../../api/common';
import Controls from '../../components/Controls';
import Display from '../../components/Display';
import { ThemeContext } from '../../context/Theme';
import styles from './Home.module.scss';

const Home = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className={`${styles.main} ${styles[theme]}`}>
      <h1>Home page</h1>
      <QueryClientProvider client={queryClient}>
        <Display />
        <Controls />
      </QueryClientProvider>
    </div>
  );
};

export default Home;
