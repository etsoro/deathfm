import { useEffect, useRef, useState } from 'react';
import useTrack from './use-track';

export default function usePlayer() {
  const player = useRef<HTMLAudioElement>(new Audio());
  const streams = useRef(['http://hi5.death.fm/;', 'http://hi.death.fm/;']);
  const [volume, setVolume] = useState<number>(0.5);
  const [isPlaying, setPlaying] = useState<boolean>(false);
  const [isBuffering, setBuffering] = useState<boolean>(false);
  const [isMuted, setMuted] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const { refreshCurrentlyPlaying } = useTrack();

  useEffect(() => {
    initializePlayer(streams.current[0]);
  }, []);

  async function play(): Promise<void> {
    if (!isPlaying) {
      setPlaying(true);
      player.current.load();
      await player.current.play();
      await refreshCurrentlyPlaying();
    }
  }

  function pause(): void {
    if (isPlaying) {
      setPlaying(false);
      player.current.pause();
    }
  }

  function switchMute(): void {
    setMuted((prevValue) => !prevValue);
  }

  function initializePlayer(streamUrl: string): void {
    if (player.current.canPlayType('audio/mpeg')) {
      player.current.src = streamUrl;
      player.current.preload = 'none';
      player.current.volume = volume;
    }
    player.current.addEventListener('waiting', onPlayerBuffering);
    player.current.addEventListener('playing', onPlayerPlaying);
    player.current.addEventListener('error', onPlayerError);
  }

  function onPlayerBuffering(): void {
    setBuffering(true);
  }

  function onPlayerPlaying(): void {
    setPlaying(true);
    setBuffering(false);
  }

  function onPlayerError(): void {
    const nextStreamUrl = streams.current.shift();
    if (nextStreamUrl) {
      console.warn(`Failed to play ${player.current.src}, trying again with ${nextStreamUrl}`);
      initializePlayer(nextStreamUrl);
    } else {
      setPlaying(false);
      setError(true);
    }
  }

  return { play, pause, switchMute, setVolume };
}
