/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect } from "react";
import { useClient } from "./client";
import { useDispatch } from "react-redux";
import { resetToken } from "../../../store/slices/tokenSlice";
import { ApolloProvider } from "@apollo/client/index.js";
import { useToken } from "../../../hooks/useToken";
import { selectAppoloData, useAppSelector } from "../../../store/storeSelectors";
import { changeLocationAuth } from "../../../utils/changeLocationAuth";
import { changeLocationIsAuthorized } from "../../../utils/changeLocationIsAuthorized";
import { useIsAuthorized } from "../../../hooks/useIsAuthorized";

interface IProviderApollo {
  children: ReactNode;
}

export function ProviderApollo({ children }: IProviderApollo) {
  const { isToken, liveTimeMinutes } = useAppSelector(selectAppoloData);
  const token = useToken();
  const client = useClient(token);
  const dispatch = useDispatch();
  const authorized = useIsAuthorized();
  const queryString = window.location.pathname;

  useEffect(() => {
    !token && authorized && changeLocationIsAuthorized(queryString);

    if (isToken) {
      setTimeout(() => {
        dispatch(resetToken());
        changeLocationAuth();
      }, 1000 * 60 * liveTimeMinutes);
    }
  }, [isToken, token, authorized]);

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}
