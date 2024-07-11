/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect } from "react";
import { setClient } from "./client";
import { selectAppoloData, useAppSelector } from "../../../store/storeSelectors";
import { useDispatch } from "react-redux";
// import { saveTokenAsyncThunk } from "../../../store/thunks/token/saveTokenAsyncThunk";
import { resetToken } from "../../../store/slices/tokenSlice";
import { ApolloProvider } from "@apollo/client/index.js";

interface IProviderApollo {
  children: ReactNode;
}

export function ProviderApollo({ children }: IProviderApollo) {
  const client = setClient();
  const dispatch = useDispatch();
  const { token, CreatedAt, liveTimeMinutes } = useAppSelector(selectAppoloData);
  const timeNow = new Date().getTime();

  useEffect(() => {
    // dispatch(saveTokenAsyncThunk());

    if (token) {
      setTimeout(() => {
        dispatch(resetToken());
      }, liveTimeMinutes * 60 * 1000 - (timeNow - CreatedAt));
    }
  }, [token]);

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}
