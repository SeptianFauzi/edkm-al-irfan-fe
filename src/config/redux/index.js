import { combineReducers } from "redux";
import { peserta, user, zakatfitrah, celengan } from './reducer'
export const indexReducer = combineReducers({
    peserta,
    user,
    zakatfitrah,
    celengan
})