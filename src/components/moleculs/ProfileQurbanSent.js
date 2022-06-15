import { FormControl, FormLabel, LinearProgress, TextField, Container, Grid, FormHelperText, RadioGroup, FormControlLabel, Radio, Box, Typography, TextareaAutosize, Button, Card, CardContent, CircularProgress, Divider } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { connect, useDispatch, useSelector } from 'react-redux';
import { qurbanSent, qurbanSentSent, postPeserta, updatePeserta } from '../../config/redux/action';
import swal from 'sweetalert';
import { useHistory, useParams } from 'react-router';
import QRCode from 'react-qr-code';
import DataNotFound from './DataNotFound';
import moment from 'moment'
import { GetDetailQurbanSent } from '../../config/redux/services';
import { Skeleton } from '@material-ui/lab';
function ProfileQurbanSent(props) {
    const dispatch = useDispatch();
    const params = useParams();
    const state = useSelector(state => state.qurbanSent);
    useEffect(() => {
        if (params.id) {
            dispatch(GetDetailQurbanSent(params.id))
        }
    }, [])

    if (state.qurbanSent.length <= 0 || state.error) {
        return (
            <DataNotFound />
        )
    } else {
        return (
            < Card variant="outlined" >
                {state.loading || !state.qurbanSent ? <LinearProgress /> : ''}
                <CardContent style={{ padding: 0, margin: 0 }}>
                    <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            {state.loading || !state.qurbanSent ? <Skeleton variant="rect" height={380} /> :
                                <Grid container direction="row" justify="flex-start" alignItems="center" style={{ background: '#A8DBCC', padding: '5%', minHeight: '350px' }}>
                                    <Grid item xs={12}>
                                        <Typography variant="h3" style={{ color: 'white' }}>{state.qurbanSent[0].id_peserta_peserta.name}</Typography>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="h6" >ID</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="h6" color="initial">: {state.qurbanSent[0].id_peserta.toString()}</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">Tahun</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">: {state.qurbanSent[0].year_hijriah.toString()} H</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">Jatah</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">: {state.qurbanSent[0].amount_sent} {state.qurbanSent[0].amount_type} </Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">Status Qurban Diberikan</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">: {state.qurbanSent[0].is_qurban_sent ? 'Sudah' : 'Belum'}</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">Tanggal Diberikan</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">: {state.qurbanSent[0].date_qurban_sent}</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">Panitia Yang Memberikan</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">: {state.qurbanSent[0].id_user_qurban_sent_users ? state.qurbanSent[0].id_user_qurban_sent_users.name : ''}</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">Tanggal Menambahkan Peserta</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">: {state.qurbanSent[0].created_at}</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">Panitia Menambahkan Peserta</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">: {state.qurbanSent[0].id_user_qurban_sent_users ? state.qurbanSent[0].id_user_qurban_sent_users.name : ''}</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">Tanggal Diubah</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">: {state.qurbanSent[0].updated_at}</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">Panitia Mengubah Peserta</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography variant="body1" color="initial">: {state.qurbanSent[0].id_user_amount_sent_updated_users ? state.qurbanSent[0].id_user_qurban_sent_users.name : ''}</Typography>
                                    </Grid>
                                </Grid>
                            }
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <Grid container direction="column" justify="center" alignItems="center">
                                <Typography variant="h6" color="initial" style={{ marginBottom: '5%' }}>QR Code Peserta</Typography>
                                {state.loading || !state.qurbanSent ? <Skeleton variant="rect" height={250} width={250} /> :
                                    <QRCode value={state.qurbanSent[0].id_peserta.toString()} />
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card >

        )
    }
}

export default ProfileQurbanSent
