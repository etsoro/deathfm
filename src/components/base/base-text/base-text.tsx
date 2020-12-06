import React from 'react';

interface Props {
  children?: string;
  size?: number;
  color?: string;
  opacity?: number;
  top?: number;
  bottom?: number;
}

export default function BaseText(props: Props) {
  return (
    <div
      style={{
        fontSize: `${props.size || '14'}px`,
        color: props.color || 'white',
        opacity: props.opacity,
        marginTop: props.top + 'px',
        marginBottom: props.bottom + 'px'
      }}
    >
      {props.children}
    </div>
  );
}
