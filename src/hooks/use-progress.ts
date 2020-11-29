import { useEffect, useState } from 'react';
import { Track } from '../models/track.model';

function useProgress(track: Track) {
  const [total, setTotal] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [left, setLeft] = useState(0);

  const [progressText, setProgressText] = useState({
    total: secondsToText(total),
    elapsed: secondsToText(elapsed),
    left: secondsToText(elapsed)
  });

  useEffect(() => {
    if (!track) return;

    setTotal(track.progressTotal || 0);
    setElapsed(track.progressElapsed || 0);
    setLeft(track.progressLeft || 0);

    const interval = setInterval(() => {
      setElapsed((prevValue) => prevValue + 1);
      setLeft((prevValue) => prevValue - 1);
    }, 1000);
    setTimeout(() => clearInterval(interval), (track.progressLeft || 0) * 1000);

    return () => {
      clearInterval(interval);
    };
  }, [track]);

  useEffect(() => {
    setProgressText({
      total: secondsToText(total),
      elapsed: secondsToText(elapsed),
      left: secondsToText(elapsed)
    });
  }, [total, elapsed, left]);

  function secondsToText(seconds: number): string {
    if (!seconds) return `0:00`;
    const m: number = Math.floor(seconds / 60);
    const s: number = Math.floor(seconds - m * 60);
    return `${m}:${s.toString().length === 1 ? '0' + s : s}`;
  }

  return { progressText };
}

export default useProgress;
