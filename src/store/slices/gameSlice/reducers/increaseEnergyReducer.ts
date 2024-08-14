import { PayloadAction } from "@reduxjs/toolkit";
import { IGameState } from "../gameSlice";

export const increaseEnergyReducer =
  (state: IGameState, action: PayloadAction<number>): IGameState => {
    const { maxEnergy, currentEnergy } = state
    const energy = currentEnergy + action.payload

    return {
      ...state,
      currentEnergy: energy <= maxEnergy ? energy : maxEnergy
    }
  }
