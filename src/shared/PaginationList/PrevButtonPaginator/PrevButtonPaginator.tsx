import { useDispatch } from 'react-redux';
import { setTargetPage } from '../../../store/slices/pagesSlice';
import { useAppSelector, selectPagesData } from '../../../store/storeSelectors';
import styles from './prevButtonPaginator.module.css'

interface IPrevButtonPaginator {
  hasPreviousPage: boolean
}

export function PrevButtonPaginator({ hasPreviousPage }: IPrevButtonPaginator) {
  const dispatch = useDispatch();
  const { currentPage } = useAppSelector(selectPagesData);

  function handleClick() {
    if (hasPreviousPage) {
      dispatch(setTargetPage(currentPage - 1));
    }
  }

  return (
    hasPreviousPage && <button className={styles.button} onClick={handleClick} disabled={!hasPreviousPage} >
      ⇦
    </button>
  )
}
