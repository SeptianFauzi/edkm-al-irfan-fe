import React, { useEffect, useState } from 'react'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormLabel from '@material-ui/core/FormLabel'
import TextField from '@material-ui/core/TextField'
import FormPeserta from '../../../components/moleculs/FormPeserta'
import Container from '@material-ui/core/Container'
import { Box, Breadcrumbs, Button, CardContent, Card, LinearProgress, CircularProgress, Grid, Hidden, Typography } from '@material-ui/core'
import { Link, NavLink } from 'react-router-dom'
import AdminTemplate from '../../templates/AdminTemplate'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment-hijri'
import { getpesertaQurbanSent, getpesertaQurbanSentSent, getZakatFitrahList, pesertaQurbanSent, pesertaQurbanSentSent } from '../../../config/redux/action'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import TableTambahQurbanSent from '../../../components/moleculs/TableTambahQurbanSent'
import { GetPesertaQurbanSentList } from '../../../config/redux/services'
import { SearchRounded, WarningRounded } from '@material-ui/icons'
import TableQurbanSent from '../../../components/moleculs/TableQurbanSent'
function AddQurbanSent() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.qurbanSent)
    const year_hijriah = moment().iYear();
    const [yearhijriah, setyearhijriah] = useState(year_hijriah)
    const handleYearHijriah = (e) => {
        setyearhijriah(e.target.value)
    }

    useEffect(() => {
        dispatch(GetPesertaQurbanSentList(yearhijriah));
    }, []);
    const schema = yup.object().shape({
        tahunhijriah: yup.number().typeError('Wajib angka').required(),

    });
    const { register, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });
    return (
        <AdminTemplate>
            <Container fixed maxWidth="xl">
                <Grid item xs={12} style={{ marginBlock: '10px' }}>
                    <Box my={2}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <NavLink color="secondary" to={"/admin/penerimazakatfitrah"}>
                                Penerima Qurban
                            </NavLink>
                            <NavLink color="secondary" to={"/admin/penerimazakatfitrah/tambah"}>
                                Tambah Peserta Penerima Qurban
                            </NavLink>
                        </Breadcrumbs>
                    </Box>
                </Grid>
                <Card variant="outlined" style={{ minHeight: '80vh' }}>
                    {state.loadingData || state.loading ? <LinearProgress /> : ''}
                    <CardContent>
                        <Grid container justify="center" direction="row">
                            <Typography variant="h5" align="center">Tambah Peserta Penerima Qurban</Typography>
                        </Grid>
                        <Hidden smDown>
                            <Grid direction="column" container justify="flex-end" alignItems="flex-end" style={{ marginBlock: '10px' }}>
                                <Grid direction="row" container justify="flex-end" alignContent="flex-end" spacing={2}>
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
                                    <Grid item >
                                        <Button style={{ paddingBlock: '1.1em' }} variant="contained" color="primary" disabled={state.loading || errors.tahunhijriah} onClick={() => dispatch(GetPesertaQurbanSentList(yearhijriah))}><SearchRounded></SearchRounded></Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                {!state.loading && state.pesertaQurbanSent ? <TableTambahQurbanSent dataRow={state.pesertaQurbanSent} yearHijriah={yearhijriah} /> : <TableTambahQurbanSent dataRow={[]} yearHijriah={yearhijriah} />}
                            </Grid>
                        </Hidden>
                        <Hidden mdUp>
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

export default AddQurbanSent
