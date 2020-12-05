import React from 'react';
import useFormatter from '../../hooks/use-formatter';
import './progress-bar.scss';

interface Props {
  total: number;
  elapsed: number;
  remaining: number;
}

export default function ProgressBar(props: Props) {
  const { formatMilliseconds } = useFormatter();

  return (
    <div>
      {formatMilliseconds(props.elapsed)} / {formatMilliseconds(props.total)}
    </div>
  );
}
