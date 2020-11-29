import React from 'react';
import Text from '../Text/Text';

interface PropsType {
  value: string;
}

function Artist(props: PropsType) {
  return <Text value={props.value} size={18} color="rgba(255,255,255, 0.6)" />;
}

export default Artist;
