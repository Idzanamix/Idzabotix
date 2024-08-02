/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { configureStore, combineReducers, ThunkAction, Action } from '@reduxjs/toolkit';
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import tokenSlice from './slices/tokenSlice';

const createNoopStorage = () => {
  return {
    getItem(_key: string) {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: string) {
      return Promise.resolve(value);
    },
    removeItem(_key: string) {
      return Promise.resolve();
    },
  };
};

const storage = typeof window === 'undefined' ? createNoopStorage() : createWebStorage('local');

const persistConfig = {
  key: 'noop',
  storage,
  whitelist: [
  ]
};

const rootReducer = combineReducers({
  githubToken: tokenSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const storeRedux = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(storeRedux);

export type rootStateType = ReturnType<typeof storeRedux.getState>;

export type appDispatchType = typeof storeRedux.dispatch;

export type ThunkActionType = ThunkAction<void, rootStateType, unknown, Action<string>>;






