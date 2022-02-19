import { useEffect, useState } from 'react';
import { getCurrentlyPlaying } from '../api/actions.api';

const useTrack = () => {
  const [track, setTrack] = useState(null);
  const [progress, setProgress] = useState({
    total: 0,
    elapsed: 0,
    remaining: 0,
    elapsedPercentage: 0,
  });

  useEffect(() => {
    refreshCurrentlyPlaying();
  }, []);

  const refreshCurrentlyPlaying = async () => {
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
