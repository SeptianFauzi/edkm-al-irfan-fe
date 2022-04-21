import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import { Breadcrumbs, Grid } from '@material-ui/core'
import { Link, NavLink, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getDetailZakatFitrah } from '../../../config/redux/action'
import ProfileZakatFitrah from '../../../components/moleculs/ProfileZakatFitrah'
import AdminTemplate from '../../templates/AdminTemplate'


function DetailZakatFitrah() {
    const params = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        if (params.id) {
            dispatch(getDetailZakatFitrah(params.id))
        }
    }, [dispatch])
    return (
        <AdminTemplate>
            <Container>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <NavLink color="secondary" to="/admin/zakatfitrah">
                                Peserta
                        </NavLink>
                            <NavLink color="secondary" to="/admin/zakatfitrah/lihat/:id">
                                Lihat Peserta
                        </NavLink>
                        </Breadcrumbs>
                    </Grid>
                    <Grid item xs={12}>
                        <ProfileZakatFitrah />
                    </Grid>
                </Grid>

            </Container>
        </AdminTemplate>
    )
}

export default DetailZakatFitrah
