import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/user.slice';
import categoriesReducer from './categories/categories.slice';
import cartReducer from './cart/cart.slice';
import logger from 'redux-logger'

export const store = configureStore({
    reducer: {
        user: userReducer,
        categories: categoriesReducer,
        cart: cartReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ["user/setCurrentUser"],
            ignoredPaths: ['user.currentUser']
        }
    }).concat(logger)
})

