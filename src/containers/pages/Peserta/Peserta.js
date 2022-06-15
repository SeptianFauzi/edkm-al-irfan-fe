import { Box, Breadcrumbs, Button, Card, CardContent, CircularProgress, Container, Grid, Hidden, LinearProgress, Link, Typography } from '@material-ui/core';
import { Add, WarningRounded } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import TablePeserta from '../../../components/moleculs/TablePeserta'
import { GetPesertaList } from '../../../config/redux/services';
// import { getPesertaList } from '../../../config/redux/action';
import AdminTemplate from '../../templates/AdminTemplate';

function Peserta(props) {
    const dispatch = useDispatch();
    const state = useSelector(state => state.peserta)
    useEffect(() => {
        dispatch(GetPesertaList());
    }, []);
    return (
        < div >
            <AdminTemplate>
                <Container maxWidth="xl">
                    <Grid item xs={12}>
                        <Box my={2}>
                            <Breadcrumbs aria-label="breadcrumb">
                                <Link color="primary" href="/admin/peserta">
                                    Peserta
                                </Link>
                            </Breadcrumbs>
                        </Box>
                    </Grid>
                    <Card variant="outlined" style={{ minHeight: '80vh' }}>
                        {state.loadingData || state.loading ? <LinearProgress /> : ''}
                        <CardContent>
                            <Hidden mdDown>
                                <Grid container direction="row" justify="center" alignItems="center">
                                    <Grid item xs={12}>
                                        <Box>
                                            <Typography variant="h5" align="center" mb={10}>Daftar Peserta</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box my={2}>
                                            <Button color="primary" variant="contained" disabled={state.loading || state.loadingDelete}><NavLink to="/admin/peserta/tambah" style={{ color: 'white' }}><Add /></NavLink></Button>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        {!state.loading && state.peserta ? < TablePeserta dataRow={state.peserta} /> : < TablePeserta dataRow={[]} />}
                                    </Grid>
                                </Grid>
                            </Hidden>
                            <Hidden lgUp>
                                <Grid container
                                    direction="column"
                                    justify="center"
                                    alignItems="center"
                                    style={{ marginBlock: '20%' }}
                                >
                                    {/* <Grid xs={12} md={12} lg={12}> */}
                                    <WarningRounded style={{ fontSize: 100 }} color="error" />
                                    <Typography variant="h5" color="inherit" style={{ fontWeight: 600 }}>Tabel tidak dapat ditampilkan</Typography>
                                    <Typography variant="h5" color="inherit" style={{ fontWeight: 600 }}>Silahkan Buka Browser Pada Desktop Anda</Typography>
                                    {/* </Grid> */}
                                </Grid>
                            </Hidden>
                        </CardContent>
                    </Card>
                </Container>
            </AdminTemplate>
        </div >
    )
}

export default Peserta
