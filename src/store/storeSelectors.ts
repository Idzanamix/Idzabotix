import { createSelector } from "@reduxjs/toolkit";
import { rootStateType } from "./storeRedux";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<rootStateType> = useSelector;

export const selectIsToken = ({ githubToken }: rootStateType) => githubToken.isToken;
export const selectIsAuthorized = ({ githubToken }: rootStateType) => githubToken.isAuthorized;
export const selectCreatedAt = ({ githubToken }: rootStateType) => githubToken.createdAt;
export const selectLiveTimeMinutes = ({ githubToken }: rootStateType) => githubToken.liveTimeMinutes;
export const selectQurery = ({ pagesPagination }: rootStateType) => pagesPagination.currentQuery;
export const selectPagesData = ({ pagesPagination }: rootStateType) => pagesPagination;
export const selectSearchValue = ({ search }: rootStateType) => search.searchValue;

export const selectAppoloData = createSelector(selectIsToken, selectIsAuthorized, selectCreatedAt, selectLiveTimeMinutes,
  (isToken, isAuthorized, CreatedAt, liveTimeMinutes) => {
    return {
      isToken,
      isAuthorized,
      CreatedAt,
      liveTimeMinutes
    }
  })

