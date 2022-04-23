import { Grid, FormHelperText, RadioGroup, FormControlLabel, Radio, Box, Typography, TextareaAutosize, Button, Card, CardContent, CircularProgress, Divider, LinearProgress } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import QRCode from 'react-qr-code';
import DataNotFound from './DataNotFound';
import moment from 'moment';
import { Skeleton } from "@material-ui/lab";
import { GetDetailPeserta } from '../../config/redux/services';
function ProfilePeserta(props) {
    const dispatch = useDispatch();
    const params = useParams();
    const state = useSelector(state => state.peserta)
    useEffect(() => {
        if (params.id) {
            dispatch(GetDetailPeserta(params.id))
        }
    }, [])

    if (state.peserta.length <= 0 || state.error) {
        return (
            <DataNotFound />
        )
    } else {
        return (
            <div>
                < Card variant="outlined" >
                    {state.loading || !state.peserta ? <LinearProgress /> : ''}
                    <CardContent style={{ padding: 0, margin: 0 }}>
                        <Grid container direction="row" justify="center" alignItems="center">
                            <Grid item xs={12} sm={6} md={6} lg={6} >
                                {state.loading || !state.peserta ? <Skeleton variant="rect" height={430} /> :
                                    <Grid container direction="row" justify="flex-start" alignItems="center" style={{ background: '#A8DBCC', padding: '5%', minHeight: '350px' }}>
                                        <Grid item xs={12}>
                                            <Typography variant="h3" style={{ color: 'white' }}>{state.peserta[0].name}</Typography>
                                            <Divider />
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={4} lg={4} >
                                            <Typography variant="h6" >ID</Typography>
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={8} lg={8}>
                                            <Typography variant="h6" color="initial">: {state.peserta[0].id.toString()}</Typography>
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={4} lg={4}>
                                            <Typography variant="body1" color="initial">Apakah Seorang Warga?</Typography>
                                        </Grid>

                                        <Grid item xs={6} sm={6} md={8} lg={8}>
                                            <Typography variant="body1" color="initial">: {state.peserta[0].is_person ? 'Ya' : 'Tidak'}</Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12} lg={12}>
                                            <Divider />
                                            <Typography variant="h6" style={{ color: 'white', padding: "1% 0  1% 0" }}>Pelayanan Yang Di Ikuti</Typography>
                                            <Divider />
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={4} lg={4}>
                                            <Typography variant="body1" color="initial">Celengan</Typography>
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={8} lg={8}>
                                            <Typography variant="body1" color="initial">: {state.peserta[0].service_money ? 'Ya' : 'Tidak'}</Typography>
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={4} lg={4}>
                                            <Typography variant="body1" color="initial">Zakat Fitrah</Typography>
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={8} lg={8}>
                                            <Typography variant="body1" color="initial">: {state.peserta[0].service_zakat_received ? 'Ya' : 'Tidak'}</Typography>
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={4} lg={4}>
                                            <Typography variant="body1" color="initial">Jatah Zakat Fitrah</Typography>
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={8} lg={8}>
                                            <Typography variant="body1" color="initial">: {state.peserta[0].service_zakat_sent ? 'Ya' : 'Tidak'}</Typography>
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={4} lg={4}>
                                            <Typography variant="body1" color="initial">Qurban</Typography>
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={8} lg={8}>
                                            <Typography variant="body1" color="initial">: {state.peserta[0].service_qurban_received ? 'Ya' : 'Tidak'}</Typography>
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={4} lg={4}>
                                            <Typography variant="body1" color="initial">Penerima Qurban</Typography>
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={8} lg={8}>
                                            <Typography variant="body1" color="initial">: {state.peserta[0].service_qurban_sent ? 'Ya' : 'Tidak'}</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Divider />
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={4} lg={4}>
                                            <Typography variant="body1" color="initial">No Telepon</Typography>
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={8} lg={8}>
                                            <Typography variant="body1" color="initial">: {state.peserta[0].phone}</Typography>
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={4} lg={4}>
                                            <Typography variant="body1" color="initial">Catatan</Typography>
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={8} lg={8}>
                                            <Typography variant="body1" color="initial">: {state.peserta[0].notes}</Typography>
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={4} lg={4}>
                                            <Typography variant="body1" color="initial">Status Peserta</Typography>
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={8} lg={8}>
                                            <Typography variant="body1" color="initial">: {state.peserta[0].status ? 'Aktif' : 'Tidak Aktif'}</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="body1" align="right" color="initial">{moment(state.peserta[0].created_at).locale('id').format('LLLL')}</Typography>
                                        </Grid>
                                    </Grid>
                                }
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6} style={{ marginBlock: '2em' }}>
                                <Grid container direction="column" justify="center" alignItems="center">
                                    <Typography variant="h6" color="initial" style={{ marginBottom: '5%' }}>QR Code Peserta</Typography>
                                    {state.loading || !state.peserta ? <Skeleton variant="rect" height={250} width={250} /> :
                                        <QRCode value={state.peserta[0].id_peserta.toString()} />
                                    }
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card >
            </div >
        )
    }
}

export default ProfilePeserta
