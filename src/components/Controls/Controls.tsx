import { CircularProgress } from '@material-ui/core';
import { useQuery, useQueryClient } from 'react-query';
import { displayMovies } from '../../api/display';
import styles from './Controls.module.scss';

function Controls() {
  const query = useQuery('movies', displayMovies);
  console.log(query);
  return (
    <div className={styles.main}>
      {query.isLoading ? (
        <CircularProgress />
      ) : (
        query.data?.categories[0].videos.map((item, index) => (
          <p key={index}>{item.description}</p>
        ))
      )}
    </div>
  );
}

export default Controls;
