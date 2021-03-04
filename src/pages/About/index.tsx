import { ReactElement } from 'react';
import styles from './About.module.scss';

function About(): ReactElement {
  return (
    <main className={styles.main}>
      <div className={styles.block}>
        <h2>Visual control of the future</h2>
        <h3>
          Longview is a video player that allows you to consume a list of videos
          from an API.
        </h3>
        <h3>
          It comes with all the standard media controls and some advanced
          controls that let you tweak the brightness and contrast.
        </h3>
      </div>
      <div className={styles.block}>
        <h2>The author</h2>
        <h3>
          Marco is a web developer with more than 5 years in the industry.
        </h3>
        <h3>His passions are music, cook and, of course, programming.</h3>
      </div>
      <div className={styles.block}>
        <h2>Resources</h2>
        <p>
          <a
            href="https://gitlab.com/marcomaza92/longview/-/blob/master/README.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            README
          </a>
        </p>
        <p>
          <a
            href="https://gitlab.com/marcomaza92/longview"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repository
          </a>
        </p>
        <p>
          <a
            href="https://marcomaza.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Author's Website
          </a>
        </p>
      </div>
    </main>
  );
}

export default About;
