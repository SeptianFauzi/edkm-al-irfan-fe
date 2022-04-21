import { Box, Breadcrumbs, Button, Card, CardContent, LinearProgress, Container, Grid, Link, Typography, TextField, FormControl, Hidden } from '@material-ui/core';
import { Add, SearchRounded, WarningRounded, WarningSharp } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCelenganList } from '../../../config/redux/action';
import AdminTemplate from '../../templates/AdminTemplate';
import * as yup from "yup";
import moment from 'moment-hijri';
import { useForm } from 'react-hook-form';
import { sizing } from '@material-ui/system';
import { yupResolver } from '@hookform/resolvers/yup';
import TableCelengan from '../../../components/moleculs/TableCelengan';
import { GetCelenganList } from '../../../config/redux/services';
function Celengan(props) {
    const dispatch = useDispatch();
    const state = useSelector(state => state.celengan)
    const year_hijriah = moment().iYear();
    const [yearhijriah, setyearhijriah] = useState(year_hijriah)
    const handleYearHijriah = (e) => {
        setyearhijriah(e.target.value)
    }
    useEffect(() => {
        dispatch(GetCelenganList(yearhijriah));
    }, []);
    const schema = yup.object().shape({
        tahunhijriah: yup.number().typeError('Wajib angka').required(),

    });
    const { register, watch, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });
    return (
        <AdminTemplate>
            <Container maxWidth="xl">
                <Grid item xs={12}>
                    <Box my={2}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <NavLink color="primary" to="/admin/celengan">
                                Celengan Dana Sosial
                            </NavLink>
                        </Breadcrumbs>
                    </Box>
                </Grid>
                <Card style={{ minHeight: '80vh' }}>
                    {state.loadingData || state.loading ? <LinearProgress /> : ''}
                    <CardContent>
                        <Hidden mdDown>
                            <Grid container direction="row" justify="center" alignItems="center">
                                <Grid item xs={12}>
                                    <Typography variant="h5" align="center">Daftar Peserta</Typography>
                                    <Typography variant="h5" align="center">Celengan Dana Sosial</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container direction="row" justify="space-between" alignItems="flex-start">
                                        <Grid item>
                                            <Button color="primary" style={{ paddingBlock: '1.1em' }} variant="contained" disabled={state.loading || state.loadingData}><NavLink to="/admin/celengan/tambah" style={{ color: 'white' }}><Add /></NavLink></Button>
                                        </Grid>
                                        <Grid item>
                                            <Grid direction="column" container justify="flex-end" alignItems="flex-end" style={{ marginBlock: '10px' }}>
                                                <Grid direction="row" container justify="flex-end" alignContent="flex-start" spacing={1}>
                                                    <Grid item>
                                                        <FormControl variant="outlined">
                                                            <TextField
                                                                {...register('tahunhijriah')}
                                                                label="Tahun Hijriah"
                                                                name='tahunhijriah'
                                                                variant="outlined"
                                                                value={yearhijriah}
                                                                onChangeCapture={handleYearHijriah}
                                                                disabled={state.loading} />
                                                            <Typography variant="caption" style={{ color: 'red' }}>{errors.tahunhijriah?.message}</Typography>
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item>
                                                        <Button style={{ paddingBlock: '1.1em' }} variant="contained" color="primary" disabled={state.loading || errors.tahunhijriah} onClick={() => dispatch(GetCelenganList(yearhijriah))}><SearchRounded></SearchRounded></Button>
                                                    </Grid>
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            {!state.loading && state.celengan ? <TableCelengan dataRow={state.celengan} /> : <TableCelengan dataRow={[]} />}
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
        </AdminTemplate >
    )
}

export default Celengan
