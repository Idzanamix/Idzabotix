import { useAppSelector, selectPagesData, selectQurery } from '../../store/storeSelectors';
import { getPaginationListArray } from '../../utils/getPaginationListArray';
import { NextButtonPaginator } from './NextButtonPaginator';
import { PaginationItemButton } from './PaginationItemButton';
import styles from './paginationList.module.css';
import { PrevButtonPaginator } from './PrevButtonPaginator';


export function PaginationList() {
  const { hasNextPage, hasPreviousPage, pagesCountPagination } = useAppSelector(selectQurery);
  const { firstNumberVisible } = useAppSelector(selectPagesData);
  const list = getPaginationListArray(firstNumberVisible, pagesCountPagination);

  return (

    list.length > 1 && <ul className={styles.list}>
      <PrevButtonPaginator hasPreviousPage={hasPreviousPage} />

      {list.map(number => (
        <PaginationItemButton pageNumber={number.pageNumber} key={number.pageNumber} />
      ))}

      <NextButtonPaginator hasNextPage={hasNextPage} />
    </ul>
  )
}
