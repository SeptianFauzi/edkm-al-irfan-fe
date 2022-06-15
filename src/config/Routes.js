import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import { AddCelengan, AddPeserta, AddZakatFitrah, AddZakatFitrahSent, Celengan, Dashboard, DetailPeserta, DetailZakatFitrah, DetailZakatFitrahSent, EditPeserta, EditZakatFitrah, EditZakatFitrahSent, ErrorPage, Peserta, ZakatFitrah, ZakatFitrahSent } from '../containers/pages'
import AdminTemplate from '../containers/templates/AdminTemplate'
import LoginTemplate from '../containers/templates/LoginTemplate'
// import { PublicRoute, PrivateRoute } from "react-private-public-route";
import { useSelector } from 'react-redux'
import PrivateRoute from '../utils/PrivateRoute'
import PublicRoute from '../utils/PublicRoute'
import DetailCelengan from '../containers/pages/DetailCelengan/DetailCelengan'
import EditCelengan from '../containers/pages/EditCelengan/EditCelengan'
import QurbanSent from '../containers/pages/QurbanSent/QurbanSent'
import AddQurbanSent from '../containers/pages/AddQurbanSent/AddQurbanSent'
import EditQurbanSent from '../containers/pages/EditQurbanSent/EditQurbanSent'
import DetailQurbanSent from '../containers/pages/DetailQurbanSent/DetailQurbanSent'
function Routes() {
    return (
        <Router>
            <Switch>
                <PrivateRoute path="/admin/zakatfitrah/tambah" component={AddZakatFitrah} >
                </PrivateRoute>
                <PrivateRoute path="/admin/zakatfitrah/lihat/:id" component={DetailZakatFitrah} >
                </PrivateRoute>
                <PrivateRoute path="/admin/zakatfitrah/ubah/:id" component={EditZakatFitrah} >
                </PrivateRoute>
                <PrivateRoute
                    path="/admin/zakatfitrah"
                    component={ZakatFitrah}>
                </PrivateRoute>
                <PrivateRoute path="/admin/penerimazakatfitrah/tambah" component={AddZakatFitrahSent} >
                </PrivateRoute>
                <PrivateRoute path="/admin/penerimazakatfitrah/lihat/:id" component={DetailZakatFitrahSent} >
                </PrivateRoute>
                <PrivateRoute path="/admin/penerimazakatfitrah/ubah/:id" component={EditZakatFitrahSent} >
                </PrivateRoute>
                <PrivateRoute
                    path="/admin/penerimazakatfitrah"
                    component={ZakatFitrahSent}>
                </PrivateRoute>
                <PrivateRoute path="/admin/celengan/tambah" component={AddCelengan} >
                </PrivateRoute>
                <PrivateRoute path="/admin/celengan/lihat/:id" component={DetailCelengan} >
                </PrivateRoute>
                <PrivateRoute path="/admin/celengan/ubah/:id" component={EditCelengan} >
                </PrivateRoute>
                <PrivateRoute
                    path="/admin/celengan"
                    component={Celengan}>
                </PrivateRoute>
                <PrivateRoute path="/admin/peserta/tambah" component={AddPeserta} >
                </PrivateRoute>
                <PrivateRoute path="/admin/peserta/ubah/:id" component={EditPeserta} >
                </PrivateRoute>
                <PrivateRoute path="/admin/peserta/lihat/:id" component={DetailPeserta}>
                </PrivateRoute>
                <PrivateRoute
                    path="/admin/peserta"
                    component={Peserta}>
                </PrivateRoute>

                <PrivateRoute path="/admin/qurbansent/tambah" component={AddQurbanSent} >
                </PrivateRoute>
                <PrivateRoute path="/admin/qurbansent/lihat/:id" component={DetailQurbanSent} >
                </PrivateRoute>
                <PrivateRoute path="/admin/qurbansent/ubah/:id" component={EditQurbanSent} >
                </PrivateRoute>
                <PrivateRoute
                    path="/admin/qurbansent"
                    component={QurbanSent}>
                </PrivateRoute>
                <PrivateRoute
                    path="/admin/dashboard"
                    component={Dashboard}>
                </PrivateRoute>
                <PublicRoute restricted={false}
                    path="/" component={LoginTemplate}>
                </PublicRoute>
                <PublicRoute path="*">
                    <ErrorPage />
                </PublicRoute>
            </Switch>
        </Router >
    )
}

export default Routes
