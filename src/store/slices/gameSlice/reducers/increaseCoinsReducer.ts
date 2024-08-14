import { PayloadAction } from "@reduxjs/toolkit";
import { IGameState } from "../gameSlice";

export const increaseCoinsReducer =
  (state: IGameState, action: PayloadAction<number>): IGameState => {
    const earnedCoins = action.payload;
    const coins = state.coins + earnedCoins;

    return {
      ...state,
      coins
    }
  }
