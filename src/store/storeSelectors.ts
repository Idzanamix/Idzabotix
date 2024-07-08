import { rootStateType } from "./storeRedux";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<rootStateType> = useSelector;

export const selectIsToken = ({ githubToken }: rootStateType) => githubToken.isToken;
export const selectCreatedAt = ({ githubToken }: rootStateType) => githubToken.createdAt;
export const selectLiveTimeMinutes = ({ githubToken }: rootStateType) => githubToken.liveTimeMinutes;
export const selectQurery = ({ pagesPagination }: rootStateType) => pagesPagination.currentQuery;
export const selectPagesData = ({ pagesPagination }: rootStateType) => pagesPagination;
export const selectSearchValue = ({ search }: rootStateType) => search.searchValue;
