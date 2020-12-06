import React, { useState } from 'react';
import BaseButton from '../../base/base-button';
import './media-buttons.scss';

interface Props {
  onPlay?: () => void;
  onPause?: () => void;
}

export default function MediaButtons(props: Props) {
  const [buttonType, setButtonType] = useState<'play' | 'pause'>('play');

  function togglePlaying() {
    setButtonType((prevValue) => (prevValue === 'pause' ? 'play' : 'pause'));
    switch (buttonType) {
      case 'play':
        if (props.onPlay) props.onPlay();
        break;
      case 'pause':
        if (props.onPause) props.onPause();
        break;
      default:
        break;
    }
  }

  return (
    <div className="media-buttons">
      <BaseButton icon="previous" size="small" />
      <BaseButton icon={buttonType} size="default" onClick={togglePlaying} />
      <BaseButton icon="next" size="small" />
    </div>
  );
}
