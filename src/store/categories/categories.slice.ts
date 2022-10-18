import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { CategoryStateType } from "./categories.types";


const initialState: CategoryStateType = {
    categories: [],
    isLoading: false,
    error: null
}

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategoriesStatus',
    async (thunkAPI) => {
        const response = await getCategoriesAndDocuments();
        return response;
    }
)

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state, action) =>{
                state.isLoading = true;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
                state.isLoading = false;
            })
    }
})

export default categoriesSlice.reducer;

