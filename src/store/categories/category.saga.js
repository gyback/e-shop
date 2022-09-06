import { takeLatest, all, call, put } from 'redux-saga/effects';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { fetchCategoriesFailed, fetchCategoriesSuccess } from './categories.slice';



// export const fetchCategories = createAsyncThunk(
//     'categories/fetchCategoriesStatus',
//     async (thunkAPI) => {
//         const response = await getCategoriesAndDocuments();
//         return response;
//     }
// )

export function* fetchCategoriesAsync() {
    try {
        const categoriesArray = yield call(getCategoriesAndDocuments,'categories');
        yield put(fetchCategoriesSuccess(categoriesArray))
    } catch (error) {
        yield put(fetchCategoriesFailed(error))
    }
}

export function* onFetchCategories(){
    yield takeLatest('categories/fetchCategoriesStart', fetchCategoriesAsync)
}

export function* categoriesSaga() {
    yield all([call(onFetchCategories)]);
}