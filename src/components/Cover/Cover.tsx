import React from 'react';
import './Cover.scss';

interface PropsType {
  imageUrl: string;
}

function Cover(props: PropsType) {
  return (
    <div className="cover">
      <img src={props.imageUrl} className="cover__background" alt="" />
      <img src={props.imageUrl} className="cover__foreground" alt="" />
    </div>
  );
}

export default Cover;
