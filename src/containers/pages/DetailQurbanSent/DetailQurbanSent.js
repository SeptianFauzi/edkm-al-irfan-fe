import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import { Breadcrumbs, Grid } from '@material-ui/core'
import { NavLink, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import ProfileQurbanSent from '../../../components/moleculs/ProfileQurbanSent'
import AdminTemplate from '../../templates/AdminTemplate'
import { GetDetailQurbanSent } from '../../../config/redux/services'


function DetailQurbanSent() {
    const params = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        if (params.id) {
            dispatch(GetDetailQurbanSent(params.id))
        }
    }, [])
    return (
        <AdminTemplate>
            <Container>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <NavLink color="secondary" to="/admin/qurbansent">
                                Penerima Qurban
                            </NavLink>
                            <NavLink color="secondary" to="/admin/qurbansent/lihat/:id">
                                Lihat Penerima Qurban
                            </NavLink>
                        </Breadcrumbs>
                    </Grid>
                    <Grid item xs={12}>
                        <ProfileQurbanSent />
                    </Grid>
                </Grid>

            </Container>
        </AdminTemplate>
    )
}

export default DetailQurbanSent
