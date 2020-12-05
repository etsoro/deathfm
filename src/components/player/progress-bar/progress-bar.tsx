import React, { useState } from 'react';
import useFormatter from '../../../hooks/use-formatter';
import './progress-bar.scss';

interface Props {
  total: number;
  elapsed: number;
  remaining: number;
}

export default function ProgressBar(props: Props) {
  const { formatMilliseconds } = useFormatter();
  const [rightProgressType, setRightProgressType] = useState<'total' | 'remaining'>('total');

  function switchRightProgressType() {
    setRightProgressType(rightProgressType === 'total' ? 'remaining' : 'total');
  }

  return (
    <div className="progress">
      <div className="progress__line" />
      <div className="progress__labels">
        <div className="progress__left">{formatMilliseconds(props.elapsed)}</div>
        <div className="progress__right" onClick={switchRightProgressType}>
          {rightProgressType === 'remaining' ? '-' : ''}
          {formatMilliseconds(props[rightProgressType])}
        </div>
      </div>
    </div>
  );
}
