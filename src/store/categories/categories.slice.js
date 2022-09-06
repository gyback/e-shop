import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";


export const fetchCategories = createAsyncThunk(
    'categories/fetchCategoriesStatus',
    async (thunkAPI) => {
        const response = await getCategoriesAndDocuments();
        return response;
    }
)

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        fetchCategoriesStart : (state, action) => {
            return {
                ...state,
                isLoading: true
            }
        },
        fetchCategoriesSuccess : (state, action) => {
            return {
                ...state,
                categories: action.payload,
                isLoading: false,
            }
        },
        fetchCategoriesFailed : (state, action) => {
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.pending, (state, action) =>{
            state.isLoading = true;
        })
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
            state.isLoading = false;
        })
    }
})


export default categoriesSlice.reducer;
export const {setCategories, fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFailed} = categoriesSlice.actions;