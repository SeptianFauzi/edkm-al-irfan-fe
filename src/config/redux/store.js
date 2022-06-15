import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import celenganSlice from "./features/celengan/celenganSlice";
import dashboardSlice from "./features/dashboard/dashboardSlice";
import pesertaSlice from "./features/peserta/pesertaSlice";
import qurbanSentSlice from "./features/qurbansent/qurbanSentSlice";
import zakatFitrahReceivedSlice from "./features/zakatfitrahreceived/zakatFitrahReceivedSlice";
import zakatFitrahSentSlice from "./features/zakatfitrahsent/zakatFitrahSentSlice";
export default configureStore({
    reducer: {
        peserta: pesertaSlice,
        celengan: celenganSlice,
        zakatFitrahReceived: zakatFitrahReceivedSlice,
        zakatFitrahSent: zakatFitrahSentSlice,
        auth: authSlice,
        qurbanSent: qurbanSentSlice,
        dashboard: dashboardSlice
    },
});