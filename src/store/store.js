import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import logger from 'redux-logger'
import { rootReducer } from './root-reducer';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ["user/setCurrentUser", FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            ignoredPaths: ['user.currentUser']
        }
    })
    .concat(process.env.NODE_ENV !== 'production' && logger)
    .filter(Boolean)
})

export const persistor = persistStore(store);