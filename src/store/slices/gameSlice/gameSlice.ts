import { createSlice } from "@reduxjs/toolkit";
import { setUserDataReducer } from "./reducers/setUserDataReducer";
import { setIsOpenModalReducer } from "./reducers/setIsOpenModalReducer";
import { setTapsReducer } from "./reducers/setTapsReducer";
import { resetTapReducer } from "./reducers/resetTapReducer";
import { increaseCoinsReducer } from "./reducers/increaseCoinsReducer";
import { reduceEnergyReducer } from "./reducers/reduceEnergyReducer";
import { setIsTapingReducer } from "./reducers/setIsTapingReducer";
import { increaseEnergyReducer } from "./reducers/increaseEnergyReducer";

export type tapsType = {
  id: string;
  x: number;
  y: number;
}

export interface IGameState {
  coins: number;
  maxEnergy: number;
  currentEnergy: number;
  saveModalIsOpen: boolean;
  isTaping: boolean,
  taps?: tapsType[]
}

const initialState: IGameState = {
  coins: 0,
  maxEnergy: 15000,
  currentEnergy: 15000,
  saveModalIsOpen: false,
  isTaping: false,
  taps: []
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setIsOpenModal: setIsOpenModalReducer,
    setUserData: setUserDataReducer,
    setTaps: setTapsReducer,
    resetTap: resetTapReducer,
    increaseCoins: increaseCoinsReducer,
    reduceEnergy: reduceEnergyReducer,
    increaseEnergy: increaseEnergyReducer,
    setIsTaping: setIsTapingReducer,
  }
});

export const {
  setTaps,
  resetTap,
  setUserData,
  setIsOpenModal,
  increaseCoins,
  reduceEnergy,
  increaseEnergy,
  setIsTaping } = gameSlice.actions;

export default gameSlice.reducer;
