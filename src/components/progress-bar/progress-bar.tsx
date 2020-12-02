import React from 'react';
import { Track } from '../../models/track.model';
import useProgress from '../../hooks/use-progress';
import './progress-bar.scss';

interface Props {
  track: Track;
}

// TODO: Fix triple re-render
export default function ProgressBar(props: Props) {
  const { progressText } = useProgress(props.track);

  return (
    <div>
      {progressText.elapsed} / {progressText.total}
    </div>
  );
}
