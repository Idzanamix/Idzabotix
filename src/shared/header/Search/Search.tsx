import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { IconClear, IconSearch } from '../../../icons'
import { selectSearchValue, useAppSelector } from '../../../store/storeSelectors'
import styles from './search.module.css'
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../../store/slices/searchSlice';
import { createTimer } from '../../../utils/creareTimer';
import { resetPagesData } from '../../../store/slices/pagesSlice';
import { useNavigate } from 'react-router-dom';


export function Search() {
  const timerDispatchDelay = createTimer();
  const search = useAppSelector(selectSearchValue);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchValue, setSearchValueInput] = useState(search);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchValueInput(event.target.value);
  }

  function handleKeyUp(event: KeyboardEvent) {
    timerDispatchDelay.start(() => {
      dispatch(resetPagesData());
      dispatch(setSearchValue((event.target as HTMLInputElement).value));
      navigate(`/repository/search/${searchValue}`);
    });
  }

  function handleKeyDown() {
    timerDispatchDelay.stop()
  }

  function handleClear() {
    setSearchValueInput('');
    dispatch(setSearchValue(''))
    dispatch(resetPagesData());
    navigate(`/repository/search`);
  }

  return (
    <div className={styles.search}>
      <input
        type='search'
        className={styles.input}
        placeholder='Search Toolkinamix'
        value={searchValue}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        onKeyDown={handleKeyDown}
      >
      </input>
      <IconSearch />
      {searchValue !== '' &&
        <button
          className={styles.clearButton}
          onClick={handleClear}
        >
          <IconClear />
        </button>}
    </div>
  )
}
