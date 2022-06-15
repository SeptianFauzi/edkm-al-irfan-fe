import { createSlice } from "@reduxjs/toolkit";
import { PostLogin } from "../../services";
// import { CreateLogin, DeleteLogin, GetDetailLogin, GetLoginList, UpdateLogin } from "../../services";

const initialState = {
    auth: false,
    loading: false,
    error: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearAuthData: (state, action) => {
            state.auth = false;
        }
    },
    extraReducers: {
        [PostLogin.pending]: (state, action) => {
            state.loading = true;
            state.error = false;
        },
        [PostLogin.fulfilled]: (state, action) => {
            state.loading = false;
            state.auth = action.payload;
        },
        [PostLogin.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        // [GetDetailLogin.pending]: (state, action) => {
        //     state.createLogin = false;
        //     state.updateLogin = false;
        //     state.deleteLogin = false;
        //     state.loading = true;
        //     state.loadingData = false;
        //     state.error = false;
        //     state.errorData = false;
        // },
        // [GetDetailLogin.fulfilled]: (state, action) => {
        //     state.loading = false;
        //     state.auth = action.payload;
        // },
        // [GetDetailLogin.rejected]: (state, action) => {
        //     state.loading = false;
        //     state.error = action.error;
        //     state.auth = false;
        // },
        // [CreateLogin.pending]: (state, action) => {
        //     state.createLogin = false;
        //     state.updateLogin = false;
        //     state.deleteLogin = false;
        //     state.loading = false;
        //     state.loadingData = true;
        //     state.error = false;
        //     state.errorData = false;
        // },
        // [CreateLogin.fulfilled]: (state, action) => {
        //     state.loadingData = false;
        //     state.createLogin = action.payload;
        // },
        // [CreateLogin.rejected]: (state, action) => {
        //     state.loadingData = false;
        //     state.errorData = action.error;
        // },
        // [UpdateLogin.pending]: (state, action) => {
        //     state.createLogin = false;
        //     state.updateLogin = false;
        //     state.deleteLogin = false;
        //     state.loading = false;
        //     state.loadingData = true
        //     state.error = false;
        //     state.errorData = false;
        // },
        // [UpdateLogin.fulfilled]: (state, action) => {
        //     state.loadingData = false;
        //     state.updateLogin = action.payload;
        // },
        // [UpdateLogin.rejected]: (state, action) => {
        //     state.loadingData = false;
        //     state.error = action.error;
        // },
        // [DeleteLogin.pending]: (state, action) => {
        //     state.loading = false;
        //     state.loadingData = true;
        //     state.createLogin = false;
        //     state.updateLogin = false;
        //     state.deleteLogin = false;
        //     state.error = false;
        //     state.errorData = false;
        // },
        // [DeleteLogin.fulfilled]: (state, action) => {
        //     state.loadingData = false;
        //     state.deleteLogin = action.payload;
        // },
        // [DeleteLogin.rejected]: (state, action) => {
        //     state.loadingData = false;
        //     state.errorData = action.error;
        // }
    }
});
export const { clearAuthData } = authSlice.actions
export default authSlice.reducer



