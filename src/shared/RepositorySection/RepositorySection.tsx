/* eslint-disable react-hooks/exhaustive-deps */
import styles from './repositorySection.module.css'
import { useRepositorysDataByStarsQuery } from './repositorySection.generated';
import { selectIsToken, selectPagesData, selectSearchValue, useAppSelector } from '../../store/storeSelectors';
import { RepositoryList } from './RepositoryList';
import { PaginationList } from '../PaginationList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentQuery, setCursorNextPage, setCursorPrevPage } from '../../store/slices/pagesSlice';
import { getTokenCookie } from '../../store/cookie/token/getTokenCookie';
import { IRepositoryItem } from './RepositoryItem';
import { useNavigate, useParams } from 'react-router-dom';

export function RepositorySection() {
  const dispatch = useDispatch();
  const { onForward, targetPage, onEndCursor, onStartCursor } = useAppSelector(selectPagesData);
  const search = useAppSelector(selectSearchValue);
  const IsToken = useAppSelector(selectIsToken);
  const { request } = useParams();
  const navigate = useNavigate();
  const token = getTokenCookie();

  const { data, loading, error } = useRepositorysDataByStarsQuery({
    variables: {
      query: request || "stars:>1",
      before: onStartCursor,
      after: onEndCursor
    },
  });

  const repositorysList = data?.search.nodes as IRepositoryItem[];

  useEffect(() => {
    navigate(`/repository/search/${search}`);
    if (!data) return;

    const { repositoryCount } = data.search;
    const { hasPreviousPage, hasNextPage, endCursor, startCursor } = data.search.pageInfo;

    dispatch(setCurrentQuery({
      repositoryCount,
      hasPreviousPage,
      hasNextPage,
      startCursor: startCursor || '',
      endCursor: endCursor || ''
    }));


    if (onForward) {
      dispatch(setCursorNextPage(endCursor || ''));
    } else {
      dispatch(setCursorPrevPage());
    }

  }, [data, targetPage]);

  return (
    <section className={styles.section}>
      {loading &&
        <div style={{ paddingTop: 25 }}>Loading...</div>}

      {request && (repositorysList && repositorysList.length < 1) && !loading &&
        <div style={{ paddingTop: 25 }}>No results were found</div>}

      {!IsToken && !token &&
        <div>Log in to get started</div>}

      {repositorysList && !loading && !error &&
        <>
          <RepositoryList props={repositorysList} />

          <PaginationList />
        </>}
    </section >
  )
}
