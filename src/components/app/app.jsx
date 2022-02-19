import './app.scss';
import { useTrack } from '../../hooks/use-track';
import { usePlayer } from '../../hooks/use-player';
import { Background } from '../background';
import { Cover } from '../cover';
import { ProgressBar } from '../progress-bar';
import { MediaButtons } from '../media-buttons';

const App = () => {
  const { track, progress } = useTrack();
  const { play, pause, isPlaying } = usePlayer();

  // TODO: Make good loader
  if (!track) return <div>loading...</div>;

  return (
    <div className="app">
      <Background url={track.cover} />
      <div className="player">
        <div className="album">{track.album}</div>
        <Cover url={track.cover} active={isPlaying} />
        <div className="track">{track.track}</div>
        <div className="artist">{track.artist}</div>
        <ProgressBar
          total={progress.total}
          elapsed={progress.elapsed}
          elapsedPercentage={progress.elapsedPercentage}
          remaining={progress.remaining}
        />
        <MediaButtons onPlay={play} onPause={pause} />
      </div>
    </div>
  );
};

export { App };
