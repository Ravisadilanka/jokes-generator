import { configureStore } from '@reduxjs/toolkit';
import jokeReducer from './reducers/jokeReducer';

const store = configureStore({
    reducer: jokeReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store;