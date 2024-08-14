import { PayloadAction } from "@reduxjs/toolkit";
import { IGameState } from "../gameSlice";

export const setIsTapingReducer =
  (state: IGameState, action: PayloadAction<boolean>): IGameState => {
    const isTaping = action.payload;

    return {
      ...state,
      isTaping
    }
  }
