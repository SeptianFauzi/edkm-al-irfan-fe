import { createSlice } from "@reduxjs/toolkit";
import { GetStatistic } from "../../services";

const initialState = {
    statistic: false,
    loading: false,
    error: false,
}

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        resetErrorData: (state, action) => {
            state.error = false;
        }
    },
    extraReducers: {
        [GetStatistic.pending]: (state) => {
            state.error = false;
            state.loading = true;
        },
        [GetStatistic.fulfilled]: (state, action) => {
            state.loading = false;
            state.statistic = action.payload;
        },
        [GetStatistic.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
    }
});

export const { resetErrorData } = dashboardSlice.actions
export default dashboardSlice.reducer



