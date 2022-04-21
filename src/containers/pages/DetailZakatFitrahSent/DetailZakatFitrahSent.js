import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import { Breadcrumbs, Grid } from '@material-ui/core'
import { Link, NavLink, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getDetailZakatFitrahSent } from '../../../config/redux/action'
import ProfileZakatFitrah from '../../../components/moleculs/ProfileZakatFitrah'
import AdminTemplate from '../../templates/AdminTemplate'
import ProfileZakatFitrahSent from '../../../components/moleculs/ProfileZakatFitrahSent'


function DetailZakatFitrahSent() {
    const params = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        if (params.id) {
            dispatch(getDetailZakatFitrahSent(params.id))
        }
    }, [dispatch])
    return (
        <AdminTemplate>
            <Container>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <NavLink color="secondary" to="/admin/penerimazakatfitrah">
                                Penerima Zakat Fitrah
                        </NavLink>
                            <NavLink color="secondary" to="/admin/penerimazakatfitrah/lihat/:id">
                                Lihat Penerima Zakat Fitrah
                        </NavLink>
                        </Breadcrumbs>
                    </Grid>
                    <Grid item xs={12}>
                        <ProfileZakatFitrahSent />
                    </Grid>
                </Grid>

            </Container>
        </AdminTemplate>
    )
}

export default DetailZakatFitrahSent
