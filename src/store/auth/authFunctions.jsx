import { createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authServices';

export const signUp = createAsyncThunk('auth/signUp', async (user, { rejectWithValue }) => {
    try {
        console.log('signUp ');
        return await authService.signUp(user);
    } catch (error) {
        console.log('signUp not ');
        return rejectWithValue(error?.message);
    }
});

export const verificationCode = createAsyncThunk('auth/verificationCode', async (user, { rejectWithValue }) => {
    try {
        console.log('verificationCode ');
        return await authService.verificationCode(user);
    } catch (error) {
        console.log('verificationCode not ');
        return rejectWithValue(error?.message);
    }
});