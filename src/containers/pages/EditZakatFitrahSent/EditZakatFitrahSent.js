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
import { getDetailPeserta, getDetailZakatFitrahSent } from '../../../config/redux/action'
import AdminTemplate from '../../templates/AdminTemplate'
import FormZakatFitrah from '../../../components/moleculs/FormZakatFitrah'
import FormZakatFitrahSent from '../../../components/moleculs/FormZakatFitrahSent'

function EditZakatFitrahSent() {
    const params = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        if (params.id) {
            dispatch(getDetailZakatFitrahSent(params.id))
        }
    }, [dispatch])
    return (
        <AdminTemplate>
            <div>
                <Container>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Breadcrumbs aria-label="breadcrumb">
                                <NavLink color="secondary" to="/admin/zakatfitrah">
                                    Peserta Zakat Fitrah
                        </NavLink>
                                <NavLink color="secondary" to="/admin/zakatfitrah/ubah/:id">
                                    Ubah Peserta Zakat Fitrah
                        </NavLink>
                            </Breadcrumbs>
                        </Grid>
                        <Grid item xs={12}>
                            <FormZakatFitrahSent />
                        </Grid>
                    </Grid>

                </Container>
            </div>
        </AdminTemplate>

    )
}

export default EditZakatFitrahSent
