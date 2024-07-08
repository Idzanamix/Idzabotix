export function getPaginationMaxPagesValue(pages: number, maxPageLength: number) {

  const pagesCount = pages > maxPageLength ? maxPageLength : pages;

  return pagesCount;
}
