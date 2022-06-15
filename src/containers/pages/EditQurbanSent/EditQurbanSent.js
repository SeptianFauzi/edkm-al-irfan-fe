import React, { useEffect, useState } from 'react'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormLabel from '@material-ui/core/FormLabel'
import TextField from '@material-ui/core/TextField'
import FormPeserta from '../../../components/moleculs/FormPeserta'
import Container from '@material-ui/core/Container'
import { Breadcrumbs, Grid } from '@material-ui/core'
import { Link, NavLink, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getDetailPeserta, getDetailQurbanSent } from '../../../config/redux/action'
import AdminTemplate from '../../templates/AdminTemplate'
import FormQurbanSent from '../../../components/moleculs/FormQurbanSent'
import { GetDetailQurbanSent } from '../../../config/redux/services'

function EditQurbanSent() {
    const params = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        if (params.id) {
            dispatch(GetDetailQurbanSent(params.id))
        }
    }, [])
    return (
        <AdminTemplate>
            <div>
                <Container>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Breadcrumbs aria-label="breadcrumb">
                                <NavLink color="secondary" to="/admin/qurbansent">
                                    Peserta Penerima Qurban
                                </NavLink>
                                <NavLink color="secondary" to="/admin/qurbansent/ubah/:id">
                                    Ubah Peserta Penerima Qurban
                                </NavLink>
                            </Breadcrumbs>
                        </Grid>
                        <Grid item xs={12}>
                            <FormQurbanSent />
                        </Grid>
                    </Grid>

                </Container>
            </div>
        </AdminTemplate>

    )
}

export default EditQurbanSent
