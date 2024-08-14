import { Container } from '@mui/material'
import styles from './fruitGroup.module.css'
import { lazy } from 'react'
import { selectIsTaping, useAppSelector } from '../../../store/slices/gameSlice/gameSelectors';

const IconEllipseLazy = lazy(() => import('../../../icons/IconEllipse'));
const IconEllipseFruitLazy = lazy(() => import('../../../icons/IconEllipseFruit'));
const IconBigBlobLazy = lazy(() => import('../../../icons/IconBigBlob'));
const IconShadowLazy = lazy(() => import('../../../icons/IconShadow'));
const FruitTargetLazy = lazy(() => import('./FruitTarget/FruitTarget'));


function FruitGroup() {
  const isTaping = useAppSelector(selectIsTaping);

  return (
    <Container className={styles.fruit__group}>
      <IconEllipseLazy className={styles.ellipse} />
      <IconEllipseFruitLazy className={styles.ellipse__fruit} />
      <IconBigBlobLazy
        className={styles.blob}
        isTaping={isTaping}
      />
      <IconShadowLazy className={styles.shadow} />
      <FruitTargetLazy />
    </Container>
  )
}

export default FruitGroup;
