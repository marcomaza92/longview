import { IconButton } from '@material-ui/core';
import { WbCloudy, WbSunny } from '@material-ui/icons';
import { ReactElement, useContext } from 'react';
import { ThemeContext } from '../../../context/Theme';
import styles from './Toggler.module.scss';

function Toggler(): ReactElement {
  const { options, setOptions } = useContext(ThemeContext);
  return (
    <div className={styles.main}>
      <IconButton
        onClick={() =>
          setOptions({
            ...options,
            mode: options.mode === 'dark' ? 'light' : 'dark',
          })
        }
      >
        {options.mode === 'dark' ? (
          <WbSunny color="secondary" />
        ) : (
          <WbCloudy color="secondary" />
        )}
      </IconButton>
    </div>
  );
}

export default Toggler;
