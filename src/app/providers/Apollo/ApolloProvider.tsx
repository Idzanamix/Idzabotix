/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect } from "react";
import { ApolloProvider, } from '@apollo/client';
import { setClient } from "./client";
import { selectCreatedAt, selectIsToken, selectLiveTimeMinutes, useAppSelector } from "../../../store/storeSelectors";
import { useDispatch } from "react-redux";
import { saveTokenAsyncThunk } from "../../../store/thunks/token/saveTokenAsyncThunk";
import { resetToken } from "../../../store/slices/tokenSlice";
import { useUnmount } from "../../../hooks/useUnmount";

interface IProviderApollo {
  children: ReactNode;
}

export function ProviderApollo({ children }: IProviderApollo) {
  const client = setClient();
  const dispatch = useDispatch();
  const IsToken = useAppSelector(selectIsToken);
  const tokenCreatedAt = useAppSelector(selectCreatedAt);
  const tokenLiveTimeMinutes = useAppSelector(selectLiveTimeMinutes);
  const timeNow = new Date().getTime();

  useEffect(() => {
    dispatch(saveTokenAsyncThunk());

    if (IsToken) {
      setTimeout(() => {
        dispatch(resetToken());
      }, tokenLiveTimeMinutes * 60 * 1000 - (timeNow - tokenCreatedAt));
    }
  }, [IsToken]);

  const unmount = useUnmount();

  return (
    unmount && <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}
