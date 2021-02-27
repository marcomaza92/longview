import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/Theme';
import styles from './Home.module.scss';
import { DisplayData } from '../../api/display';

const Home = () => {
  const theme = useContext(ThemeContext);
  const [data, setData] = useState(null);
  useEffect(() => {
    DisplayData().then((response) => {
      setData(response);
    });
  }, []);
  return (
    <div className={`${styles.main} ${styles[theme]}`}>
      {data?.categories[0].videos.map((item, index) => (
        <p key={index}>{item.description}</p>
      ))}
    </div>
  );
};

export default Home;
