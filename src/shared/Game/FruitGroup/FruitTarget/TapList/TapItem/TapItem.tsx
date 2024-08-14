import { Box } from '@mui/material';
import { getRandomNumber } from '../../../../../../utils/getRandomNumber';
import styles from './tapItem.module.css'
import { lazy, memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { increaseCoins, reduceEnergy, resetTap } from '../../../../../../store/slices/gameSlice/gameSlice';
import { getRandomInt } from '../../../../../../utils/getRandomInt';


const IconTapBlob_1Lazy = lazy(() => import('../../../../../../icons/IconTapBlob_1'));
const IconTapBlob_2Lazy = lazy(() => import('../../../../../../icons/IconTapBlob_2'));

interface ITapitem {
  id: string;
  x: number;
  y: number;
}

const blobs = [
  { blob: <IconTapBlob_1Lazy /> },
  { blob: <IconTapBlob_2Lazy /> }
]

const TapItem = memo(
  ({ x, y, id }: ITapitem) => {
    const numberBlob = getRandomNumber(blobs.length);
    const maxDamageValue = 26;
    const randomCrit = getRandomInt(1, maxDamageValue);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(increaseCoins(randomCrit));
      dispatch(reduceEnergy(randomCrit));

      setTimeout(() => {
        dispatch(resetTap(id));
      }, 700);
    }, []);


    return (
      <Box
        component='li'
        className={styles.item}
        sx={{
          top: y - 51,
          left: x - 21,
        }}
      >
        +{randomCrit}
        <Box
          component='div'
          className={styles.blob}
          sx={{
            top: y - 21,
            left: x - 21,
            transform: `translate(-50%, -50%) rotate(${randomCrit * 10}deg)`
          }}
        >
          {blobs[numberBlob].blob}
        </Box>
      </Box>
    )
  })

export default TapItem;
