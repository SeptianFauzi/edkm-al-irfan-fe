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
import { getDetailPeserta, getDetailCelengan } from '../../../config/redux/action'
import AdminTemplate from '../../templates/AdminTemplate'
import FormZakatFitrah from '../../../components/moleculs/FormZakatFitrah'
import FormCelengan from '../../../components/moleculs/FormCelengan'

function EditCelengan() {
    const params = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        if (params.id) {
            dispatch(getDetailCelengan(params.id))
        }
    }, [dispatch])
    return (
        <AdminTemplate>
            <div>
                <Container>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Breadcrumbs aria-label="breadcrumb">
                                <NavLink color="secondary" to="/admin/celengan">
                                    Peserta Celengan Dana Sosial
                        </NavLink>
                                <NavLink color="secondary" to="/admin/celengan/ubah/:id">
                                    Ubah Peserta Celengan Dana Sosial
                        </NavLink>
                            </Breadcrumbs>
                        </Grid>
                        <Grid item xs={12}>
                            <FormCelengan />
                        </Grid>
                    </Grid>

                </Container>
            </div>
        </AdminTemplate>

    )
}

export default EditCelengan
