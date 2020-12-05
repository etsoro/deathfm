import React from 'react';
import './background.scss';

interface Props {
  url: string;
}

export default function Background(props: Props) {
  return <img className="background" src={props.url} alt="" />;
}
