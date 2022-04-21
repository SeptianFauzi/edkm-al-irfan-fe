import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




// Peserta
const token = localStorage.getItem('token')
export const GetPesertaList = createAsyncThunk(
    'peserta/getPesertaList',
    async () => {
        const response = await axios.get('/api/peserta', { headers: { 'X-APITOKEN': token } })
        return response.data.data
    }
)

export const GetDetailPeserta = createAsyncThunk(
    'peserta/getDetailPeserta',
    async (id) => {
        const response = await axios.get('/api/peserta/' + id, { headers: { 'X-APITOKEN': token } })
        return response.data.data
    }
)

export const CreatePeserta = createAsyncThunk(
    'peserta/createPeserta',
    async (data) => {
        const response = await axios.post('/api/peserta', data, { headers: { 'X-APITOKEN': token } })
        return response.data.data
    }
)

export const UpdatePeserta = createAsyncThunk(
    'peserta/updatePeserta',
    async ({ id, data }) => {
        const response = await axios.put('/api/peserta/' + id, data, { headers: { 'X-APITOKEN': token } })
        return response.data.data
    }
)

export const DeletePeserta = createAsyncThunk(
    'peserta/deletePeserta',
    async (id) => {
        const response = await axios.delete('/api/peserta/' + id, { headers: { 'X-APITOKEN': token } })
        return response.data.data
    }
)

// Celengan
export const GetCelenganList = createAsyncThunk(
    'celengan/getCelenganList',
    async (year_hijriah) => {
        const response = await axios.get('/api/celengan?year_hijriah=' + year_hijriah, { headers: { 'X-APITOKEN': token } })
        return response.data.data
    }
)

export const GetPesertaCelenganList = createAsyncThunk(
    'celengan/getPesertaCelenganList',
    async (year_hijriah) => {
        const response = await axios.get('/api/pesertacelengan?year_hijriah=' + year_hijriah, { headers: { 'X-APITOKEN': token } })
        return response.data.data
    }
)
export const GetDetailCelengan = createAsyncThunk(
    'celengan/getDetailCelengan',
    async (id) => {
        const response = await axios.get('/api/celengan/' + id, { headers: { 'X-APITOKEN': token } })
        return response.data.data
    }
)

export const CreateCelengan = createAsyncThunk(
    'celengan/createCelengan',
    async (data) => {
        const response = await axios.post('/api/celengan', data, { headers: { 'X-APITOKEN': token } })
        return response.data.data
    }
)

export const UpdateCelengan = createAsyncThunk(
    'celengan/updateCelengan',
    async ({ id, data }) => {
        const response = await axios.put('/api/celengan/' + id, data, { headers: { 'X-APITOKEN': token } })
        return response.data.data
    }
)
export const DeleteCelengan = createAsyncThunk(
    'peserta/deleteCelengan',
    async (id) => {
        const response = await axios.delete('/api/celengan/' + id, { headers: { 'X-APITOKEN': token } })
        return response.data.data
    }
)

// Zakat Fitrah Received
export const GetZakatFitrahReceivedList = createAsyncThunk(
    'celengan/getZakatFitrahReceivedList',
    async (year_hijriah) => {
        const response = await axios.get('/api/zakatfitrahreceived?year_hijriah=' + year_hijriah, { headers: { 'X-APITOKEN': token } })
        return response.data.data
    }
)

export const GetPesertaZakatFitrahReceivedList = createAsyncThunk(
    'celengan/getPesertaZakatFitrahReceivedList',
    async (year_hijriah) => {
        const response = await axios.get('/api/pesertazakatfitrahreceived?year_hijriah=' + year_hijriah, { headers: { 'X-APITOKEN': token } })
        return response.data.data
    }
)
export const GetDetailZakatFitrahReceived = createAsyncThunk(
    'celengan/getDetailZakatFitrahReceived',
    async (id) => {
        const response = await axios.get('/api/zakatfitrahreceived/' + id, { headers: { 'X-APITOKEN': token } })
        return response.data.data
    }
)

export const CreateZakatFitrahReceived = createAsyncThunk(
    'celengan/createZakatFitrahReceived',
    async (data) => {
        const response = await axios.post('/api/zakatfitrahreceived', data, { headers: { 'X-APITOKEN': token } })
        return response.data.data
    }
)

export const UpdateZakatFitrahReceived = createAsyncThunk(
    'celengan/updateZakatFitrahReceived',
    async ({ id, data }) => {
        const response = await axios.put('/api/zakatfitrahreceived/' + id, data, { headers: { 'X-APITOKEN': token } })
        return response.data.data
    }
)
export const DeleteZakatFitrahReceived = createAsyncThunk(
    'peserta/deleteZakatFitrahReceived',
    async (id) => {
        const response = await axios.delete('/api/zakatfitrahreceived/' + id, { headers: { 'X-APITOKEN': token } })
        return response.data.data
    }
)

// Zakat Fitrah Sent 
export const GetZakatFitrahSentList = createAsyncThunk(
    'celengan/getZakatFitrahSentList',
    async (year_hijriah) => {
        const response = await axios.get('/api/zakatfitrahsent?year_hijriah=' + year_hijriah, { headers: { 'X-APITOKEN': token } })
        return response.data.data
    }
)

export const GetPesertaZakatFitrahSentList = createAsyncThunk(
    'celengan/getPesertaZakatFitrahSentList',
    async (year_hijriah) => {
        const response = await axios.get('/api/pesertazakatfitrahsent?year_hijriah=' + year_hijriah, { headers: { 'X-APITOKEN': token } })
        return response.data.data
    }
)
export const GetDetailZakatFitrahSent = createAsyncThunk(
    'celengan/getDetailZakatFitrahSent',
    async (id) => {
        const response = await axios.get('/api/zakatfitrahsent/' + id, { headers: { 'X-APITOKEN': token } })
        return response.data.data
    }
)

export const CreateZakatFitrahSent = createAsyncThunk(
    'celengan/createZakatFitrahSent',
    async (data) => {
        const response = await axios.post('/api/zakatfitrahsent', data, { headers: { 'X-APITOKEN': token } })
        return response.data.data
    }
)

export const UpdateZakatFitrahSent = createAsyncThunk(
    'celengan/updateZakatFitrahSent',
    async ({ id, data }) => {
        const response = await axios.put('/api/zakatfitrahsent/' + id, data, { headers: { 'X-APITOKEN': token } })
        return response.data.data
    }
)
export const DeleteZakatFitrahSent = createAsyncThunk(
    'peserta/deleteZakatFitrahSent',
    async (id) => {
        const response = await axios.delete('/api/zakatfitrahsent/' + id, { headers: { 'X-APITOKEN': token } })
        return response.data.data
    }
)

// Proses Login

export const PostLogin = createAsyncThunk(
    'peserta/postLogin',
    async (data) => {
        const response = await axios.post('/api/login', data)
        return response.data
    }
)

// Qurban Sent

export const GetQurbanSentList = createAsyncThunk(
    'celengan/getQurbanSentList',
    async (year_hijriah) => {
        const response = await axios.get('/api/qurbansent?year_hijriah=' + year_hijriah, { headers: { 'X-APITOKEN': token } })
        return response.data.data
    }
)

export const GetPesertaQurbanSentList = createAsyncThunk(
    'celengan/getPesertaQurbanSentList',
    async (year_hijriah) => {
        const response = await axios.get('/api/pesertaqurbansent?year_hijriah=' + year_hijriah, { headers: { 'X-APITOKEN': token } })
        return response.data.data
    }
)
export const GetDetailQurbanSent = createAsyncThunk(
    'celengan/getDetailQurbanSent',
    async (id) => {
        const response = await axios.get('/api/qurbansent/' + id, { headers: { 'X-APITOKEN': token } })
        return response.data.data
    }
)

export const CreateQurbanSent = createAsyncThunk(
    'celengan/createQurbanSent',
    async (data) => {
        const response = await axios.post('/api/qurbansent', data, { headers: { 'X-APITOKEN': token } })
        return response.data.data
    }
)

export const UpdateQurbanSent = createAsyncThunk(
    'celengan/updateQurbanSent',
    async ({ id, data }) => {
        const response = await axios.put('/api/qurbansent/' + id, data, { headers: { 'X-APITOKEN': token } })
        return response.data.data
    }
)
export const DeleteQurbanSent = createAsyncThunk(
    'peserta/deleteZakatFitrahSent',
    async (id) => {
        const response = await axios.delete('/api/qurbansent/' + id, { headers: { 'X-APITOKEN': token } })
        return response.data.data
    }
)

export const GetStatusSisaQurbanSent = createAsyncThunk(
    'qurban/getStatusSisaQurbanSent',
    async ({ year_hijriah, location }) => {
        if (location === 'Semua') {
            location = ''
        }
        const response = await axios.get('/api/statuspesertaqurbansent?is_qurban_sent=false&year_hijriah=' + year_hijriah + '&location=' + location, { headers: { 'X-APITOKEN': token } })
        return response.data.data
    }
)
export const GetStatusSelesaiQurbanSent = createAsyncThunk(
    'qurban/getStatusSelesaiQurbanSent',
    async ({ year_hijriah, location }) => {
        if (location === 'Semua') {
            location = ''
        }
        const response = await axios.get('/api/statuspesertaqurbansent?is_qurban_sent=true&year_hijriah=' + year_hijriah + '&location=' + location, { headers: { 'X-APITOKEN': token } })
        return response.data.data
    }
)
// statictic

export const GetStatistic = createAsyncThunk(
    'statistic/getStatistic',
    async (year_hijriah) => {
        const response = await axios.get('/api/statistic?year_hijriah=' + year_hijriah, { headers: { 'X-APITOKEN': token } })
        return response.data.data
    }
)