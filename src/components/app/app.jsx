import './app.scss';
import { useTrack } from '../../hooks/use-track';
import { usePlayer } from '../../hooks/use-player';
import { Cover } from '../cover';
import { ProgressBar } from '../progress-bar';
import { MediaButtons } from '../media-buttons';

const App = () => {
  const { track, progress } = useTrack();
  const { play, pause } = usePlayer();

  // TODO: Make good loader
  if (!track) return <div>loading...</div>;

  return (
    <div className="app">
      <div className="player">
        <div className="title">Playing now...</div>
        <Cover url={track.cover} alt={track.altCover} />
        <div className="track">{track.track}</div>
        <div className="artist_album">{`${track.artist} — ${track.album}`}</div>
        <MediaButtons onPlay={play} onPause={pause} />
        <ProgressBar
          total={progress.total}
          elapsed={progress.elapsed}
          elapsedPercentage={progress.elapsedPercentage}
          remaining={progress.remaining}
        />
      </div>
    </div>
  );
};

export { App };
