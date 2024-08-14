import { PayloadAction } from "@reduxjs/toolkit";
import { IGameState } from "../gameSlice";

export const setIsOpenModalReducer =
  (state: IGameState, action: PayloadAction<boolean>): IGameState => {
    return {
      ...state,
      saveModalIsOpen: action.payload
    }
  };
