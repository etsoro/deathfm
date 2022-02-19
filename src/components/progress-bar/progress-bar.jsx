import { useState } from 'react';
import PropTypes from 'prop-types';
import './progress-bar.scss';
import { formatMilliseconds } from '../../utilities/formatters';

function ProgressBar(props) {
  const [rightProgressType, setRightProgressType] = useState('remaining');

  const switchRightProgressType = () => {
    setRightProgressType(rightProgressType === 'total' ? 'remaining' : 'total');
  };

  return (
    <div className="progress">
      <div className="progress__line">
        <div className="subline" style={{ width: props.elapsedPercentage + '%' }} />
      </div>
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

ProgressBar.propTypes = {
  elapsedPercentage: PropTypes.number,
  elapsed: PropTypes.number,
};

export { ProgressBar };
