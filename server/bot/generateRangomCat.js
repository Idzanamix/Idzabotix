export const catArr = [
  '≽^•⩊•^≼',
  'ᓚ₍ ^. .^₎',
  'ദ്ദി（• ˕ •マ.ᐟ',
  '≽/ᐠ - ˕ -マ≼ Ⳋ',
  'ฅ/ᐠ˶> ﻌ<˶ᐟ\\ฅ',
  'ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧',
  '₍^. ̫.^₎',
  '⸜(｡˃ ᵕ ˂ )⸝♡',
  '₊˚⊹♡ ᓚ₍ ^. .^₎',
  'ε(´｡•᎑•`)っ 💕',
  '/ᐠ > ˕ <マ ₊˚⊹♡',
  '🐈',
  'ฅ^ >ヮ<^₎',
  '⸜(｡˃ ᵕ ˂ )⸝♡'];

export function generateRandomCat(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null; // Или бросить исключение, если массив пустой
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
