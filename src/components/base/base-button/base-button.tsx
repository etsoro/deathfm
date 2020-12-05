import React from 'react';
import { PlayArrowRounded, StopRounded } from '@material-ui/icons';
import './base-button.scss';

interface Props {
  children?: string | JSX.Element;
  icon?: 'play' | 'stop';
  size?: 'default' | 'small' | 'large';
}

export default function BaseButton(props: Props) {
  let iconSize = 80;
  switch (props.size) {
    case 'small':
      iconSize = 60;
      break;
    case 'large':
      iconSize = 100;
      break;
    default:
      iconSize = 80;
  }

  switch (props.icon) {
    case 'play':
      return (
        <div className="button">
          <PlayArrowRounded style={{ fontSize: iconSize }} />
        </div>
      );
    case 'stop':
      return (
        <div className="button">
          <StopRounded style={{ fontSize: iconSize }} />
        </div>
      );
    default:
      return <div className="button">{props.children}</div>;
  }
}
