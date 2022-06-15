import React, { useEffect, useState } from 'react'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormLabel from '@material-ui/core/FormLabel'
import TextField from '@material-ui/core/TextField'
import FormPeserta from '../../../components/moleculs/FormPeserta'
import Container from '@material-ui/core/Container'
import { Box, Breadcrumbs, Grid, Link } from '@material-ui/core'
import { NavLink, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import AdminTemplate from '../../templates/AdminTemplate'


function EditPeserta() {
    const params = useParams();
    return (
        <AdminTemplate>
            <div>
                <Container>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box my={2}>
                                <Breadcrumbs aria-label="breadcrumb">
                                    <Link>
                                        <NavLink to={'/admin/peserta'} style={{ color: '#737373', textDecoration: 'none' }}>
                                            Peserta
                                        </NavLink>
                                    </Link>
                                    <Link> <NavLink to={"/admin/peserta/ubah/" + params.id} style={{ color: '#A8DBCC', textDecoration: 'none' }}>
                                        Ubah Peserta
                                    </NavLink> </Link>
                                </Breadcrumbs>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <FormPeserta />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </AdminTemplate >

    )
}

export default EditPeserta
