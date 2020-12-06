import React from 'react';

interface Props {
  children?: string;
  size?: number;
  weight?: number;
  color?: string;
  opacity?: number;
  top?: number;
  bottom?: number;
  center?: boolean;
}

export default function BaseText(props: Props) {
  return (
    <div
      style={{
        fontSize: `${props.size || '14'}px`,
        fontWeight: props.weight || 400,
        color: props.color || 'white',
        opacity: props.opacity,
        marginTop: props.top + 'px',
        marginBottom: props.bottom + 'px',
        textAlign: props.center ? 'center' : 'left',
        lineHeight: 'normal'
      }}
    >
      {props.children}
    </div>
  );
}
