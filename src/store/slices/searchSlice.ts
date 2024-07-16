import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ISearchState {
  searchValue: string
}

const initialState: ISearchState = {
  searchValue: ''
}

const searchSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    resetSearchValue() {
      return initialState
    },
    setSearchValue(state, action: PayloadAction<string>) {
      return {
        ...state,
        searchValue: action.payload
      }
    }
  }
});

export const { setSearchValue, resetSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
