import React from 'react';
import './cover.scss';

interface Props {
  imageUrl?: string;
  active?: boolean;
}

export default function Cover(props: Props) {
  const defaultCover = 'http://death.fm/images/logos/dfm_logo-200x200.png';

  return (
    <div className={props.active ? 'cover active' : 'cover'}>
      <img src={props.imageUrl || defaultCover} className="cover__background" alt="" />
      <img src={props.imageUrl || defaultCover} className="cover__foreground" alt="" />
    </div>
  );
}
