import { rootStateType } from "../../storeRedux";

export const selectUser = (({user}: rootStateType) => user);
