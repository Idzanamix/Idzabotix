export function getRelativeTimeString(
  date?: string,
  lang = 'en-US'
) {

  if (!date) return;

  const dateConvert = new Date(date);

  const timeSec = dateConvert.getTime() / 1000;

  const deltaSeconds = Math.round(timeSec - (Date.now() / 1000))

  const cutoffs = [60, 3600, 86400, 86400 * 7, 86400 * 30, 86400 * 365, Infinity]

  const units: Intl.RelativeTimeFormatUnit[] = ['second', 'minute', 'hour',
    'day', 'week', 'month', 'year']

  const unitIndex = cutoffs.findIndex(cutoff => cutoff > Math.abs(deltaSeconds))

  const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1

  const rtf = new Intl.RelativeTimeFormat(lang, { numeric: 'auto', style: 'short' });

  return rtf.format(Math.floor(deltaSeconds / divisor), units[unitIndex]);
}
