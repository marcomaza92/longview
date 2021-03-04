import { ReactElement } from 'react';
import styles from './Footer.module.scss';

function Footer(): ReactElement {
  return (
    <footer className={styles.main} data-testid="footer">
      <p>Longview - Visual control of the future</p>
    </footer>
  );
}

export default Footer;
