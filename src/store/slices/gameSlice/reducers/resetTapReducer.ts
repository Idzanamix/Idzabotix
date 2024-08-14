import { PayloadAction } from "@reduxjs/toolkit";
import { IGameState } from "../gameSlice";

export const resetTapReducer =
  (state: IGameState, action: PayloadAction<string>): IGameState => {
    const taps = state.taps?.filter(tap => tap.id !== action.payload);

    return {
      ...state,
      taps
    }
  }
