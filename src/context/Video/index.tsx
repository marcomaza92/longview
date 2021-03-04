import { createContext, ReactElement, useState } from 'react';
import { useQuery } from 'react-query';
import { displayMovies } from '../../api/display';

const initialQuery = null;
const initialVideo = {
  id: 0,
  title: '',
  subtitle: '',
  description: '',
  thumb: '',
  sources: [],
  volume: 1,
  brightness: 1,
  contrast: 1,
  isCurrent: false,
  isPlaying: false,
  isPaused: true,
};

export const VideoContext = createContext({
  video: initialVideo,
  query: initialQuery,
  setVideo: (initialVideo) => initialVideo,
});

interface VideoProviderProps {
  children: ReactElement;
}

const VideoProvider: React.FC<VideoProviderProps> = ({ children }) => {
  const query = useQuery('movies', displayMovies);
  const [video, setVideo] = useState(initialVideo);
  return (
    <VideoContext.Provider
      value={{
        query,
        video,
        setVideo,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export default VideoProvider;
