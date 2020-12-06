import React from 'react';
import { PlayCircleFilledRounded, PauseCircleFilledRounded } from '@material-ui/icons';
import './base-button.scss';

interface Props {
  children?: string | JSX.Element;
  icon?: 'play' | 'pause';
  size?: 'default' | 'small' | 'large';
  onClick?: () => void;
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
        <div className="button" onClick={props.onClick}>
          <PlayCircleFilledRounded style={{ fontSize: iconSize }} />
        </div>
      );
    case 'pause':
      return (
        <div className="button" onClick={props.onClick}>
          <PauseCircleFilledRounded style={{ fontSize: iconSize }} />
        </div>
      );
    default:
      return (
        <div className="button" onClick={props.onClick}>
          {props.children}
        </div>
      );
  }
}
