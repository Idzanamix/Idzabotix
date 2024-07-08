import { useDispatch } from 'react-redux';
import { setTargetPage } from '../../../store/slices/pagesSlice';
import { useAppSelector, selectPagesData } from '../../../store/storeSelectors';
import styles from './NextButtonPaginator.module.css'

interface INextButtonPaginator {
  hasNextPage: boolean
}

export function NextButtonPaginator({ hasNextPage }: INextButtonPaginator) {
  const dispatch = useDispatch();
  const { currentPage } = useAppSelector(selectPagesData);

  function handleClick() {
    if (hasNextPage) {
      dispatch(setTargetPage(currentPage + 1));
    }
  }

  return (
    hasNextPage && <button className={styles.button} onClick={handleClick} disabled={!hasNextPage}>
      ⇨
    </button>
  )
}
