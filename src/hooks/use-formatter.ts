export default function useFormatter() {
  function formatSeconds(sec: number): string {
    if (!sec) return `0:00`;
    const m: number = Math.floor(sec / 60);
    const s: number = Math.floor(sec - m * 60);
    return `${m}:${s.toString().length === 1 ? '0' + s : s}`;
  }

  function formatMilliseconds(ms: number): string {
    if (!ms) return `0:00`;
    return formatSeconds(ms / 1000);
  }

  return { formatSeconds, formatMilliseconds };
}
