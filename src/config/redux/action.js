import axios from 'axios';

export const GET_PESERTA_LIST = 'GET_PESERTA_LIST';
export const POST_PESERTA = 'POST_PESERTA';
export const GET_DETAIL_PESERTA = 'GET_DETAIL_PESERTA';
export const UPDATE_PESERTA = 'UPDATE_PESERTA';
export const DELETE_PESERTA = 'DELETE_PESERTA';
export const DELETE_STATE_PESERTA = 'DELETE_STATE_PESERTA';
export const LOGIN_USER = 'LOGIN_USER';
export const GET_ZAKAT_FITRAH_LIST = 'GET_ZAKAT_FITRAH_LIST';
export const DELETE_ZAKAT_FITRAH = 'DELETE_ZAKAT_FITRAH';
export const GET_PESERTA_ZAKAT_FITRAH_LIST = 'GET_PESERTA_ZAKAT_FITRAH_LIST';
export const PESERTA_ZAKAT_FITRAH_LIST = 'PESERTA_ZAKAT_FITRAH_LIST';
export const POST_ZAKAT_FITRAH = 'POST_ZAKAT_FITRAH';
export const GET_DETAIL_ZAKAT_FITRAH = 'GET_DETAIL_ZAKAT_FITRAH';
export const UPDATE_ZAKAT_FITRAH = 'UPDATE_ZAKAT_FITRAH';
export const DELETE_STATE_ZAKAT_FITRAH = 'DELETE_STATE_ZAKAT_FITRAH';

export const GET_CELENGAN_LIST = 'GET_CELENGAN_LIST';
export const DELETE_CELENGAN = 'DELETE_CELENGAN';
export const GET_PESERTA_CELENGAN_LIST = 'GET_PESERTA_CELENGAN_LIST';
export const PESERTA_CELENGAN_LIST = 'PESERTA_CELENGAN_LIST';
export const POST_CELENGAN = 'POST_CELENGAN';
export const GET_DETAIL_CELENGAN = 'GET_DETAIL_CELENGAN';
export const UPDATE_CELENGAN = 'UPDATE_CELENGAN';
export const DELETE_STATE_CELENGAN = 'DELETE_STATE_CELENGAN';
export const getPesertaList = () => {
    return (dispatch) =>
        axios.get('/api/peserta', {
            headers: {
                'X-APITOKEN': localStorage.getItem('token')
            }
        })
            .then(function (response) {
                dispatch({
                    type: GET_PESERTA_LIST,
                    payload: {
                        data: response.data.data,
                        errorMessage: false
                    }
                })

            })
            .catch(function (error) {
                dispatch({
                    type: GET_PESERTA_LIST,
                    payload: {
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
}
export const postPeserta = (data) => {
    return (dispatch) =>

        axios.post('/api/peserta', data, {
            headers: {
                'X-APITOKEN': localStorage.getItem('token')
            }
        })
            .then(function (response) {
                dispatch({
                    type: POST_PESERTA,
                    payload: {
                        data: response.data.data,
                        errorMessage: false
                    }
                })

            })
            .catch(function (error) {
                dispatch({
                    type: POST_PESERTA,
                    payload: {
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
}
export const updatePeserta = (id, data) => {
    return (dispatch) =>
        axios.put('/api/peserta/' + id, data, {
            headers: {
                'X-APITOKEN': localStorage.getItem('token')
            }
        })
            .then(function (response) {
                dispatch({
                    type: UPDATE_PESERTA,
                    payload: {
                        data: response.data.data,
                        errorMessage: false
                    }
                })
            })
            .catch(function (error) {
                dispatch({
                    type: UPDATE_PESERTA,
                    payload: {
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
}
export const deletePeserta = (id) => {
    return (dispatch) =>
        axios.delete('/api/peserta/' + id, {
            headers: {
                'X-APITOKEN': localStorage.getItem('token')
            }
        })
            .then(function (response) {
                dispatch({
                    type: DELETE_PESERTA,
                    payload: {
                        data: response.data.data,
                        errorMessage: false
                    }
                })
            })
            .catch(function (error) {
                dispatch({
                    type: DELETE_PESERTA,
                    payload: {
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
}
export const deleteStatePeserta = () => {
    return (dispatch) =>
        dispatch({
            type: DELETE_STATE_PESERTA,
            payload: {
                data: false,
                errorMessage: false
            }
        })
}
export const postLogin = (data) => {
    return (dispatch) =>
        axios.post('/api/login', data, {
            headers: {
                'X-APITOKEN': localStorage.getItem('token')
            }
        })
            .then(function (response) {
                dispatch({
                    type: LOGIN_USER,
                    payload: {
                        data: response.data.data,
                        errorMessage: false
                    }
                })
                return true;
            })
            .catch(function (error) {
                dispatch({
                    type: LOGIN_USER,
                    payload: {
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
}

export const getZakatFitrahList = (year_hijriah) => {
    return (dispatch) =>
        axios.get('/api/zakatfitrahreceived?year_hijriah=' + year_hijriah, {
            headers: {
                'X-APITOKEN': localStorage.getItem('token')
            }
        })
            .then(function (response) {
                dispatch({
                    type: GET_ZAKAT_FITRAH_LIST,
                    payload: {
                        data: response.data.data,
                        errorMessage: false
                    }
                })
            })
            .catch(function (error) {
                dispatch({
                    type: GET_ZAKAT_FITRAH_LIST,
                    payload: {
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
}
export const deleteZakatFitrah = (id) => {
    return (dispatch) =>
        axios.delete('/api/zakatfitrahreceived/' + id, {
            headers: {
                'X-APITOKEN': localStorage.getItem('token')
            }
        })
            .then(function (response) {
                dispatch({
                    type: DELETE_ZAKAT_FITRAH,
                    payload: {
                        data: response.data.data,
                        errorMessage: false
                    }
                })
            })
            .catch(function (error) {
                dispatch({
                    type: DELETE_ZAKAT_FITRAH,
                    payload: {
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
}

export const getPesertaZakatFitrahList = (year_hijriah) => {
    return (dispatch) =>
        axios.get('/api/pesertazakatfitrahreceived?year_hijriah=' + year_hijriah, {
            headers: {
                'X-APITOKEN': localStorage.getItem('token')
            }
        })
            .then(function (response) {
                dispatch({
                    type: GET_PESERTA_ZAKAT_FITRAH_LIST,
                    payload: {
                        data: response.data.data,
                        errorMessage: false
                    }
                })

            })
            .catch(function (error, response) {
                dispatch({
                    type: GET_PESERTA_ZAKAT_FITRAH_LIST,
                    payload: {
                        data: [],
                        errorMessage: error.message
                    }
                })
            })
}
export const pesertaZakatFitrahList = (id_user, id_peserta, year_hijriah) => {
    return (dispatch) =>
        dispatch({
            type: PESERTA_ZAKAT_FITRAH_LIST,
            payload: {
                data: {
                    id_user: id_user,
                    id_peserta: id_peserta,
                    year_hijriah: year_hijriah
                },
                errorMessage: false
            }
        })
}
export const postZakatFitrah = (data) => {
    return (dispatch) =>
        axios.post('/api/zakatfitrahreceived', data, {
            headers: {
                'X-APITOKEN': localStorage.getItem('token')
            }
        })
            .then(function (response) {
                dispatch({
                    type: POST_ZAKAT_FITRAH,
                    payload: {
                        data: response.data.data,
                        errorMessage: false
                    }
                })

            })
            .catch(function (error) {
                dispatch({
                    type: POST_ZAKAT_FITRAH,
                    payload: {
                        data: [],
                        errorMessage: error.message
                    }
                })
            })

}
export const removePostPesertaZakatFitrahList = () => {
    return (dispatch) =>
        dispatch({
            type: POST_ZAKAT_FITRAH,
            payload: {
                data: false,
                errorMessage: false
            }
        })
}
export const getDetailZakatFitrah = (id) => {
    return (dispatch) =>
        axios.get('/api/zakatfitrahreceived/' + id, {
            headers: {
                'X-APITOKEN': localStorage.getItem('token')
            }
        })
            .then(function (response) {
                dispatch({
                    type: GET_DETAIL_ZAKAT_FITRAH,
                    payload: {
                        data: response.data.data,
                        errorMessage: false
                    }
                })
                return response.data.data;
            })
            .catch(function (error) {
                dispatch({
                    type: GET_DETAIL_ZAKAT_FITRAH,
                    payload: {
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
}
export const updateZakatFitrah = (id, data) => {
    return (dispatch) =>
        axios.put('/api/zakatfitrahreceived/' + id, data, {
            headers: {
                'X-APITOKEN': localStorage.getItem('token')
            }
        })
            .then(function (response) {
                dispatch({
                    type: UPDATE_ZAKAT_FITRAH,
                    payload: {
                        data: response.data.data,
                        errorMessage: false
                    }
                })
            })
            .catch(function (error) {
                dispatch({
                    type: UPDATE_ZAKAT_FITRAH,
                    payload: {
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
}
export const deleteStateUpdateDeleteZakatFitrah = () => {
    return (dispatch) =>
        dispatch({
            type: DELETE_STATE_ZAKAT_FITRAH,
            payload: {
                data: false,
                errorMessage: false
            }
        })
}

export const getZakatFitrahListSent = (year_hijriah) => {
    return (dispatch) =>
        axios.get('/api/zakatfitrahsent?year_hijriah=' + year_hijriah, {
            headers: {
                'X-APITOKEN': localStorage.getItem('token')
            }
        })
            .then(function (response) {
                dispatch({
                    type: GET_ZAKAT_FITRAH_LIST,
                    payload: {
                        data: response.data.data,
                        errorMessage: false
                    }
                })
            })
            .catch(function (error) {
                dispatch({
                    type: GET_ZAKAT_FITRAH_LIST,
                    payload: {
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
}
export const deleteZakatFitrahSent = (id) => {
    return (dispatch) =>
        axios.delete('/api/zakatfitrahsent/' + id, {
            headers: {
                'X-APITOKEN': localStorage.getItem('token')
            }
        })
            .then(function (response) {
                dispatch({
                    type: DELETE_ZAKAT_FITRAH,
                    payload: {
                        data: response.data.data,
                        errorMessage: false
                    }
                })
            })
            .catch(function (error) {
                dispatch({
                    type: DELETE_ZAKAT_FITRAH,
                    payload: {
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
}

export const getPesertaZakatFitrahListSent = (year_hijriah) => {
    return (dispatch) =>
        axios.get('/api/pesertazakatfitrahsent?year_hijriah=' + year_hijriah, {
            headers: {
                'X-APITOKEN': localStorage.getItem('token')
            }
        })
            .then(function (response) {
                dispatch({
                    type: GET_PESERTA_ZAKAT_FITRAH_LIST,
                    payload: {
                        data: response.data.data,
                        errorMessage: false
                    }
                })

            })
            .catch(function (error, response) {
                dispatch({
                    type: GET_PESERTA_ZAKAT_FITRAH_LIST,
                    payload: {
                        data: [],
                        errorMessage: error.message
                    }
                })
            })
}
export const pesertaZakatFitrahListSent = (id_user, id_peserta, year_hijriah) => {
    return (dispatch) =>
        dispatch({
            type: PESERTA_ZAKAT_FITRAH_LIST,
            payload: {
                data: {
                    id_user: id_user,
                    id_peserta: id_peserta,
                    year_hijriah: year_hijriah
                },
                errorMessage: false
            }
        })
}
export const postZakatFitrahSent = (data) => {
    return (dispatch) =>
        axios.post('/api/zakatfitrahsent', data, {
            headers: {
                'X-APITOKEN': localStorage.getItem('token')
            }
        })
            .then(function (response) {
                dispatch({
                    type: POST_ZAKAT_FITRAH,
                    payload: {
                        data: response.data.data,
                        errorMessage: false
                    }
                })

            })
            .catch(function (error) {
                dispatch({
                    type: POST_ZAKAT_FITRAH,
                    payload: {
                        data: [],
                        errorMessage: error.message
                    }
                })
            })

}
export const removePostPesertaZakatFitrahListSent = () => {
    return (dispatch) =>
        dispatch({
            type: POST_ZAKAT_FITRAH,
            payload: {
                data: false,
                errorMessage: false
            }
        })
}
export const getDetailZakatFitrahSent = (id) => {
    return (dispatch) =>
        axios.get('/api/zakatfitrahsent/' + id, {
            headers: {
                'X-APITOKEN': localStorage.getItem('token')
            }
        })
            .then(function (response) {
                dispatch({
                    type: GET_DETAIL_ZAKAT_FITRAH,
                    payload: {
                        data: response.data.data,
                        errorMessage: false
                    }
                })
                return response.data.data;
            })
            .catch(function (error) {
                dispatch({
                    type: GET_DETAIL_ZAKAT_FITRAH,
                    payload: {
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
}
export const updateZakatFitrahSent = (id, data) => {
    return (dispatch) =>
        axios.put('/api/zakatfitrahsent/' + id, data, {
            headers: {
                'X-APITOKEN': localStorage.getItem('token')
            }
        })
            .then(function (response) {
                dispatch({
                    type: UPDATE_ZAKAT_FITRAH,
                    payload: {
                        data: response.data.data,
                        errorMessage: false
                    }
                })
            })
            .catch(function (error) {
                dispatch({
                    type: UPDATE_ZAKAT_FITRAH,
                    payload: {
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
}
export const deleteStateUpdateDeleteZakatFitrahSent = () => {
    return (dispatch) =>
        dispatch({
            type: DELETE_STATE_ZAKAT_FITRAH,
            payload: {
                data: false,
                errorMessage: false
            }
        })
}




export const getCelenganList = (year_hijriah) => {
    return (dispatch) =>
        axios.get('/api/celengan?year_hijriah=' + year_hijriah, {
            headers: {
                'X-APITOKEN': localStorage.getItem('token')
            }
        })
            .then(function (response) {
                dispatch({
                    type: GET_CELENGAN_LIST,
                    payload: {
                        data: response.data.data,
                        errorMessage: false
                    }
                })
            })
            .catch(function (error) {
                dispatch({
                    type: GET_CELENGAN_LIST,
                    payload: {
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
}
export const deleteCelengan = (id) => {
    return (dispatch) =>
        axios.delete('/api/celengan/' + id, {
            headers: {
                'X-APITOKEN': localStorage.getItem('token')
            }
        })
            .then(function (response) {
                dispatch({
                    type: DELETE_CELENGAN,
                    payload: {
                        data: response.data.data,
                        errorMessage: false
                    }
                })
            })
            .catch(function (error) {
                dispatch({
                    type: DELETE_CELENGAN,
                    payload: {
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
}

export const getPesertaCelenganList = (year_hijriah) => {
    return (dispatch) =>
        axios.get('/api/pesertacelengan?year_hijriah=' + year_hijriah, {
            headers: {
                'X-APITOKEN': localStorage.getItem('token')
            }
        })
            .then(function (response) {
                dispatch({
                    type: GET_PESERTA_CELENGAN_LIST,
                    payload: {
                        data: response.data.data,
                        errorMessage: false
                    }
                })

            })
            .catch(function (error, response) {
                dispatch({
                    type: GET_PESERTA_CELENGAN_LIST,
                    payload: {
                        data: [],
                        errorMessage: error.message
                    }
                })
            })
}
export const pesertaCelenganList = (id_user, id_peserta, year_hijriah) => {
    return (dispatch) =>
        dispatch({
            type: PESERTA_CELENGAN_LIST,
            payload: {
                data: {
                    id_user: id_user,
                    id_peserta: id_peserta,
                    year_hijriah: year_hijriah
                },
                errorMessage: false
            }
        })
}
export const postCelengan = (data) => {
    return (dispatch) =>
        axios.post('/api/celengan', data, {
            headers: {
                'X-APITOKEN': localStorage.getItem('token')
            }
        })
            .then(function (response) {
                dispatch({
                    type: POST_CELENGAN,
                    payload: {
                        data: response.data.data,
                        errorMessage: false
                    }
                })

            })
            .catch(function (error) {
                dispatch({
                    type: POST_CELENGAN,
                    payload: {
                        data: [],
                        errorMessage: error.message
                    }
                })
            })

}
export const removePostPesertaCelenganList = () => {
    return (dispatch) =>
        dispatch({
            type: POST_CELENGAN,
            payload: {
                data: false,
                errorMessage: false
            }
        })
}
export const getDetailCelengan = (id) => {
    return (dispatch) =>
        axios.get('/api/celengan/' + id, {
            headers: {
                'X-APITOKEN': localStorage.getItem('token')
            }
        })
            .then(function (response) {
                dispatch({
                    type: GET_DETAIL_CELENGAN,
                    payload: {
                        data: response.data.data,
                        errorMessage: false
                    }
                })

                return response.data.data;
            })
            .catch(function (error) {
                dispatch({
                    type: GET_DETAIL_CELENGAN,
                    payload: {
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
}
export const updateCelengan = (id, data) => {
    return (dispatch) =>
        axios.put('/api/celengan/' + id, data, {
            headers: {
                'X-APITOKEN': localStorage.getItem('token')
            }
        })
            .then(function (response) {
                dispatch({
                    type: UPDATE_CELENGAN,
                    payload: {
                        data: response.data.data,
                        errorMessage: false
                    }
                })
            })
            .catch(function (error) {
                dispatch({
                    type: UPDATE_CELENGAN,
                    payload: {
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
}
export const deleteStateUpdateDeleteCelengan = () => {
    return (dispatch) =>
        dispatch({
            type: DELETE_STATE_CELENGAN,
            payload: {
                data: false,
                errorMessage: false
            }
        })
}