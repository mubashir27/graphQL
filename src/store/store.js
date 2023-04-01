import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});
