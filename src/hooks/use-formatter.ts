export default function useFormatter() {
  function formatSeconds(sec: number): string {
    if (!sec) return `0:00`;
    const m: number = Math.floor(sec / 60);
    const s: number = Math.floor(sec - m * 60);
    return `${m}:${s.toString().length === 1 ? '0' + s : s}`;
  }

  function formatMilliseconds(ms: number): string {
    const minutes = Math.floor(ms / 1000 / 60);
    const seconds = Math.round(ms / 1000) - minutes * 60;
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  }

  return { formatSeconds, formatMilliseconds };
}
