import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { setTokenCookie } from "../cookie/token/setTokenCookie";

export interface ITokenState {
  isToken: boolean;
  createdAt: number;
  liveTimeMinutes: number;
}

interface ITokenAction {
  isToken: boolean;
  liveTimeMinutes: number;
}

const initialState: ITokenState = {
  isToken: false,
  createdAt: NaN,
  liveTimeMinutes: NaN
}

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    resetToken() {
      // setTokenCookie(null, 0);

      // return initialState
    },
    setToken(state, action: PayloadAction<ITokenAction>) {
      return {
        ...state,
        isToken: action.payload.isToken,
        createdAt: action.payload ? new Date().getTime() : NaN,
        liveTimeMinutes: action.payload.liveTimeMinutes
      }
    }
  }
});

export const { resetToken, setToken } = tokenSlice.actions;

export default tokenSlice.reducer;
