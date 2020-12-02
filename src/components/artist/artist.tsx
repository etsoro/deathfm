import React from 'react';
import Text from '../text/text';

interface Props {
  value: string;
}

export default function Artist(props: Props) {
  return <Text value={props.value} size={18} color="rgba(255,255,255, 0.6)" />;
}
