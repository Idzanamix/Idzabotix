import { Box } from '@mui/material'
import styles from './coinScore.module.css'
import { formatNumberWithDots } from '../../../utils/formatNumberWithDots'
import { lazy, useEffect, useState } from 'react';
import { shortFormatNumber } from '../../../utils/shortFormatNumber';

interface ICoinScore {
  score: number;
}

const IconCoinlazy = lazy(() => import('../../../icons/IconCoin'));

function CoinScore({ score }: ICoinScore) {
  const [isNumbers, setIsNumbers] = useState(false);

  useEffect(() => {
    setIsNumbers(!isNumbers);
  }, [score]);

  return (
    <Box
      component='div'
      className={styles.score}
    >
      <IconCoinlazy />
      {isNumbers && <Box
        component='div'
        className={styles.number}
      >
        {score < 1000000 ? formatNumberWithDots(score | 0) : shortFormatNumber(score)}
      </Box>}

      {!isNumbers && <Box
        component='div'
        className={styles.number}
      >
        {score < 1000000 ? formatNumberWithDots(score | 0) : shortFormatNumber(score)}
      </Box>}
    </Box>
  )
}

export default CoinScore;

