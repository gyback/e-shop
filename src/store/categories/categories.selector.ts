import  {createSelector} from 'reselect';
import { CategoryStateType, CategoryMapType } from './categories.types';
import { RootStateType } from '../store';

const selectCategoryReducer = (state: RootStateType): CategoryStateType => state.categories;

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
)

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories): CategoryMapType => categories
        .reduce((acc, category) => {
            const {title, items} = category;
            acc[title.toLowerCase()] = items;
            return acc;
        }, {} as CategoryMapType)
);

export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categories) => categories.isLoading
)