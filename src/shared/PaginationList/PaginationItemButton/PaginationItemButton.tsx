/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch } from 'react-redux';
import styles from './paginationItemButton.module.css'
import { setTargetPage } from '../../../store/slices/pagesSlice';
import { selectPagesData, useAppSelector } from '../../../store/storeSelectors';

interface IPaginationItemButton {
  pageNumber: number;
}

export function PaginationItemButton({ pageNumber }: IPaginationItemButton) {
  const dispatch = useDispatch();
  const { currentPage } = useAppSelector(selectPagesData);

  function handleClick() {
    dispatch(setTargetPage(pageNumber));
  }


  return (
    <button
      className={`${styles.button}${pageNumber === currentPage ? ' ' + styles.isActive : ''}`}
      disabled={pageNumber === currentPage}
      onClick={handleClick}
    >
      {pageNumber}
    </button>
  )
}
