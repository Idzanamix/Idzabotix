import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
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
  const inputRef = useRef<HTMLInputElement>(null);
  const search = useAppSelector(selectSearchValue);
  const [isOpen, setIsOpen] = useState(search ? true : false);
  const [searchValue, setSearchValueInput] = useState(search);

  useEffect(() => {
    setSearchValueInput(search);
  }, [search])

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
      inputRef.current?.focus();
    }

    if (searchValue && ref.current) {
      ref.current.style.opacity = '1'
    }
  }

  function handleHover() {
    if (searchValue && ref.current) {
      ref.current.style.opacity = '1'
    }
  }

  function handleMouseLeave() {
    if (searchValue && ref.current && !inputRef.current?.contains(document.activeElement)) {
      ref.current.style.opacity = '.7'
    }
  }

  function onClose() {
    if (isOpen && !searchValue) {
      setIsOpen(false);
    }

    if (searchValue && ref.current) {
      ref.current.style.opacity = '.7'
    }
  }

  useModalCloser({ onClose, ref });

  return (
    <div
      className={`${styles.search}${searchValue || isOpen ? ' ' + styles.isOpen : ''}`}
      onMouseUp={handleMouseUp}
      onMouseMove={handleHover}
      onMouseLeave={handleMouseLeave}
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
        ref={inputRef}
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
