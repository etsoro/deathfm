import React from 'react';
import './button.scss';

interface Props {
  text: string;
}

export default function Button(props: Props) {
  return <div>{props.text}</div>;
}
