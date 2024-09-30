// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;