import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPaginationMaxPagesValue } from "../../utils/getPaginationMaxPagesValue";
import { getPaginationListArray, IArrPages } from "../../utils/getPaginationListArray";

interface IPages {
  [key: number]: string
}

export interface IPagesState {
  currentQuery: {
    repositoryCount: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    startCursor: string;
    endCursor: string;
    pagesCount: number;
    pagesCountPagination: number;
  }
  firstNumberVisible: number;
  currentPage: number;
  targetPage: number;
  onForward: boolean;
  maxPagesPagination: number;
  itemsPerPage: number;
  onStartCursor: string;
  onEndCursor: string;
  pages: IPages;
  paginationList: IArrPages[];
}

interface ICurrentQueryAction {
  repositoryCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  startCursor: string;
  endCursor: string;
}

const initialState: IPagesState = {
  currentQuery: {
    repositoryCount: 0,
    hasPreviousPage: false,
    hasNextPage: false,
    startCursor: "",
    endCursor: "",
    pagesCount: 0,
    pagesCountPagination: 0
  },
  firstNumberVisible: 1,
  currentPage: 1,
  targetPage: 1,
  maxPagesPagination: 9,
  itemsPerPage: 10,
  onForward: true,
  onStartCursor: '',
  onEndCursor: '',
  pages: {},
  paginationList: []
}

const pagesSlice = createSlice({
  name: 'pagesNavigation',
  initialState,
  reducers: {
    setCursorNextPage(state, action: PayloadAction<string>) {
      const { currentPage, targetPage } = state;
      const { startCursor } = state.currentQuery;
      const { onEndCursor } = state;
      const currentCursor = action.payload;
      const prevCursor = onEndCursor;
      const updatedPage = currentPage === targetPage ? currentPage : currentPage + 1;

      return {
        ...state,
        pages: {
          ...state.pages,
          [currentPage]: startCursor,
        },
        currentPage: updatedPage,
        onEndCursor: currentPage === targetPage ? prevCursor : currentCursor,
      }
    },

    setCursorPrevPage(state) {
      const { targetPage, pages } = state;
      const cursor = pages[targetPage]

      return {
        ...state,
        currentPage: targetPage,
        onStartCursor: cursor,
        onEndCursor: ''
      }
    },

    setTargetPage(state, payload: PayloadAction<number>) {
      const { currentPage, maxPagesPagination } = state;
      const { pagesCountPagination, pagesCount } = state.currentQuery;
      const onForward = payload.payload > currentPage ? true : false;
      const paginationCenterOffset = (Math.floor(maxPagesPagination / 2))
      const firstNumber = payload.payload - paginationCenterOffset;
      const lastNumber = payload.payload + 1 + paginationCenterOffset;
      const maxFirstNumber = pagesCount + 1 - maxPagesPagination;
      const currentFirstNumber = (firstNumber <= 0 || pagesCountPagination < maxPagesPagination)
        ? 1
        : lastNumber >= pagesCount ? maxFirstNumber : firstNumber;
      const paginationList = getPaginationListArray(currentFirstNumber, pagesCountPagination);

      return {
        ...state,
        targetPage: payload.payload,
        onForward,
        firstNumberVisible: currentFirstNumber,
        paginationList
      }
    },

    resetPagesData() {
      return initialState;
    },

    setCurrentQuery(state, action: PayloadAction<ICurrentQueryAction>) {
      const { repositoryCount,
        hasPreviousPage,
        hasNextPage,
        startCursor,
        endCursor
      } = action.payload;
      const { itemsPerPage, maxPagesPagination, firstNumberVisible } = state;
      const pagesCount = Math.ceil(repositoryCount / itemsPerPage);
      const pagesCountPagination = getPaginationMaxPagesValue(pagesCount, maxPagesPagination);
      const paginationList = getPaginationListArray(firstNumberVisible, pagesCountPagination);

      return {
        ...state,
        currentQuery: {
          ...state.currentQuery,
          repositoryCount,
          hasPreviousPage,
          hasNextPage,
          startCursor,
          endCursor,
          pagesCount,
          pagesCountPagination
        },
        paginationList
      }
    },

    setMaxPagesPagination(state, action: PayloadAction<boolean>) {
      const { firstNumberVisible } = state;
      const { pagesCount } = state.currentQuery;
      const maxPagesPagination = action.payload ? 6 : 9
      const pagesCountPagination = getPaginationMaxPagesValue(pagesCount, maxPagesPagination);
      const paginationList = getPaginationListArray(firstNumberVisible, pagesCountPagination);

      return {
        ...state,
        maxPagesPagination,
        paginationList
      }
    }
  }
})

export const {
  setCurrentQuery,
  setTargetPage,
  setCursorNextPage,
  setCursorPrevPage,
  resetPagesData,
  setMaxPagesPagination } = pagesSlice.actions;

export default pagesSlice.reducer;


