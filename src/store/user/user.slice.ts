import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./user.types";

const initialState: UserState =   {
    currentUser: {}
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            return {
                ...state,
                currentUser: action.payload
            }            
        }
    }
})

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;