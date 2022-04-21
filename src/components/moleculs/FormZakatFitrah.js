import { FormControl, LinearProgress, FormLabel, TextField, Container, Grid, FormHelperText, RadioGroup, FormControlLabel, Radio, Box, Typography, TextareaAutosize, Button, Card, CardContent, CircularProgress } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { useHistory, useParams } from 'react-router';
import { GetDetailZakatFitrahReceived, UpdateZakatFitrahReceived } from '../../config/redux/services';
import { resetErrorData } from '../../config/redux/features/zakatfitrahreceived/zakatFitrahReceivedSlice';
import DataNotFound from './DataNotFound';
import { Skeleton } from "@material-ui/lab";
function FormZakatFitrah(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();
    const state = useSelector(state => state.zakatFitrahReceived)
    const [update, setupdate] = useState(false)
    const [zakatFitrah, setzakatFitrah] = useState({
        year_hijriah: '',
        amount_received: '',
        notes: '',
        is_zakat_received: '',
        id_user_zakat_received: '',
        id_user_amount_received_updated: '',
        date_zakat_received: '',
        id_user: JSON.parse(localStorage.getItem('user')).id,
        kulak: ''
    })
    const schema = yup.object().shape({
        year_hijriah: yup.number().required(),
        amount_received: yup.number().required(),
        is_zakat_received: yup.string().required(),
        kulak: yup.number().required()
    });
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
        resolver: yupResolver(schema)
    });
    useEffect(() => {
        if (params.id) {
            dispatch(GetDetailZakatFitrahReceived(params.id)).then((response) => {
                if (update && state.zakatFitrahReceived.length > 0) {
                    setzakatFitrah({
                        ...zakatFitrah,
                        year_hijriah: state.zakatFitrahReceived[0].year_hijriah,
                        amount_received: state.zakatFitrahReceived[0].amount_received,
                        notes: state.zakatFitrahReceived[0].notes,
                        is_zakat_received: state.zakatFitrahReceived[0].is_zakat_received,
                        id_user_zakat_received: state.zakatFitrahReceived[0].id_user_zakat_received,
                        id_user_amount_received_updated: state.zakatFitrahReceived[0].id_user_amount_received_updated,
                        date_zakat_received: state.zakatFitrahReceived[0].date_zakat_received,
                        kulak: state.zakatFitrahReceived[0].amount_received / 3.25
                    })
                    reset({
                        year_hijriah: state.zakatFitrahReceived[0].year_hijriah,
                        amount_received: state.zakatFitrahReceived[0].amount_received,
                        notes: state.zakatFitrahReceived[0].notes,
                        is_zakat_received: state.zakatFitrahReceived[0].is_zakat_received,
                        id_user_zakat_received: state.zakatFitrahReceived[0].id_user_zakat_received,
                        id_user_amount_received_updated: state.zakatFitrahReceived[0].id_user_amount_received_updated,
                        date_zakat_received: state.zakatFitrahReceived[0].date_zakat_received,
                        kulak: state.zakatFitrahReceived[0].amount_received / 3.25
                    })
                } else {
                    setupdate(true)
                }
            })
        }
    }, [update])
    const onSubmit = async (data) => {
        dispatch(UpdateZakatFitrahReceived({ id: params.id, data: zakatFitrah }))
    }

    if (state.updateZakatFitrahReceived) {
        swal({
            title: "Berhasil",
            text: "Data Peserta Zakat Fitrah Telah Diperbaharui",
            icon: "success",
            button: false,
            timer: 2000
        }).then(() => {
            history.push('/admin/zakatfitrah')
        })
    } else if (state.errorData) {
        swal({
            title: "Gagal",
            text: "Data Peserta Zakat Fitrah Gagal Diperbaharui",
            icon: "error",
            button: false,
            timer: 2000
        })
        dispatch(resetErrorData())
    }
    const handleFormChange = (e) => {
        if (e.target.name === 'kulak') {
            setValue('kulak', e.target.value)
            setValue('amount_received', e.target.value * 3.25)
            setzakatFitrah({
                ...zakatFitrah,
                kulak: e.target.value,
                amount_received: e.target.value * 3.25
            })

        } else {
            setValue(e.target.name, e.target.value)
            setzakatFitrah({
                ...zakatFitrah,
                [e.target.name]: e.target.value
            })
        }



    }
    if (state.zakatFitrahReceived.length <= 0 || state.error) {
        return (
            <div>
                <DataNotFound />
            </div>
        )
    }
    else {
        return (
            <Card variant="outlined" >
                {state.loading || state.loadingData ? <LinearProgress /> : ''}
                <CardContent style={{ minHeight: '80vh' }}>
                    < Grid container spacing={1} direction="row" justify="center" >
                        <Grid item xs={12}>
                            <Box my={2}>
                                <Typography variant="h5" color="initial" align="center">Formulir Ubah Peserta Zakat Fitrah</Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={8} md={11} sm={11} xs={11}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Box my={1}>
                                    <Grid container justify="space-between" direction="row" spacing={2} >
                                        <Grid item lg={2} md={2} sm={4} xs={4} >
                                            <FormControl fullWidth variant="outlined">
                                                {state.loading ? <Skeleton variant="rect" height={50} /> :
                                                    <TextField
                                                        {...register('year_hijriah')}
                                                        label="Tahun Hijriah*"
                                                        name='year_hijriah'
                                                        variant="outlined"
                                                        value={zakatFitrah.year_hijriah.toString()}
                                                        onChangeCapture={handleFormChange}
                                                        disabled={state.loadingData}
                                                    />
                                                }
                                                <Typography variant="caption" style={{ color: 'red' }}>{errors.year_hijriah?.message}</Typography>
                                            </FormControl>
                                        </Grid>
                                        <Grid item lg={5} md={5} sm={4} xs={4} >
                                            <FormControl fullWidth variant="outlined">
                                                {state.loading ? <Skeleton variant="rect" height={50} /> :
                                                    <TextField
                                                        {...register('kulak')}
                                                        label="Kulak"
                                                        name='kulak'
                                                        onChangeCapture={handleFormChange}
                                                        variant="outlined"
                                                        value={zakatFitrah.kulak.toString()}
                                                        disabled={state.loadingData} />
                                                }
                                                <Typography variant="caption" style={{ color: 'red' }}>{errors.kulak?.message}</Typography>
                                            </FormControl>
                                        </Grid>
                                        <Grid item lg={5} md={5} sm={4} xs={4} >
                                            <FormControl fullWidth variant="outlined">
                                                {state.loading ? <Skeleton variant="rect" height={50} /> :
                                                    <TextField
                                                        {...register('amount_received')}
                                                        label="Zakat Yang Kumpulkan (Liter)"
                                                        name='amount_received'
                                                        onChangeCapture={handleFormChange}
                                                        variant="outlined"
                                                        value={zakatFitrah.amount_received.toString()}
                                                        disabled={true} />
                                                }
                                                <Typography variant="caption" style={{ color: 'red' }}>{errors.amount_received?.message}</Typography>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box my={1}>
                                    <Grid container justify="flex-start" direction="row" spacing={2} >
                                        <Grid item lg={4} md={6} sm={6} xs={8} >
                                            {state.loading ? <Skeleton variant="rect" height={50} style={{ marginRight: '30px' }} /> :
                                                <FormControl fullWidth variant="outlined">
                                                    <FormControl component="fieldset">
                                                        <FormLabel component="legend">Status Zakat Yang Dikumpulkan</FormLabel>
                                                        <RadioGroup aria-label="" value={zakatFitrah.is_zakat_received.toString()} color="primary" {...register('is_zakat_received')} name="is_zakat_received" label="Status Zakat Yang Diterima" onChangeCapture={handleFormChange}>
                                                            <Grid container justify="flex-start" direction="row">
                                                                <FormControlLabel color="primary" value="true" label="Sudah" control={<Radio disabled={state.loadingData} />} />
                                                                <FormControlLabel color="primary" value="false" label="Belum" control={<Radio disabled={state.loadingData} />} />
                                                            </Grid>
                                                        </RadioGroup>
                                                        <Typography variant="caption" style={{ color: 'red' }}>{errors.is_zakat_received?.message}</Typography>
                                                    </FormControl>
                                                </FormControl>
                                            }
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box my={1}>
                                    <Grid container justify="flex-start" columns="row" >
                                        <Grid item lg={12} md={12} sm={12} xs={12}>
                                            {state.loading ? <Skeleton variant="rect" height={200} /> :
                                                <FormControl fullWidth>
                                                    <FormLabel style={{ marginBlock: '5px' }}>Catatan</FormLabel>
                                                    <TextareaAutosize rows={10} name="notes" disabled={state.loadingData} onChangeCapture={handleFormChange} value={zakatFitrah.notes ? zakatFitrah.notes : ''} />
                                                </FormControl>
                                            }
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box my={1}>
                                    <Grid container justify="center" columns="row" >
                                        <Grid item lg={12} md={12} sm={12} xs={12} >
                                            {state.loading || state.loadingData ? <Button type="submit" variant="contained" color="primary" fullWidth disabled> Proses . . . </Button> : <Button type="submit" variant="contained" color="primary" fullWidth> Ubah</Button>}
                                        </Grid>
                                    </Grid>
                                </Box>
                            </form>
                        </Grid>
                    </Grid>
                </CardContent>
                {state.loading || state.loadingData ? <LinearProgress /> : ''}
            </Card >

        )
    }

}

export default FormZakatFitrah
