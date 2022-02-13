const formatSeconds = (seconds) => {
  if (!seconds) return `0:00`;
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds - m * 60);
  return `${m}:${s.toString().length === 1 ? '0' + s : s}`;
};

const formatMilliseconds = (milliseconds) => {
  const minutes = Math.floor(milliseconds / 1000 / 60);
  const seconds = Math.round(milliseconds / 1000) - minutes * 60;
  return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
};

export { formatSeconds, formatMilliseconds };
