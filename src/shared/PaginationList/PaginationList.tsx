import { useEffect } from 'react';
import { useCustomMatchMedia } from '../../hooks/useCustomMatchMedia';
import { useAppSelector, selectPagesData, selectQurery } from '../../store/storeSelectors';
import { NextButtonPaginator } from './NextButtonPaginator';
import { PaginationItemButton } from './PaginationItemButton';
import styles from './paginationList.module.css';
import { PrevButtonPaginator } from './PrevButtonPaginator';
import { useDispatch } from 'react-redux';
import { setMaxPagesPagination } from '../../store/slices/pagesSlice';


export function PaginationList() {
  const { hasNextPage, hasPreviousPage } = useAppSelector(selectQurery);
  const { paginationList } = useAppSelector(selectPagesData);
  const { mobile } = useCustomMatchMedia();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMaxPagesPagination(mobile));
  }, [dispatch, mobile]);


  return (
    paginationList?.length > 1 &&
    <ul className={styles.list}>
      <PrevButtonPaginator hasPreviousPage={hasPreviousPage} />

      {paginationList.map(number => (
        <PaginationItemButton
          pageNumber={number.pageNumber}
          key={number.pageNumber}
        />
      ))}

      <NextButtonPaginator hasNextPage={hasNextPage} />
    </ul>
  )
}
