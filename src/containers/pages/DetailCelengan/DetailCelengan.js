import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import { Link, Box, Breadcrumbs, Grid } from '@material-ui/core'
import { NavLink, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getDetailCelengan } from '../../../config/redux/action'
import ProfileZakatFitrah from '../../../components/moleculs/ProfileZakatFitrah'
import AdminTemplate from '../../templates/AdminTemplate'
import ProfileCelengan from '../../../components/moleculs/ProfileCelengan'
import { GetDetailCelengan } from '../../../config/redux/services'


function DetailCelengan() {
    const params = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        if (params.id) {
            dispatch(GetDetailCelengan(params.id))
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
                                    <NavLink to={'/admin/celengan'} style={{ color: 'inherit', textDecoration: 'none' }}>
                                        Celengan Dana Sosial
                                    </NavLink>
                                </Link>
                                <Link>
                                    <NavLink to={'/admin/celengan/lihat/' + params.id} style={{ color: '#A8DBCC', textDecoration: 'none' }}>
                                        Lihat Celengan Dana Sosial
                                    </NavLink>
                                </Link>
                            </Breadcrumbs>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <ProfileCelengan />
                    </Grid>
                </Grid>

            </Container>
        </AdminTemplate>
    )
}

export default DetailCelengan
