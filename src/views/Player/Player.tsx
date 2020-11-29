import React from 'react';
import CollapseButton from '../../components/Button/CollapseButton';
import Cover from '../../components/Cover/Cover';
import Title from '../../components/Title/Title';
import Artist from '../../components/Artist/Artist';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import Button from '../../components/Button/Button';
import VolumeBar from '../../components/VolumeBar/VolumeBar';
import Background from '../../components/Background/Background';
import useTrack from '../../hooks/use-track';
import './Player.scss';

function Player() {
  const { track } = useTrack();

  if (track)
    return (
      <>
        <Background url={track.cover} />
        <div className="player">
          <CollapseButton />
          <Cover imageUrl={track.cover} />
          <Title value={track.track} />
          <Artist value={track.artist || ''} />
          <ProgressBar track={track} />
          <Button text="sample button" />
          <VolumeBar value={10} />
        </div>
      </>
    );
  else return <div></div>;
}

export default Player;
