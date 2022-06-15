import { createSlice } from "@reduxjs/toolkit";
import { CreateZakatFitrahReceived, GetDetailZakatFitrahReceived, GetZakatFitrahReceivedList, UpdateZakatFitrahReceived, GetPesertaZakatFitrahReceivedList, DeleteZakatFitrahReceived } from "../../services";

const initialState = {
    zakatFitrahReceived: false,
    pesertaZakatFitrahReceived: false,
    createZakatFitrahReceived: false,
    updateZakatFitrahReceived: false,
    deleteZakatFitrahReceived: false,
    loading: false,
    loadingData: false,
    error: false,
    errorData: false,
}

const zakatFitrahReceivedSlice = createSlice({
    name: 'zakatFitrahReceived',
    initialState,
    reducers: {
        resetErrorData: (state, action) => {
            state.errorData = false;
            state.error = false;
        }
    },
    extraReducers: {
        [GetZakatFitrahReceivedList.pending]: (state, action) => {
            state.error = false;
            state.loading = true;
            state.loadingData = false;
            state.createZakatFitrahReceived = false;
            state.updateZakatFitrahReceived = false;
            state.deleteZakatFitrahReceived = false;
            state.errorData = false;
        },
        [GetZakatFitrahReceivedList.fulfilled]: (state, action) => {
            state.loading = false;
            state.zakatFitrahReceived = action.payload;
        },
        [GetZakatFitrahReceivedList.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [GetDetailZakatFitrahReceived.pending]: (state, action) => {
            state.error = false;
            state.loading = true;
            state.loadingData = false;
            state.createZakatFitrahReceived = false;
            state.updateZakatFitrahReceived = false;
            state.deleteZakatFitrahReceived = false;
            state.errorData = false;
        },
        [GetDetailZakatFitrahReceived.fulfilled]: (state, action) => {
            state.loading = false;
            state.zakatFitrahReceived = action.payload;
        },
        [GetDetailZakatFitrahReceived.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [GetPesertaZakatFitrahReceivedList.pending]: (state, action) => {
            state.error = false;
            state.loading = true;
            state.loadingData = false;
            state.createZakatFitrahReceived = false;
            state.updateZakatFitrahReceived = false;
            state.deleteZakatFitrahReceived = false;
            state.errorData = false;
        },
        [GetPesertaZakatFitrahReceivedList.fulfilled]: (state, action) => {
            state.loading = false;
            state.pesertaZakatFitrahReceived = action.payload;
        },
        [GetPesertaZakatFitrahReceivedList.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [CreateZakatFitrahReceived.pending]: (state, action) => {
            state.error = false;
            state.loading = false;
            state.loadingData = true;
            state.createZakatFitrahReceived = false;
            state.updateZakatFitrahReceived = false;
            state.deleteZakatFitrahReceived = false;
            state.errorData = false;
        },
        [CreateZakatFitrahReceived.fulfilled]: (state, action) => {
            state.loadingData = false;
            state.createZakatFitrahReceived = action.payload;
        },
        [CreateZakatFitrahReceived.rejected]: (state, action) => {
            state.loadingData = false;
            state.errorData = action.error;
        },
        [UpdateZakatFitrahReceived.pending]: (state, action) => {
            state.error = false;
            state.loading = false;
            state.loadingData = true;
            state.createZakatFitrahReceived = false;
            state.updateZakatFitrahReceived = false;
            state.deleteZakatFitrahReceived = false;
            state.errorData = false;
        },
        [UpdateZakatFitrahReceived.fulfilled]: (state, action) => {
            state.loadingData = false;
            state.updateZakatFitrahReceived = action.payload;
        },
        [UpdateZakatFitrahReceived.rejected]: (state, action) => {
            state.loadingData = false;
            state.errorData = action.error;
        },
        [DeleteZakatFitrahReceived.pending]: (state, action) => {
            state.error = false;
            state.loading = false;
            state.loadingData = true;
            state.createZakatFitrahReceived = false;
            state.updateZakatFitrahReceived = false;
            state.deleteZakatFitrahReceived = false;
            state.errorData = false;
        },
        [DeleteZakatFitrahReceived.fulfilled]: (state, action) => {
            state.loadingData = false;
            state.deleteZakatFitrahReceived = action.payload;
        },
        [DeleteZakatFitrahReceived.rejected]: (state, action) => {
            state.loadingData = false;
            state.errorData = action.error;
        }
    }
});

export const { resetErrorData } = zakatFitrahReceivedSlice.actions
export default zakatFitrahReceivedSlice.reducer



