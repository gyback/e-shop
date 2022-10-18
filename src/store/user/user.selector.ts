import { createSelector } from "reselect";
import { UserState } from "./user.types";

import { RootStateType } from "../store";

export const selectUserReducer = (state:RootStateType):UserState => state.user;

export const selectCurrentUser = createSelector(
    selectUserReducer,
    (user) => user.currentUser
);