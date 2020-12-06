import React from 'react';
import {
  PlayCircleFilledRounded,
  PauseCircleFilledRounded,
  SkipNextRounded,
  SkipPreviousRounded
} from '@material-ui/icons';
import './base-button.scss';

interface Props {
  children?: string | JSX.Element;
  icon?: 'play' | 'pause' | 'previous' | 'next';
  size?: 'default' | 'small' | 'large';
  onClick?: () => void;
}

export default function BaseButton(props: Props) {
  let iconSize: number;
  switch (props.size) {
    case 'small':
      iconSize = 45;
      break;
    case 'large':
      iconSize = 110;
      break;
    default:
      iconSize = 75;
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
    case 'previous':
      return (
        <div className="button" onClick={props.onClick}>
          <SkipPreviousRounded style={{ fontSize: iconSize }} />
        </div>
      );
    case 'next':
      return (
        <div className="button" onClick={props.onClick}>
          <SkipNextRounded style={{ fontSize: iconSize }} />
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
