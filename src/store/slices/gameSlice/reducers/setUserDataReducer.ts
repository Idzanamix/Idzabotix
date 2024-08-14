import { PayloadAction } from "@reduxjs/toolkit";
import { IGameState } from "../gameSlice";

export interface IUserDataAction {
  coins?: number;
  energy?: number;
}

export const setUserDataReducer =
  (state: IGameState, action: PayloadAction<IUserDataAction>): IGameState => {
    const { coins, energy } = action.payload;
    const changedCoins = coins ?? state.coins;
    const changedEnergy = energy ?? state.currentEnergy;

    return {
      ...state,
      coins: changedCoins,
      currentEnergy: changedEnergy,
    }
  };
