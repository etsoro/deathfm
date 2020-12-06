import React from 'react';

interface Props {
  value: number;
}

export default function VolumeBar(props: Props) {
  return <div>Volume {props.value}</div>;
}
