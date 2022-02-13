import React from 'react';
import './background.scss';

function Background({ url }) {
  return <img className="background" src={url} alt="" />;
}

export { Background };
