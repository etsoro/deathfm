import React from 'react';
import Text from '../Text/Text';

interface PropsType {
  value: string;
}

function Title(props: PropsType) {
  return <Text value={props.value} size={20} />;
}

export default Title;
