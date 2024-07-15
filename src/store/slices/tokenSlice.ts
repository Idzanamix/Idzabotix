import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ITokenState {
  isToken: boolean;
  isAuthorized: boolean;
  createdAt: number;
  liveTimeMinutes: number;
}

const initialState: ITokenState = {
  isToken: false,
  isAuthorized: true,
  createdAt: NaN,
  liveTimeMinutes: 60
}

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    resetToken() {
      return initialState
    },
    setTokenSlise(state, action: PayloadAction<boolean>) {
      return {
        ...state,
        isToken: action.payload,
        createdAt: action.payload ? new Date().getTime() : NaN
      }
    },
    setIsAuthorizedState(state, action: PayloadAction<boolean>) {
      return {
        ...state,
        isAuthorized: action.payload
      }
    }
  }
});

export const { resetToken, setTokenSlise, setIsAuthorizedState } = tokenSlice.actions;

export default tokenSlice.reducer;
