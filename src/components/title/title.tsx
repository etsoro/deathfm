import React from 'react';
import Text from '../text/text';

interface Props {
  value: string;
}

export default function Title(props: Props) {
  return <Text value={props.value} size={20} />;
}
