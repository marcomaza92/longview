import { ReactElement, useContext, useEffect, useRef } from 'react';
import { VideoContext } from '../../../context/Video';
import styles from './Display.module.scss';

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function Display(): ReactElement {
  const { video } = useContext(VideoContext);
  const videoRef = useRef(null);
  const previousVolume = usePrevious(video.volume) || 1;
  const previousId = usePrevious(video.id) || 0;

  useEffect(() => {
    if (videoRef.current !== null) {
      previousId !== video?.id
        ? videoRef.current.load()
        : video?.isPlaying
        ? videoRef.current.play()
        : videoRef.current.pause();
      previousVolume !== video?.volume
        ? (videoRef.current.volume = video?.volume)
        : (videoRef.current.volume = previousVolume);
      videoRef.current.style.setProperty('--brightness', video.brightness);
      videoRef.current.style.setProperty('--contrast', video.contrast);
    }
  }, [video, videoRef, previousVolume, previousId]);
  return (
    <section className={styles.main}>
      {video?.sources.length === 0 ? (
        <h2 className={styles.placeholder} data-testid="placeholder">
          Select a video to start watching!
        </h2>
      ) : (
        <video ref={videoRef} className={styles.video} poster={video.thumb}>
          {video?.sources.map((source, index) => (
            <source
              key={index}
              src={source}
              type={`video/${source.slice(-3)}`}
            />
          ))}
        </video>
      )}
    </section>
  );
}

export default Display;
