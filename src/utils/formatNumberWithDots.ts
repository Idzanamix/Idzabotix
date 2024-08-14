export function formatNumberWithDots(num: number): string {
  const numStr = num.toString();

  const parts = numStr.split(/(?=(?:...)*$)/);

  return parts.join('.');
}
