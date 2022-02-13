import { useState } from 'react';
import './media-buttons.scss';

function MediaButtons({ onPlay, onPause }) {
  const [buttonType, setButtonType] = useState('play');

  function togglePlaying() {
    setButtonType((prevValue) => (prevValue === 'pause' ? 'play' : 'pause'));
    switch (buttonType) {
      case 'play':
        if (onPlay) onPlay();
        break;
      case 'pause':
        if (onPause) onPause();
        break;
      default:
        break;
    }
  }

  return (
    <div className="media-buttons">
      <div>prev</div>
      <div onClick={togglePlaying}>play</div>
      <div>next</div>
    </div>
  );
}

export { MediaButtons };
