import PropTypes from 'prop-types';
import { useState } from 'react';
import './media-buttons.scss';

const MediaButtons = ({ onPlay, onPause }) => {
  const [buttonType, setButtonType] = useState('play');

  const togglePlaying = async () => {
    const prevButtonType = buttonType;
    setButtonType('loading');
    switch (buttonType) {
      case 'play':
        if (onPlay) await onPlay();
        break;
      case 'pause':
        if (onPause) onPause();
        break;
      default:
        break;
    }
    setButtonType(prevButtonType === 'pause' ? 'play' : 'pause');
  };

  return (
    <div className="media-buttons">
      <div>prev</div>
      <div onClick={togglePlaying}>play</div>
      <div>next</div>
    </div>
  );
};

MediaButtons.propTypes = {
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
};

export { MediaButtons };
