import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signIn, signUp, verificationCode } from './authFunctions';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    signUpUser: false,
    user: user ? user : {},
    isError: false,
    isLoading: false,
    isSuccess: false,
    isFirstTimeAccount: false,
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
                state.isFirstTimeAccount = false;
                state.user = action.payload;
            })
            .addCase(signUp.rejected, (state) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.signUpUser = false;
                state.isFirstTimeAccount = false;
                state.verifiedUser = false;
                state.user = {};
            })
            // verification
            .addCase(verificationCode.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(verificationCode.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isFirstTimeAccount = true;
                state.signUpUser = true;
                state.verifiedUser = true;
            })
            .addCase(verificationCode.rejected, (state) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isFirstTimeAccount = false;
                state.signUpUser = true;
                state.verifiedUser = false;
            })
            // signIn
            .addCase(signIn.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(signIn.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isFirstTimeAccount = false;
                state.user = action.payload;
                state.signUpUser = true;
                // state.verifiedUser = true;
            })
            .addCase(signIn.rejected, (state) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isFirstTimeAccount = false;
                state.user = {};
                state.signUpUser = false;
                // state.verifiedUser = false;
            });
    },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
