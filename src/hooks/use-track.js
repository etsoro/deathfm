import { useEffect, useState } from 'react';
import { getCurrentlyPlaying } from '../services/api';

const useTrack = () => {
  console.log('usetrack');
  const [track, setTrack] = useState(null);
  const [progress, setProgress] = useState({
    total: 0,
    elapsed: 0,
    remaining: 0,
    elapsedPercentage: 0,
  });

  console.log('before useffect');
  useEffect(() => {
    console.log('useffect');
    refreshCurrentlyPlaying();
  }, []);

  const refreshCurrentlyPlaying = async () => {
    console.log('refreshCurrentlyPlaying()');
    const newTrack = await getCurrentlyPlaying();
    setTrack(newTrack);
    refreshProgress(newTrack);
    waitForNextTrack(newTrack);
  };

  const refreshProgress = (track) => {
    setProgress((prevProgress) => ({
      total: track?.duration || prevProgress.total,
      elapsed: (track?.timeElapsed || prevProgress.elapsed) + 1000,
      remaining: (track?.timeRemaining || prevProgress.remaining) - 1000,
      elapsedPercentage:
        (((track?.timeElapsed || prevProgress.elapsed) + 1000) * 100) /
        (track?.duration || prevProgress.total),
    }));
  };

  const waitForNextTrack = (currentTrack) => {
    const interval = setInterval(() => refreshProgress(), 1000);
    setTimeout(async () => {
      clearInterval(interval);
      await refreshCurrentlyPlaying();
    }, currentTrack.timeRemaining);
  };

  return { track, progress, refreshCurrentlyPlaying };
};

export { useTrack };
