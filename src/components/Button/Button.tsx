import React from 'react';

interface PropsType {
  text: string;
}

function Button(props: PropsType) {
  return <div>{props.text}</div>;
}

export default Button;
