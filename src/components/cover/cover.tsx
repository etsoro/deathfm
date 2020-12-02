import React from 'react';
import './cover.scss';

interface Props {
  imageUrl: string;
}

export default function Cover(props: Props) {
  return (
    <div className="cover">
      <img src={props.imageUrl} className="cover__background" alt="" />
      <img src={props.imageUrl} className="cover__foreground" alt="" />
    </div>
  );
}
