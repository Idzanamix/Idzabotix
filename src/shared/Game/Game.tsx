import { Container } from '@mui/material'
import styles from './game.module.css'
import { useUserData } from '../../hooks/useUserData'
import { useParams } from 'react-router-dom'
import {
  selectSaveModalIsOpen,
  selectUserData,
  useAppSelector
} from '../../store/slices/gameSlice/gameSelectors'
import { telegramSettings } from '../../app/providers/Telegram/telegramSettings'
import { Loader } from '../Loader'
import { lazy, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { increaseCoins, increaseEnergy } from '../../store/slices/gameSlice/gameSlice'
import { createInterval } from '../../utils/createInterval'
import { setUserData } from '../../store/slices/userSlice/userSlice'

const CloseAppModalLazy = lazy(() => import('./SaveAndExitModal/CloseAppModal/CloseAppModal'));
const FruitGroupLazy = lazy(() => import('./FruitGroup/FruitGroup'));
const SaveAndExitModalLazy = lazy(() => import('./SaveAndExitModal/SaveAndExitModal'));
const EnergyScoreLazy = lazy(() => import('./EnergyScore/EnergyScore'));
const CoinScoreLazy = lazy(() => import('./CoinScore/CoinScore'));

let intervalFarmCoins = createInterval();
let intervalSaveProgress = createInterval();

function Game() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const { isLoading } = useUserData(userId ?? '');
  const isModalOpen = useAppSelector(selectSaveModalIsOpen);
  const userData = useAppSelector(selectUserData);
  const { currentEnergy, coins, isTaping } = userData;

  useEffect(() => {
    intervalSaveProgress.stop();
    intervalSaveProgress.start(() => {
      dispatch(setUserData({ energy: currentEnergy, coins }))
    }, 6000)
  }, [!isTaping]);

  useEffect(() => {
    telegramSettings();
    intervalFarmCoins.stop();
    intervalFarmCoins.start(() => {
      dispatch(increaseCoins(100));
      dispatch(increaseEnergy(100));
    })
  }, []);

  return (
    <Container
      component="section"
      className={styles.game}
    >
      {isLoading
        ? <Loader />
        : <>
          <SaveAndExitModalLazy />
          <CoinScoreLazy score={coins} />
          <FruitGroupLazy />
          <EnergyScoreLazy energy={currentEnergy} />
        </>}
      {isModalOpen && <CloseAppModalLazy />}
    </Container>
  )
}

export default Game;

