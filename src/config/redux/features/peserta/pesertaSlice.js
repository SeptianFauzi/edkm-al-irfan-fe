import { createSlice } from "@reduxjs/toolkit";
import { CreatePeserta, DeletePeserta, GetDetailPeserta, GetPesertaList, UpdatePeserta } from "../../services";

const initialState = {
    peserta: false,
    createPeserta: false,
    updatePeserta: false,
    deletePeserta: false,
    loading: false,
    loadingData: false,
    error: false,
    errorData: false
}

const pesertaSlice = createSlice({
    name: 'peserta',
    initialState,
    reducers: {
        resetErrorData: (state, action) => {
            state.error = false;
            state.errorData = false;
        }
    },
    extraReducers: {
        [GetPesertaList.pending]: (state, action) => {
            state.createPeserta = false;
            state.updatePeserta = false;
            state.deletePeserta = false;
            state.loading = true;
            state.loadingData = false;
            state.error = false;
            state.errorData = false;
        },
        [GetPesertaList.fulfilled]: (state, action) => {
            state.loading = false;
            state.peserta = action.payload;
        },
        [GetPesertaList.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [GetDetailPeserta.pending]: (state, action) => {
            state.createPeserta = false;
            state.updatePeserta = false;
            state.deletePeserta = false;
            state.loading = true;
            state.loadingData = false;
            state.error = false;
            state.errorData = false;
        },
        [GetDetailPeserta.fulfilled]: (state, action) => {
            state.loading = false;
            state.peserta = action.payload;
        },
        [GetDetailPeserta.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
            state.peserta = false;
        },
        [CreatePeserta.pending]: (state, action) => {
            state.createPeserta = false;
            state.updatePeserta = false;
            state.deletePeserta = false;
            state.loading = false;
            state.loadingData = true;
            state.error = false;
            state.errorData = false;
        },
        [CreatePeserta.fulfilled]: (state, action) => {
            state.loadingData = false;
            state.createPeserta = action.payload;
        },
        [CreatePeserta.rejected]: (state, action) => {
            state.loadingData = false;
            state.errorData = action.error;
        },
        [UpdatePeserta.pending]: (state, action) => {
            state.createPeserta = false;
            state.updatePeserta = false;
            state.deletePeserta = false;
            state.loading = false;
            state.loadingData = true
            state.error = false;
            state.errorData = false;
        },
        [UpdatePeserta.fulfilled]: (state, action) => {
            state.loadingData = false;
            state.updatePeserta = action.payload;
        },
        [UpdatePeserta.rejected]: (state, action) => {
            state.loadingData = false;
            state.error = action.error;
        },
        [DeletePeserta.pending]: (state, action) => {
            state.loading = false;
            state.loadingData = true;
            state.createPeserta = false;
            state.updatePeserta = false;
            state.deletePeserta = false;
            state.error = false;
            state.errorData = false;
        },
        [DeletePeserta.fulfilled]: (state, action) => {
            state.loadingData = false;
            state.deletePeserta = action.payload;
        },
        [DeletePeserta.rejected]: (state, action) => {
            state.loadingData = false;
            state.errorData = action.error;
        }
    }
});
export const { resetErrorData } = pesertaSlice.actions
export default pesertaSlice.reducer



