import React from 'react';
import { Track } from '../../models/track.model';
import useProgress from '../../hooks/use-progress';

interface PropsType {
  track: Track;
}

// TODO: Fix triple re-render
function ProgressBar(props: PropsType) {
  const { progressText } = useProgress(props.track);

  return (
    <div>
      {progressText.elapsed} / {progressText.total}
    </div>
  );
}

export default ProgressBar;
