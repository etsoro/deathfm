import { useEffect, useRef, useState } from 'react';
import { useTrack } from './use-track';

const usePlayer = () => {
  const audio = useRef(new Audio());
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
      audio.current.load();
      await audio.current.play();
      await refreshCurrentlyPlaying();
    }
  };

  const pause = () => {
    if (isPlaying) {
      setPlaying(false);
      audio.current.pause();
    }
  };

  const switchMute = () => {
    setMuted((prevValue) => !prevValue);
  };

  const initializePlayer = (streamUrl) => {
    if (audio.current.canPlayType('audio/mpeg')) {
      audio.current.src = streamUrl;
      audio.current.preload = 'none';
      audio.current.volume = volume;
    }
    audio.current.addEventListener('waiting', onPlayerBuffering);
    audio.current.addEventListener('playing', onPlayerPlaying);
    audio.current.addEventListener('error', onPlayerError);
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
      console.warn(`Failed to play ${audio.current.src}, trying again with ${nextStreamUrl}`);
      initializePlayer(nextStreamUrl);
    } else {
      setPlaying(false);
      setError(true);
    }
  };

  return { isPlaying, play, pause, switchMute, setVolume };
};

export { usePlayer };
