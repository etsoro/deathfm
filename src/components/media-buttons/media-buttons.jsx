import { useState } from 'react';
import './media-buttons.scss';

function MediaButtons({ onPlay, onPause }) {
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
}

export { MediaButtons };
