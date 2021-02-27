import { useQuery, useQueryClient } from 'react-query';
import { displayMovies } from '../../api/display';
import styles from './Controls.module.scss';

function Controls() {
  const queryClient = useQueryClient();
  const query = useQuery('movies', displayMovies);
  console.log(query);
  return (
    <div className={styles.main}>
      {query.data?.categories[0].videos.map((item, index) => (
        <p key={index}>{item.description}</p>
      ))}
    </div>
  );
}

export default Controls;
