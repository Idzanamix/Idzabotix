/* eslint-disable react-hooks/exhaustive-deps */
import styles from './repositorySection.module.css'
import { useRepositorysDataByStarsQuery } from './repositorySection.generated';
import { selectAppoloData, selectPagesData, useAppSelector } from '../../store/storeSelectors';
import { setCurrentQuery, setCursorNextPage, setCursorPrevPage } from '../../store/slices/pagesSlice';
import { RepositoryList } from './RepositoryList';
import { PaginationList } from '../PaginationList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { IRepositoryItem } from './RepositoryItem';
import { useParams } from 'react-router-dom';
import { setSearchValue } from '../../store/slices/searchSlice';

export function RepositorySection() {
  const dispatch = useDispatch();
  const { onForward, targetPage, onEndCursor, onStartCursor } = useAppSelector(selectPagesData);
  const { isToken, isAuthorized } = useAppSelector(selectAppoloData);
  const { request } = useParams();
  // const navigate = useNavigate();

  const { data, loading, error } = useRepositorysDataByStarsQuery({
    skip: !isToken,
    variables: {
      query: request || "stars:>1",
      before: onStartCursor,
      after: onEndCursor
    },
  });

  const repositorysList = data?.search.nodes as IRepositoryItem[];

  useEffect(() => {
    console.log('request', request);
    request && dispatch(setSearchValue(request));
    // search && navigate(`/repository/search/${search}`);

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

  }, [data, targetPage, request]);

  return (
    <section className={styles.section}>
      {loading &&
        <div style={{ paddingTop: 25 }}>Loading...</div>}

      {request && (repositorysList && repositorysList.length < 1) && !loading &&
        <div style={{ paddingTop: 25 }}>No results were found</div>}

      {!isAuthorized &&
        <div>Log in to get started</div>}

      {repositorysList && !loading && !error &&
        <>
          <RepositoryList props={repositorysList} />

          <PaginationList />
        </>}
    </section >
  )
}
