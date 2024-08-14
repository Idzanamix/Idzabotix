import { PayloadAction } from "@reduxjs/toolkit";
import { IGameState } from "../gameSlice";

export interface ISetOneTapAction {
  id: string;
  x: number;
  y: number;
}

export const setTapsReducer =
  (state: IGameState, action: PayloadAction<ISetOneTapAction[]>): IGameState => {
    return {
      ...state,
      taps: state.taps?.concat(action.payload).slice(0, 50)
    }
  }
