import { lazy, Suspense, useEffect, useState } from 'react'
import styles from './fruitTarget.module.css'
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { generateRandomString } from '../../../../utils/generateRandomIndex';
import { setIsTaping, setTaps } from '../../../../store/slices/gameSlice/gameSlice';
import { selectFruitTargetData, useAppSelector } from '../../../../store/slices/gameSlice/gameSelectors';
import { getRandomNumber } from '../../../../utils/getRandomNumber';
import { createTimer } from '../../../../utils/creareTimer';

const IconFruitLazy = lazy(() => import('../../../../icons/IconFruit/IconFruit'));
const TapListLazy = lazy(() => import('./TapList/TapList'));

let timerTaping = createTimer();

function FruitTarget() {
  const dispatch = useDispatch();
  const { taps, currentEnergy } = useAppSelector(selectFruitTargetData);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  function moveSettings() {
    dispatch(setIsTaping(true));
    timerTaping.stop();
    timerTaping.start(() => dispatch(setIsTaping(false)));
    setIsMoving(true);
  }


  function handleTouchStart(event: React.TouchEvent) {
    moveSettings();

    const touches = Array
      .from(event.touches)
      .map((touch) => {
        const id = generateRandomString();

        return {
          id,
          x: touch.pageX,
          y: touch.pageY
        }
      })
      .slice(0, 3);

    dispatch(setTaps(touches));
  };


  function handleTouchEnd() {
    setIsMoving(false);
  };


  function handleMouseDown(event: React.MouseEvent<HTMLDivElement>) {
    moveSettings();

    const x = event.pageX;
    const y = event.pageY;
    const id = generateRandomString();

    dispatch(setTaps([{ x, y, id }]));
  }


  useEffect(() => {
    if (isMoving) {
      const rundomX = getRandomNumber(3);
      const rundomY = getRandomNumber(3);

      setPosition({
        x: rundomX,
        y: rundomY
      })
    } else {
      setPosition({
        x: 0,
        y: 0
      })
    }
  }, [isMoving]);

  return (
    <Box
      component='div'
      className={styles.fruit__box}
    >
      <IconFruitLazy x={position.x} y={position.y} />

      {(taps && (taps?.length > 0)) &&
        <Suspense>
          <TapListLazy taps={taps} />
        </Suspense>
      }

      <Box
        component='div'
        className={styles.fruit__target}
        onMouseDown={handleMouseDown}
        onMouseUp={handleTouchEnd}
        
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        sx={{ pointerEvents: currentEnergy < 26 ? 'none' : 'inherit' }}
      />
    </Box>
  )
}

export default FruitTarget;
