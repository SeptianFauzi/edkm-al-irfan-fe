import { createSlice } from "@reduxjs/toolkit";
import { CreateZakatFitrahSent, GetDetailZakatFitrahSent, GetZakatFitrahSentList, UpdateZakatFitrahSent, GetPesertaZakatFitrahSentList, DeleteZakatFitrahSent } from "../../services";

const initialState = {
    zakatFitrahSent: false,
    pesertaZakatFitrahSent: false,
    createZakatFitrahSent: false,
    updateZakatFitrahSent: false,
    deleteZakatFitrahSent: false,
    loading: false,
    loadingData: false,
    error: false,
    errorData: false,
}

const zakatFitrahSentSlice = createSlice({
    name: 'zakatFitrahSent',
    initialState,
    reducers: {
        resetErrorData: (state, action) => {
            state.errorData = false;
            state.error = false;
        }
    },
    extraReducers: {
        [GetZakatFitrahSentList.pending]: (state, action) => {
            state.error = false;
            state.loading = true;
            state.loadingData = false;
            state.createZakatFitrahSent = false;
            state.updateZakatFitrahSent = false;
            state.deleteZakatFitrahSent = false;
            state.errorData = false;
        },
        [GetZakatFitrahSentList.fulfilled]: (state, action) => {
            state.loading = false;
            state.zakatFitrahSent = action.payload;
        },
        [GetZakatFitrahSentList.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [GetDetailZakatFitrahSent.pending]: (state, action) => {
            state.error = false;
            state.loading = true;
            state.loadingData = false;
            state.createZakatFitrahSent = false;
            state.updateZakatFitrahSent = false;
            state.deleteZakatFitrahSent = false;
            state.errorData = false;
        },
        [GetDetailZakatFitrahSent.fulfilled]: (state, action) => {
            state.loading = false;
            state.zakatFitrahSent = action.payload;
        },
        [GetDetailZakatFitrahSent.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [GetPesertaZakatFitrahSentList.pending]: (state, action) => {
            state.error = false;
            state.loading = true;
            state.loadingData = false;
            state.createZakatFitrahSent = false;
            state.updateZakatFitrahSent = false;
            state.deleteZakatFitrahSent = false;
            state.errorData = false;
            state.pesertaZakatFitrahSent = false;
        },
        [GetPesertaZakatFitrahSentList.fulfilled]: (state, action) => {
            state.loading = false;
            state.pesertaZakatFitrahSent = action.payload;
        },
        [GetPesertaZakatFitrahSentList.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [CreateZakatFitrahSent.pending]: (state, action) => {
            state.error = false;
            state.loading = false;
            state.loadingData = true;
            state.createZakatFitrahSent = false;
            state.updateZakatFitrahSent = false;
            state.deleteZakatFitrahSent = false;
            state.errorData = false;
        },
        [CreateZakatFitrahSent.fulfilled]: (state, action) => {
            state.loadingData = false;
            state.createZakatFitrahSent = action.payload;
        },
        [CreateZakatFitrahSent.rejected]: (state, action) => {
            state.loadingData = false;
            state.errorData = action.error;
        },
        [UpdateZakatFitrahSent.pending]: (state, action) => {
            state.error = false;
            state.loading = false;
            state.loadingData = true;
            state.createZakatFitrahSent = false;
            state.updateZakatFitrahSent = false;
            state.deleteZakatFitrahSent = false;
            state.errorData = false;
        },
        [UpdateZakatFitrahSent.fulfilled]: (state, action) => {
            state.loadingData = false;
            state.updateZakatFitrahSent = action.payload;
        },
        [UpdateZakatFitrahSent.rejected]: (state, action) => {
            state.loadingData = false;
            state.errorData = action.error;
        },
        [DeleteZakatFitrahSent.pending]: (state, action) => {
            state.error = false;
            state.loading = false;
            state.loadingData = true;
            state.createZakatFitrahSent = false;
            state.updateZakatFitrahSent = false;
            state.deleteZakatFitrahSent = false;
            state.errorData = false;
        },
        [DeleteZakatFitrahSent.fulfilled]: (state, action) => {
            state.loadingData = false;
            state.deleteZakatFitrahSent = action.payload;
        },
        [DeleteZakatFitrahSent.rejected]: (state, action) => {
            state.loadingData = false;
            state.errorData = action.error;
        }
    }
});

export const { resetErrorData } = zakatFitrahSentSlice.actions
export default zakatFitrahSentSlice.reducer



