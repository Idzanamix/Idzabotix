import { createSelector } from "@reduxjs/toolkit";
import { rootStateType } from "../../storeRedux";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<rootStateType> = useSelector;

export const selectCoins = ({ game }: rootStateType) => game.coins;
export const selectCurrentEnergy = ({ game }: rootStateType) => game.currentEnergy;
export const selectMaxEnergy = ({ game }: rootStateType) => game.maxEnergy;
export const selectSaveModalIsOpen = ({ game }: rootStateType) => game.saveModalIsOpen;
export const selectTaps = ({ game }: rootStateType) => game.taps;
export const selectIsTaping = ({ game }: rootStateType) => game.isTaping;

export const selectUserData =
  createSelector(selectCoins, selectCurrentEnergy, selectMaxEnergy, selectIsTaping,
    ((coins, currentEnergy, maxEnergy, isTaping) => {
      return {
        coins,
        currentEnergy,
        maxEnergy,
        isTaping
      }
    })
  )

export const selectFruitTargetData =
  createSelector(selectCurrentEnergy, selectTaps,
    (currentEnergy, taps) => {
      return {
        currentEnergy,
        taps
      }
    }
  )

