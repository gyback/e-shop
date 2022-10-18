import { configureStore, Middleware } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    PersistConfig,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

export type RootStateType = ReturnType<typeof rootReducer>

type ExtentedPersistConfig  = PersistConfig<RootStateType> & {
    whitelist: (keyof RootStateType)[]
}

const persistConfig: ExtentedPersistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['cart']
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
    .concat(
        [process.env.NODE_ENV !== 'production' && logger]
        .filter((middleware): middleware is Middleware => Boolean(middleware))
    )
    
})

export const persistor = persistStore(store);