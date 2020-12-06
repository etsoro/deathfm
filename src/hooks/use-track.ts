import { Track } from '../models/track.model';
import { useEffect, useState } from 'react';
import useApi from './use-api';

export default function useTrack() {
  const { getCurrentlyPlaying } = useApi();
  const [track, setTrack] = useState<Track | null>(null);
  const [progress, setProgress] = useState({ total: 0, elapsed: 0, remaining: 0 });

  useEffect(() => {
    refreshCurrentlyPlaying();
  }, []);

  async function refreshCurrentlyPlaying(): Promise<void> {
    const newTrack = await getCurrentlyPlaying();
    setTrack(newTrack);
    refreshProgress(newTrack);
    waitForNextTrack(newTrack);
  }

  function refreshProgress(track?: Track) {
    setProgress((prevProgress) => ({
      total: track?.duration || prevProgress.total,
      elapsed: (track?.timeElapsed || prevProgress.elapsed) + 1000,
      remaining: (track?.timeRemaining || prevProgress.remaining) - 1000
    }));
  }

  function waitForNextTrack(currentTrack: Track): void {
    const interval = setInterval(() => refreshProgress(), 1000);
    setTimeout(async () => {
      clearInterval(interval);
      await refreshCurrentlyPlaying();
    }, currentTrack.timeRemaining);
  }

  return { track, progress, refreshCurrentlyPlaying };
}
