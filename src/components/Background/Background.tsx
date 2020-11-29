import React from 'react';
import styles from './background.module.css';

interface PropsType {
  url: string;
}

function Background(props: PropsType) {
  return <img className={styles.background} src={props.url} alt="" />;
}

export default Background;
