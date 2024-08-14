export function setRatioEnergy(currentEnergy: number, maxEnergy: number = 15000) {
  return Math.ceil(currentEnergy / (maxEnergy / 100));
}
