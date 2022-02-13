import { useEffect, useRef, useState } from 'react';
import { useTrack } from './use-track';

const usePlayer = () => {
  const player = useRef(new Audio());
  const streams = useRef(['http://hi5.death.fm/;', 'http://hi.death.fm/;']);
  const [volume, setVolume] = useState(0.5);
  const [isPlaying, setPlaying] = useState(false);
  const [isBuffering, setBuffering] = useState(false);
  const [isMuted, setMuted] = useState(false);
  const [isError, setError] = useState(false);
  const { refreshCurrentlyPlaying } = useTrack();

  useEffect(() => {
    initializePlayer(streams.current[0]);
  }, []);

  const play = async () => {
    if (!isPlaying) {
      setPlaying(true);
      player.current.load();
      await player.current.play();
      await refreshCurrentlyPlaying();
    }
  };

  const pause = () => {
    if (isPlaying) {
      setPlaying(false);
      player.current.pause();
    }
  };

  const switchMute = () => {
    setMuted((prevValue) => !prevValue);
  };

  const initializePlayer = (streamUrl) => {
    if (player.current.canPlayType('audio/mpeg')) {
      player.current.src = streamUrl;
      player.current.preload = 'none';
      player.current.volume = volume;
    }
    player.current.addEventListener('waiting', onPlayerBuffering);
    player.current.addEventListener('playing', onPlayerPlaying);
    player.current.addEventListener('error', onPlayerError);
  };

  const onPlayerBuffering = () => {
    setBuffering(true);
  };

  const onPlayerPlaying = () => {
    setPlaying(true);
    setBuffering(false);
  };

  const onPlayerError = () => {
    const nextStreamUrl = streams.current.shift();
    if (nextStreamUrl) {
      console.warn(`Failed to play ${player.current.src}, trying again with ${nextStreamUrl}`);
      initializePlayer(nextStreamUrl);
    } else {
      setPlaying(false);
      setError(true);
    }
  };

  return { isPlaying, play, pause, switchMute, setVolume };
};

export { usePlayer };
