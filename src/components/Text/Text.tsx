import React from 'react';

type PropsType = {
  value: string;
  size?: number;
  color?: string;
};

const Text: React.FC<PropsType> = (props) => {
  return <div style={{ fontSize: `${props.size || '14'}px`, color: props.color || 'white' }}>{props.value}</div>;
};

export default Text;
