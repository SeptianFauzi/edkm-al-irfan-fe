import { createSlice } from "@reduxjs/toolkit";
import { CreateCelengan, GetDetailCelengan, GetCelenganList, UpdateCelengan, GetPesertaCelenganList, DeleteCelengan } from "../../services";

const initialState = {
    celengan: false,
    pesertaCelengan: false,
    createCelengan: false,
    updateCelengan: false,
    deleteCelengan: false,
    loading: false,
    loadingData: false,
    error: false,
    errorData: false,
}

const celenganSlice = createSlice({
    name: 'celengan',
    initialState,
    reducers: {
        resetErrorData: (state, action) => {
            state.errorData = false;
            state.error = false;
        }
    },
    extraReducers: {
        [GetCelenganList.pending]: (state, action) => {
            state.error = false;
            state.loading = true;
            state.loadingData = false;
            state.createCelengan = false;
            state.updateCelengan = false;
            state.deleteCelengan = false;
            state.errorData = false;
        },
        [GetCelenganList.fulfilled]: (state, action) => {
            state.loading = false;
            state.celengan = action.payload;
        },
        [GetCelenganList.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [GetDetailCelengan.pending]: (state, action) => {
            state.error = false;
            state.loading = true;
            state.loadingData = false;
            state.createCelengan = false;
            state.updateCelengan = false;
            state.deleteCelengan = false;
            state.errorData = false;
        },
        [GetDetailCelengan.fulfilled]: (state, action) => {
            state.loading = false;
            state.celengan = action.payload;
        },
        [GetDetailCelengan.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [GetPesertaCelenganList.pending]: (state, action) => {
            state.error = false;
            state.loading = true;
            state.loadingData = false;
            state.createCelengan = false;
            state.updateCelengan = false;
            state.deleteCelengan = false;
            state.errorData = false;
        },
        [GetPesertaCelenganList.fulfilled]: (state, action) => {
            state.loading = false;
            state.pesertaCelengan = action.payload;
        },
        [GetPesertaCelenganList.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [CreateCelengan.pending]: (state, action) => {
            state.error = false;
            state.loading = false;
            state.loadingData = true;
            state.createCelengan = false;
            state.updateCelengan = false;
            state.deleteCelengan = false;
            state.errorData = false;
        },
        [CreateCelengan.fulfilled]: (state, action) => {
            state.loadingData = false;
            state.createCelengan = action.payload;
        },
        [CreateCelengan.rejected]: (state, action) => {
            state.loadingData = false;
            state.errorData = action.error;
        },
        [UpdateCelengan.pending]: (state, action) => {
            state.error = false;
            state.loading = false;
            state.loadingData = true;
            state.createCelengan = false;
            state.updateCelengan = false;
            state.deleteCelengan = false;
            state.errorData = false;
        },
        [UpdateCelengan.fulfilled]: (state, action) => {
            state.loadingData = false;
            state.updateCelengan = action.payload;
        },
        [UpdateCelengan.rejected]: (state, action) => {
            state.loadingData = false;
            state.errorData = action.error;
        },
        [DeleteCelengan.pending]: (state, action) => {
            state.error = false;
            state.loading = false;
            state.loadingData = true;
            state.createCelengan = false;
            state.updateCelengan = false;
            state.deleteCelengan = false;
            state.errorData = false;
        },
        [DeleteCelengan.fulfilled]: (state, action) => {
            state.loadingData = false;
            state.deleteCelengan = action.payload;
        },
        [DeleteCelengan.rejected]: (state, action) => {
            state.loadingData = false;
            state.errorData = action.error;
        }
    }
});

export const { resetErrorData } = celenganSlice.actions
export default celenganSlice.reducer



