import { useState } from 'react';
import PropTypes from 'prop-types';
import './media-buttons.scss';
import { ReactComponent as PlayIcon } from '../../assets/icons/play.svg';
import { ReactComponent as PauseIcon } from '../../assets/icons/pause.svg';
import { ReactComponent as PrevIcon } from '../../assets/icons/prev.svg';
import { ReactComponent as NextIcon } from '../../assets/icons/next.svg';

const MediaButtons = ({ onPlay, onPause }) => {
  const [buttonType, setButtonType] = useState('play');

  const togglePlaying = async () => {
    setButtonType((prevButtonType) => (prevButtonType === 'pause' ? 'play' : 'pause'));
    try {
      if (buttonType === 'play') await onPlay();
      if (buttonType === 'pause') await onPause();
    } catch (e) {
      setButtonType('play');
    }
  };

  return (
    <div className="media-buttons">
      <div className="button left">
        <PrevIcon width={30} height={30} fill="#e9e9e9" />
      </div>
      <div className="button middle" onClick={togglePlaying}>
        {buttonType === 'play' && <PlayIcon width={85} height={85} fill="#e9e9e9" />}
        {buttonType === 'pause' && <PauseIcon width={85} height={85} fill="#e9e9e9" />}
      </div>
      <div className="button right">
        <NextIcon width={30} height={30} fill="#e9e9e9" />
      </div>
    </div>
  );
};

MediaButtons.propTypes = {
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
};

export { MediaButtons };
