import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUserData {
  coins: number;
  energy: number;
}

const initialState = {
  coins: 0,
  energy: 11000
}

const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<IUserData>) {
      const { coins, energy } = action.payload;
      return {
        ...state,
        coins,
        energy
      }
    }
  }
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
