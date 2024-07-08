interface IArrPages {
  pageNumber: number
}

export function getPaginationListArray(firstNumber: number, maxLength: number) {
  const result: IArrPages[] = [];

  let current = firstNumber;

  while (current < firstNumber + maxLength) {
    result.push({ pageNumber: current });
    current++;
  }

  return result;
}
