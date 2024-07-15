import { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';
import { IconClear, IconSearch } from '../../../icons'
import { selectSearchValue, useAppSelector } from '../../../store/storeSelectors'
import styles from './search.module.css'
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../../store/slices/searchSlice';
import { createTimer } from '../../../utils/creareTimer';
import { resetPagesData } from '../../../store/slices/pagesSlice';
import { useNavigate } from 'react-router-dom';
import { useModalCloser } from '../../../hooks/useModalCloser';


export function Search() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const timerDispatchDelay = createTimer();
  const ref = useRef<HTMLDivElement>(null);
  const search = useAppSelector(selectSearchValue);
  const [isOpen, setIsOpen] = useState(search ? true : false);
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
    dispatch(setSearchValue(''));
    dispatch(resetPagesData());
    navigate(`/repository/search`);
  }

  function handleMouseUp() {
    if (!isOpen) {
      setIsOpen(true);
    }
  }

  function onClose() {
    if (isOpen && !searchValue) {
      setIsOpen(false);
    }
  }

  useModalCloser({ onClose, ref });

  return (
    <div
      className={`${styles.search}${isOpen ? ' ' + styles.isClosed : ''}`}
      onMouseUp={handleMouseUp}
      ref={ref}
    >
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
