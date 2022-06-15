import { createSlice } from "@reduxjs/toolkit";
import { CreateQurbanSent, GetDetailQurbanSent, GetQurbanSentList, UpdateQurbanSent, GetPesertaQurbanSentList, DeleteQurbanSent, GetStatusSisaQurbanSent, GetStatusSelesaiQurbanSent } from "../../services";

const initialState = {
    qurbanSent: false,
    pesertaQurbanSent: false,
    createQurbanSent: false,
    updateQurbanSent: false,
    deleteQurbanSent: false,
    loading: false,
    loadingData: false,
    loadingSelesaiSent: false,
    loadingSisaSent: false,
    error: false,
    errorData: false,
}

const qurbanSentSlice = createSlice({
    name: 'qurbanSent',
    initialState,
    reducers: {
        resetErrorData: (state, action) => {
            state.errorData = false;
            state.error = false;
        }
    },
    extraReducers: {
        [GetQurbanSentList.pending]: (state, action) => {
            state.error = false;
            state.loading = true;
            state.loadingData = false;
            state.createQurbanSent = false;
            state.updateQurbanSent = false;
            state.deleteQurbanSent = false;
            state.errorData = false;
        },
        [GetQurbanSentList.fulfilled]: (state, action) => {
            state.loading = false;
            state.qurbanSent = action.payload;
        },
        [GetQurbanSentList.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [GetDetailQurbanSent.pending]: (state, action) => {
            state.error = false;
            state.loading = true;
            state.loadingData = false;
            state.createQurbanSent = false;
            state.updateQurbanSent = false;
            state.deleteQurbanSent = false;
            state.errorData = false;
        },
        [GetDetailQurbanSent.fulfilled]: (state, action) => {
            state.loading = false;
            state.qurbanSent = action.payload;
        },
        [GetDetailQurbanSent.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [GetPesertaQurbanSentList.pending]: (state, action) => {
            state.error = false;
            state.loading = true;
            state.loadingData = false;
            state.createQurbanSent = false;
            state.updateQurbanSent = false;
            state.deleteQurbanSent = false;
            state.errorData = false;
            state.pesertaQurbanSent = false;
        },
        [GetPesertaQurbanSentList.fulfilled]: (state, action) => {
            state.loading = false;
            state.pesertaQurbanSent = action.payload;
        },
        [GetPesertaQurbanSentList.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [CreateQurbanSent.pending]: (state, action) => {
            state.error = false;
            state.loading = false;
            state.loadingData = true;
            state.createQurbanSent = false;
            state.updateQurbanSent = false;
            state.deleteQurbanSent = false;
            state.errorData = false;
        },
        [CreateQurbanSent.fulfilled]: (state, action) => {
            state.loadingData = false;
            state.createQurbanSent = action.payload;
        },
        [CreateQurbanSent.rejected]: (state, action) => {
            state.loadingData = false;
            state.errorData = action.error;
        },
        [UpdateQurbanSent.pending]: (state, action) => {
            state.error = false;
            state.loading = false;
            state.loadingData = true;
            state.createQurbanSent = false;
            state.updateQurbanSent = false;
            state.deleteQurbanSent = false;
            state.errorData = false;
        },
        [UpdateQurbanSent.fulfilled]: (state, action) => {
            state.loadingData = false;
            state.updateQurbanSent = action.payload;
        },
        [UpdateQurbanSent.rejected]: (state, action) => {
            state.loadingData = false;
            state.errorData = action.error;
        },
        [DeleteQurbanSent.pending]: (state, action) => {
            state.error = false;
            state.loading = false;
            state.loadingData = true;
            state.createQurbanSent = false;
            state.updateQurbanSent = false;
            state.deleteQurbanSent = false;
            state.errorData = false;
        },
        [DeleteQurbanSent.fulfilled]: (state, action) => {
            state.loadingData = false;
            state.deleteQurbanSent = action.payload;
        },
        [DeleteQurbanSent.rejected]: (state, action) => {
            state.loadingData = false;
            state.errorData = action.error;
        },
        [GetStatusSisaQurbanSent.pending]: (state, action) => {
            state.error = false;
            state.loadingSelesaiSent = true;
            state.loadingData = false;
            state.updateQurbanSent = false;
            state.errorData = false;
            state.qurbanSelesaiSent = false;
        },
        [GetStatusSelesaiQurbanSent.fulfilled]: (state, action) => {
            state.loadingSelesaiSent = false;
            state.qurbanSelesaiSent = action.payload;
        },
        [GetStatusSelesaiQurbanSent.rejected]: (state, action) => {
            state.loadingSelesaiSent = false;
            state.error = action.error;
        },
        [GetStatusSisaQurbanSent.pending]: (state, action) => {
            state.error = false;
            state.loadingSisaSent = true;
            state.loadingData = false;
            state.updateQurbanSent = false;
            state.errorData = false;
            state.qurbanSisaSent = false;
        },
        [GetStatusSisaQurbanSent.fulfilled]: (state, action) => {
            state.loadingSisaSent = false;
            state.qurbanSisaSent = action.payload;
        },
        [GetStatusSisaQurbanSent.rejected]: (state, action) => {
            state.loadingSisaSent = false;
            state.error = action.error;
        },
    }
});

export const { resetErrorData } = qurbanSentSlice.actions
export default qurbanSentSlice.reducer



