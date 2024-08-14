import { Box } from '@mui/material'
import styles from './energyScore.module.css'
import { setRatioEnergy } from '../../../utils/setRatioEnergy';
import { colors } from '@mui/material';
import { useEffect, useState } from 'react';
import { selectIsTaping, useAppSelector } from '../../../store/slices/gameSlice/gameSelectors';

interface IEnergyScore {
  energy: number;
}

function EnergyScore({ energy }: IEnergyScore) {
  const isTaping = useAppSelector(selectIsTaping);
  const [prevValue, setPrevValue] = useState(energy);
  const ratio = setRatioEnergy(energy);
  const prefRatio = setRatioEnergy(prevValue);
  const isEnergyLow = ratio < 20;
  const pink = colors.pink[600]
  const barBackground = isEnergyLow ? pink : 'var(--gradient-orange)';

  useEffect(() => {
    setPrevValue(energy);
  }, [!isTaping])

  return (
    <Box
      component='span'
      className={styles.energy__score}
    >
      {`Your Energy: ${ratio}%`}
      <Box
        component='div'
        className={styles.energy__bar}
      >
        <Box
          component='div'
          className={`${styles.energy}${isEnergyLow ? ' blink' : ''} `}
          sx={{
            width: `${ratio}%`,
            background: barBackground,
            position: 'relative',
            zIndex: 10,
            opacity: isTaping ? .7 : 1
          }}
        >
          {energy || 0}
        </Box>
        <Box
          component='div'
          className={`${styles.energy}`}
          sx={{
            width: `${isTaping ? prefRatio + 1 : ratio}%`,
            background: pink,
            position: 'absolute',
            bottom: 0,
            zIndex: 1
          }}
        />
      </Box>
    </Box>
  )
}

export default EnergyScore;
