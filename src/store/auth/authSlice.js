import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { resendSignInVerificationCode, signIn, signUp, verificationCode } from './authFunctions';

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
            .addCase(signUp.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.signUpUser = false;
                state.isFirstTimeAccount = false;
                state.verifiedUser = false;
                state.message = action.payload;
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
            .addCase(verificationCode.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isFirstTimeAccount = false;
                state.signUpUser = true;
                state.message = action.payload;
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
                state.verifiedUser = true;
            })
            .addCase(signIn.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isFirstTimeAccount = false;
                state.user = {};
                if (action.payload === 'User is not confirmed.') {
                    state.signUpUser = true;
                    state.message = action.payload;
                    state.verifiedUser = false;
                }
            })
            // resendSignInVerificationCode
            .addCase(resendSignInVerificationCode.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(resendSignInVerificationCode.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isFirstTimeAccount = true;
                state.signUpUser = true;
                state.verifiedUser = true;
            })
            .addCase(resendSignInVerificationCode.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isFirstTimeAccount = false;
                state.signUpUser = true;
                state.message = action.payload;
                state.verifiedUser = false;
            });
    },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
