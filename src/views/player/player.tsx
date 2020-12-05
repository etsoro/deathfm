import React, { useEffect } from 'react';
import Artist from '../../components/artist';
import Background from '../../components/background';
import Button from '../../components/button';
import CollapseButton from '../../components/collapse-button';
import Cover from '../../components/cover';
import Title from '../../components/title';
import ProgressBar from '../../components/progress-bar';
import VolumeBar from '../../components/volume-bar';
import useTrack from '../../hooks/use-track';
import './player.scss';

export default function Player() {
  const { track, progress } = useTrack();

  if (track)
    return (
      <>
        <Background url={track.cover} />
        <div className="player">
          <CollapseButton />
          <Cover imageUrl={track.cover} />
          <Title value={track.track} />
          <Artist value={track.artist || ''} />
          <ProgressBar total={progress.total} elapsed={progress.elapsed} remaining={progress.remaining} />
          <Button text="sample button" />
          <VolumeBar value={10} />
        </div>
      </>
    );
  else return <></>;
}
