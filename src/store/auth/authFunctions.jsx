import { createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authServices';

export const signUp = createAsyncThunk('auth/signUp', async (user, { rejectWithValue }) => {
    try {
        console.log('signUp ');
        return await authService.signUp(user);
    } catch (error) {
        return rejectWithValue(error?.message);
    }
});
