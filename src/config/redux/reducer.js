import { GET_PESERTA_LIST, POST_PESERTA, GET_DETAIL_PESERTA, UPDATE_PESERTA, DELETE_PESERTA, LOGIN_USER, GET_ZAKAT_FITRAH_LIST, GET_PESERTA_ZAKAT_FITRAH_LIST, PESERTA_ZAKAT_FITRAH_LIST, POST_ZAKAT_FITRAH, DELETE_ZAKAT_FITRAH, GET_DETAIL_ZAKAT_FITRAH, UPDATE_ZAKAT_FITRAH, DELETE_STATE_ZAKAT_FITRAH, DELETE_STATE_PESERTA, GET_CELENGAN_LIST, POST_CELENGAN, GET_DETAIL_CELENGAN, DELETE_CELENGAN, DELETE_STATE_CELENGAN, UPDATE_CELENGAN, GET_PESERTA_CELENGAN_LIST, PESERTA_CELENGAN_LIST } from "./action";
const initialStatePeserta = {
    getPesertaList: false,
    errorPesertaList: false,
    postPeserta: false,
    errorPostPeserta: false,
    getDetailPeserta: false,
    errorGetDetailPeserta: false,
    updatePeserta: false,
    errorUpdatePeserta: false,
    deletePeserta: false,
    errorDeletePeserta: false,
    postPesertaZakatFitrahList: false,
    errorPesertaZakatFitrahList: false,
    postPesertaCelenganList: false,
    errorPesertaCelenganList: false
}
const initialStateUser = {
    getUserList: false,
    errorUserList: false,
    postUser: false,
    errorPostUser: false,
    getDetailUser: false,
    errorGetDetailUser: false,
    updateUser: false,
    errorUpdateUser: false,
    deleteUser: false,
    errorDeleteUser: false,
    loginUser: false,
    errorLoginUser: false
}
const initialStateZakatFitrah = {
    getZakatFitrahList: false,
    errorZakatFitrahList: false,
    postZakatFitrahList: false,
    errorPostZakatFitrahList: false,
    getDetailZakatFitrah: false,
    errorGetDetailZakatFitrah: false,
    updateZakatFitrah: false,
    errorUpdateZakatFitrah: false,
    deleteZakatFitrah: false,
    errorDeleteZakatFitrah: false
}
const initialStateCelengan = {
    getCelenganList: false,
    errorCelenganList: false,
    postCelenganList: false,
    errorPostCelenganList: false,
    getDetailCelengan: false,
    errorGetDetailCelengan: false,
    updateCelengan: false,
    errorUpdateCelengan: false,
    deleteCelengan: false,
    errorDeleteCelengan: false
}
export const peserta = (state = initialStatePeserta, { type, payload }) => {
    switch (type) {
        case GET_PESERTA_LIST:
            return { ...state, getPesertaList: payload.data, errorPesertaList: payload.errorMessage }
            break;
        case POST_PESERTA:
            return { ...state, postPeserta: payload.data, errorPostPeserta: payload.errorMessage }
            break;
        case GET_DETAIL_PESERTA:
            return { ...state, getDetailPeserta: payload.data, errorGetDetailPeserta: payload.errorMessage }
        case UPDATE_PESERTA:
            return { ...state, updatePeserta: payload.data, errorUpdatePeserta: payload.errorMessage }
            break;
        case DELETE_PESERTA:
            return { ...state, deletePeserta: payload.data, errorDeletePeserta: payload.errorMessage }
            break;
        case DELETE_STATE_PESERTA:
            return { ...state, postPeserta: payload.data, errorPostPeserta: payload.errorMessage, updatePeserta: payload.data, errorUpdatePeserta: payload.errorMessage }
            break;
        case GET_PESERTA_ZAKAT_FITRAH_LIST:
            return { ...state, getPesertaList: payload.data, errorPesertaList: payload.errorMessage }
            break;
        case PESERTA_ZAKAT_FITRAH_LIST:
            return { ...state, postPesertaZakatFitrahList: payload.data, errorPesertaZakatFitrahList: payload.errorMessage }
        case GET_PESERTA_CELENGAN_LIST:
            return { ...state, getPesertaList: payload.data, errorPesertaList: payload.errorMessage }
            break;
        case PESERTA_CELENGAN_LIST:
            return { ...state, postPesertaCelenganList: payload.data, errorPesertaCelenganList: payload.errorMessage }
            break;
        default:
            return state
    }
}
export const user = (state = initialStateUser, { type, payload }) => {
    switch (type) {
        case LOGIN_USER:
            return { ...state, loginUser: payload.data, errorLoginUser: payload.errorMessage }
            break;
        // case POST_PESERTA:
        //     return { ...state, postPeserta: payload.data, errorPostPeserta: payload.errorMessage }
        //     break;
        // case GET_DETAIL_PESERTA:
        //     return { ...state, getDetailPeserta: payload.data, errorGetDetailPeserta: payload.errorMessage }
        // case UPDATE_PESERTA:
        //     return { ...state, updatePeserta: payload.data, errorUpdatePeserta: payload.errorMessage }
        //     break;
        // case DELETE_PESERTA:
        //     return { ...state, deletePeserta: payload.data, errorDeletePeserta: payload.errorMessage }
        //     break;
        default:
            return state
    }
}
export const zakatfitrah = (state = initialStateZakatFitrah, { type, payload }) => {
    switch (type) {
        case GET_ZAKAT_FITRAH_LIST:
            return { ...state, getZakatFitrahList: payload.data, errorZakatFitrahList: payload.errorMessage }
            break;
        case POST_ZAKAT_FITRAH:
            return { ...state, postZakatFitrahList: payload.data, errorPostZakatFitrahList: payload.errorMessage }
            break;
        case GET_DETAIL_ZAKAT_FITRAH:
            return { ...state, getDetailZakatFitrah: payload.data, errorGetDetailZakatFitrah: payload.errorMessage }
        case UPDATE_ZAKAT_FITRAH:
            return { ...state, updateZakatFitrah: payload.data, errorUpdateZakatFitrah: payload.errorMessage }
            break;
        case DELETE_STATE_ZAKAT_FITRAH:
            return { ...state, updateZakatFitrah: payload.data, deleteZakatFitrah: payload.data }
            break;
        case DELETE_ZAKAT_FITRAH:
            return { ...state, deleteZakatFitrah: payload.data, errorDeleteZakatFitrah: payload.errorMessage }
            break;
        default:
            return state
    }
}
export const celengan = (state = initialStateCelengan, { type, payload }) => {
    switch (type) {
        case GET_CELENGAN_LIST:
            return { ...state, getCelenganList: payload.data, errorCelenganList: payload.errorMessage }
            break;
        case POST_CELENGAN:
            return { ...state, postCelenganList: payload.data, errorPostCelenganList: payload.errorMessage }
            break;
        case GET_DETAIL_CELENGAN:
            return { ...state, getDetailCelengan: payload.data, errorGetDetailCelengan: payload.errorMessage }
        case UPDATE_CELENGAN:
            return { ...state, updateCelengan: payload.data, errorUpdateCelengan: payload.errorMessage }
            break;
        case DELETE_STATE_CELENGAN:
            return { ...state, updateCelengan: payload.data, deleteCelengan: payload.data }
            break;
        case DELETE_CELENGAN:
            return { ...state, deleteCelengan: payload.data, errorDeleteCelengan: payload.errorMessage }
            break;
        default:
            return state
    }
}