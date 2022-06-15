import { Grid, Typography, Card, CardContent, Divider, LinearProgress } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import QRCode from 'react-qr-code';
import DataNotFound from './DataNotFound';
import { GetDetailCelengan } from '../../config/redux/services';
import { Skeleton } from "@material-ui/lab";
function ProfileCelengan(props) {
    const dispatch = useDispatch();
    const params = useParams();
    const state = useSelector(state => state.celengan)
    useEffect(() => {
        if (params.id) {
            dispatch(GetDetailCelengan(params.id))
        }
    }, [])

    if (state.celengan.length <= 0 || state.error) {
        return (
            <DataNotFound />
        )
    }
    else {
        return (
            < Card variant="outlined" >
                {state.loading || !state.celengan ? <LinearProgress /> : ''}
                <CardContent style={{ padding: 0, margin: 0 }}>
                    <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            {state.loading || !state.celengan ? <Skeleton variant="rect" height={445} /> :
                                <Grid container direction="row" justify="flex-start" alignItems="flex-start" style={{ background: '#A8DBCC', padding: '5%', minHeight: '350px' }} spacing={1}>
                                    <Grid item xs={12}>
                                        <Typography variant="h3" style={{ color: 'white' }}>{state.celengan[0].id_peserta_peserta.name}</Typography>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="h6" >ID</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="h6" color="initial">: {state.celengan[0].id_peserta.toString()}</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">Tahun</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">: {state.celengan[0].year_hijriah.toString()} H</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">Jumlah Uang</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">: Rp. {state.celengan[0].amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">Status Celengan Dikumpulkan</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">: {state.celengan[0].is_money_received ? 'Sudah' : 'Belum'}</Typography>
                                    </Grid>

                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">Tanggal Dikumpulkan</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">: {state.celengan[0].date_money_received}</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">Panitia Yang Mengumpulkan</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">: {state.celengan[0].id_user_money_received_users ? state.celengan[0].id_user_money_received_users.name : ''}</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">Tanggal Menambahkan Peserta</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">: {state.celengan[0].created_at}</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">Panitia Menambahkan Peserta</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">: {state.celengan[0].id_user_service_money ? state.celengan[0].id_user_service_money.name : ''}</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">Tanggal Diubah</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">: {state.celengan[0].updated_at}</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">Panitia Mengubah Peserta</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">: {state.celengan[0].id_user_amount_updated_users ? state.celengan[0].id_user_amount_updated_users.name : ''}</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">Status Celengan Diberikan</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">: {state.celengan[0].is_money_box_sent ? 'Sudah' : 'Belum'}</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">Tanggal Diberikan</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">: {state.celengan[0].date_money_box_sent}</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">Catatan</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">: {state.celengan[0].notes ? state.celengan[0].notes : ''}</Typography>
                                    </Grid>
                                </Grid>
                            }
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6} style={{ marginBlock: '2em' }}>
                            <Grid container direction="column" justify="center" alignItems="center">
                                <Typography variant="h6" color="initial" style={{ marginBottom: '5%' }}>QR Code Peserta</Typography>
                                {state.loading || !state.celengan ? <Skeleton variant="rect" height={250} width={250} /> :
                                    <QRCode value={state.celengan[0].id_peserta.toString()} />
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card >
        )
    }
}

export default ProfileCelengan
