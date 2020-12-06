import React from 'react';
import Background from './background';
import CollapseButton from './collapse-button';
import Cover from './cover';
import BaseText from '../base/base-text';
import ProgressBar from './progress-bar';
import MediaButtons from './media-buttons/media-buttons';
import VolumeBar from './volume-bar';
import useTrack from '../../hooks/use-track';
import usePlayer from '../../hooks/use-player';
import './player.scss';

export default function Player() {
  const { track, progress } = useTrack();
  const { play, pause } = usePlayer();

  if (track)
    return (
      <>
        <Background url={track.cover} />
        <div className="player">
          <CollapseButton />
          <Cover imageUrl={track.cover} />
          <BaseText size={20} bottom={6}>
            {track.track}
          </BaseText>
          <BaseText size={18} opacity={0.6} bottom={15}>
            {track.artist}
          </BaseText>
          <ProgressBar total={progress.total} elapsed={progress.elapsed} remaining={progress.remaining} />
          <MediaButtons onPlay={play} onPause={pause} />
          {/*<VolumeBar value={10} />*/}
        </div>
      </>
    );
  else return <></>;
}
