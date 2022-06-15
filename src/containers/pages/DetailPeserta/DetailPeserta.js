import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import { Box, Breadcrumbs, Grid } from '@material-ui/core'
import { Link, NavLink, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import ProfilePeserta from '../../../components/moleculs/ProfilePeserta'
import AdminTemplate from '../../templates/AdminTemplate'
import { GetDetailPeserta } from '../../../config/redux/services'


function DetailPeserta() {
    const params = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        if (params.id) {
            dispatch(GetDetailPeserta(params.id))
        }
    }, [])
    return (
        <AdminTemplate>
            <Container>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Box my={2}>
                            <Breadcrumbs aria-label="breadcrumb">
                                <Link color="inherit">
                                    <NavLink to={'/admin/peserta'} style={{ color: 'inherit', textDecoration: 'none' }}>
                                        Peserta
                                    </NavLink>
                                </Link>
                                <Link>
                                    <NavLink to={'/admin/peserta/lihat/' + params.id} style={{ color: '#A8DBCC', textDecoration: 'none' }}>
                                        Lihat Peserta
                                    </NavLink>
                                </Link>
                            </Breadcrumbs>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <ProfilePeserta />
                    </Grid>
                </Grid>

            </Container>
        </AdminTemplate >
    )
}

export default DetailPeserta
