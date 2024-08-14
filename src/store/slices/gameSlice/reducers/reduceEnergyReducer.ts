import { PayloadAction } from "@reduxjs/toolkit";
import { IGameState } from "../gameSlice";

export const reduceEnergyReducer =
  (state: IGameState, action: PayloadAction<number>): IGameState => {
    const lostEnergy = action.payload;
    const differenceValue = state.currentEnergy - lostEnergy
    const currentEnergy = differenceValue > 0 ? differenceValue : 0

    return {
      ...state,
      currentEnergy,
    }
  }
