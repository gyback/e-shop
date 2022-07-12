import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState:  {
        currentUser: {}
    },
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