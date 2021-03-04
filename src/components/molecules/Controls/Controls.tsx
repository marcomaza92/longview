import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  IconButton,
  Slider,
} from '@material-ui/core';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import styles from './Controls.module.scss';
import { ReactElement, useContext } from 'react';
import { ThemeContext } from '../../../context/Theme';
import { VideoContext } from '../../../context/Video';
import {
  BrightnessHigh,
  BrightnessLow,
  BrightnessMedium,
  PauseOutlined,
  VolumeOff,
  VolumeUp,
} from '@material-ui/icons';

function Controls(): ReactElement {
  const { options } = useContext(ThemeContext);
  const { video, query, setVideo } = useContext(VideoContext);
  return (
    <section className={`${styles.main}`}>
      {query.isLoading ? (
        <div className={styles.loader}>
          <CircularProgress />
        </div>
      ) : (
        <aside>
          <div className={styles.videoList}>
            {query.data?.categories[0].videos.map((item, index) => (
              <Card
                id={index}
                className={styles.card}
                key={index}
                onClick={(event) => {
                  setVideo({
                    ...item,
                    id: index,
                    sources: item.sources,
                    volume: 1,
                    brightness: 1,
                    contrast: 1,
                    thumb: `${item.sources[0].substring(
                      0,
                      item.sources[0].lastIndexOf('/') + 1
                    )}${item.thumb}`,
                    isCurrent:
                      parseInt(event.currentTarget.id) === index ? true : false,
                    isPlaying: false,
                    isPaused: true,
                  });
                  console.log(event.currentTarget.id, index);
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={`${item.sources[0].substring(
                      0,
                      item.sources[0].lastIndexOf('/') + 1
                    )}${item.thumb}`}
                    title={item.title}
                  />
                  <CardContent>
                    <div
                      className={
                        video.isCurrent && video.id === index
                          ? `isCurrent`
                          : `isNotCurrent`
                      }
                    >
                      <h3>{item.title}</h3>
                      <p>{item.subtitle}</p>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </div>
          {video.sources.length !== 0 ? (
            <div className={styles.controls}>
              <IconButton
                aria-label="previous"
                color="secondary"
                onClick={() =>
                  video.isCurrent && video.id !== 0
                    ? setVideo({
                        ...video,
                        ...query.data.categories[0].videos[video.id - 1],
                        isPlaying: false,
                        isPaused: true,
                        id: video.id - 1,
                      })
                    : setVideo({
                        ...video,
                        ...query.data.categories[0].videos[
                          query.data.categories[0].videos.length - 1
                        ],
                        isPlaying: false,
                        isPaused: true,
                        id: query.data.categories[0].videos.length - 1,
                      })
                }
              >
                {options.direction === 'rtl' ? (
                  <SkipNextIcon />
                ) : (
                  <SkipPreviousIcon />
                )}
              </IconButton>
              <IconButton
                aria-label="play/pause"
                color="secondary"
                onClick={() =>
                  setVideo({
                    ...video,
                    isPlaying: !video?.isPlaying,
                    isPaused: !video?.isPaused,
                  })
                }
              >
                {video.isPaused && (
                  <PlayArrowIcon className={styles.playIcon} />
                )}
                {video.isPlaying && (
                  <PauseOutlined className={styles.pauseIcon} />
                )}
              </IconButton>
              <IconButton
                aria-label="next"
                color="secondary"
                onClick={() =>
                  video.isCurrent &&
                  video.id !== query.data.categories[0].videos.length - 1
                    ? setVideo({
                        ...video,
                        ...query.data.categories[0].videos[video.id + 1],
                        isPlaying: false,
                        isPaused: true,
                        id: video.id + 1,
                      })
                    : setVideo({
                        ...video,
                        ...query.data.categories[0].videos[0],
                        isPlaying: false,
                        isPaused: true,
                        id: 0,
                      })
                }
              >
                {options.direction === 'rtl' ? (
                  <SkipPreviousIcon />
                ) : (
                  <SkipNextIcon />
                )}
              </IconButton>
              <div className={styles.volume}>
                <IconButton
                  onClick={() =>
                    video.volume !== 0
                      ? setVideo({
                          ...video,
                          volume: 0,
                        })
                      : setVideo({
                          ...video,
                          volume: 1,
                        })
                  }
                >
                  {video.volume !== 0 ? (
                    <VolumeUp color="secondary" />
                  ) : (
                    <VolumeOff color="secondary" />
                  )}
                </IconButton>
                <Slider
                  color="secondary"
                  step={0.01}
                  min={0}
                  max={1}
                  valueLabelDisplay="auto"
                  value={video.volume}
                  onChange={(event, newValue = video.volume) => {
                    setVideo({
                      ...video,
                      volume: newValue,
                    });
                  }}
                  aria-labelledby="continuous-slider"
                />
              </div>
              <div className={styles.brightness}>
                <IconButton
                  onClick={() =>
                    video.brightness !== 0
                      ? setVideo({
                          ...video,
                          brightness: 0,
                        })
                      : setVideo({
                          ...video,
                          brightness: 1,
                        })
                  }
                >
                  {video.brightness !== 0 ? (
                    <BrightnessHigh color="secondary" />
                  ) : (
                    <BrightnessLow color="secondary" />
                  )}
                </IconButton>
                <Slider
                  color="secondary"
                  step={0.01}
                  min={0}
                  max={1}
                  valueLabelDisplay="auto"
                  value={video.brightness}
                  onChange={(event, newValue = video.brightness) => {
                    setVideo({
                      ...video,
                      brightness: newValue,
                    });
                  }}
                  aria-labelledby="continuous-slider"
                />
              </div>
              <div className={styles.contrast}>
                <IconButton
                  onClick={() =>
                    video.contrast !== 0
                      ? setVideo({
                          ...video,
                          contrast: 0,
                        })
                      : setVideo({
                          ...video,
                          contrast: 1,
                        })
                  }
                >
                  {video.contrast !== 0 ? (
                    <BrightnessMedium color="secondary" />
                  ) : (
                    <BrightnessLow color="secondary" />
                  )}
                </IconButton>
                <Slider
                  color="secondary"
                  step={0.01}
                  min={0}
                  max={1}
                  valueLabelDisplay="auto"
                  value={video.contrast}
                  onChange={(event, newValue = video.contrast) => {
                    setVideo({
                      ...video,
                      contrast: newValue,
                    });
                  }}
                  aria-labelledby="continuous-slider"
                />
              </div>
            </div>
          ) : null}
        </aside>
      )}
    </section>
  );
}

export default Controls;
