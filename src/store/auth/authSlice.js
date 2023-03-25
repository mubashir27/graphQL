import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signUp } from './authFunctions';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    signUpUser: false,
    user: user ? user : {},
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: '',
    verifiedUser: false,
};

export const authSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = false;
            state.message = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signUp.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(signUp.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.signUpUser = true;
                state.verifiedUser = false;
                state.user = action.payload;
            })
            .addCase(signUp.rejected, (state) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.signUpUser = false;
                state.verifiedUser = false;
                state.user = {};
            });
    },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
