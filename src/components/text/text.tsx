import React from 'react';

interface Props {
  value: string;
  size?: number;
  color?: string;
}

export default function Text(props: Props) {
  return <div style={{ fontSize: `${props.size || '14'}px`, color: props.color || 'white' }}>{props.value}</div>;
}
