import { createPortal } from 'react-dom'
import { tapsType } from '../../../../../store/slices/gameSlice/gameSlice'
import styles from './tapList.module.css'
import { Box } from '@mui/material'
import { lazy } from 'react'

const TapItemLazy = lazy(() => import('./TapItem/TapItem'));

interface ITapList {
  taps?: tapsType[]
}

function TapList({ taps }: ITapList) {
  const modalRoot = document.getElementById('modal__root');

  return taps && modalRoot && createPortal((
    <Box
      component='ul'
      className={styles.list}
    >
      {taps.map(({ id, x, y }) => (
        <TapItemLazy
          key={id}
          id={id}
          x={x}
          y={y}
        />
      ))}
    </Box>
  ), modalRoot)
}

export default TapList;
