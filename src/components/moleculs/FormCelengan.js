import { FormControl, FormLabel, TextField, LinearProgress, Container, Grid, FormHelperText, RadioGroup, FormControlLabel, Radio, Box, Typography, TextareaAutosize, Button, Card, CardContent, CircularProgress } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { connect, useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { useHistory, useParams } from 'react-router';
import { GetDetailCelengan, UpdateCelengan } from '../../config/redux/services';
import DataNotFound from './DataNotFound';
import { Skeleton } from "@material-ui/lab";
import { resetErrorData } from '../../config/redux/features/celengan/celenganSlice';

function FormCelengan(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();
    const state = useSelector(state => state.celengan)
    const [update, setupdate] = useState(false)
    const [celengan, setcelengan] = useState({
        year_hijriah: '',
        amount: '',
        notes: '',
        is_money_received: '',
        is_money_box_sent: '',
        id_user: JSON.parse(localStorage.getItem('user')).id,
    })
    const schema = yup.object().shape({
        year_hijriah: yup.number().required(),
        amount: yup.number().required(),
        is_money_received: yup.string().required(),
        is_money_box_sent: yup.string().required(),
    });
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
        resolver: yupResolver(schema)
    });
    useEffect(() => {
        if (params.id) {
            dispatch(GetDetailCelengan(params.id)).then((response) => {
                if (update && state.celengan.length > 0) {
                    setcelengan({
                        ...celengan,
                        id: state.celengan[0].id,
                        year_hijriah: state.celengan[0].year_hijriah,
                        amount: state.celengan[0].amount,
                        notes: state.celengan[0].notes,
                        is_money_received: state.celengan[0].is_money_received,
                        is_money_box_sent: state.celengan[0].is_money_box_sent,
                    })
                    reset({
                        id: state.celengan[0].id,
                        year_hijriah: state.celengan[0].year_hijriah,
                        amount: state.celengan[0].amount,
                        notes: state.celengan[0].notes,
                        is_money_received: state.celengan[0].is_money_received,
                        is_money_box_sent: state.celengan[0].is_money_box_sent,
                    })
                } else {
                    setupdate(true)
                }
            })
        }
    }, [update])
    const onSubmit = (data) => {
        dispatch(UpdateCelengan({ id: celengan.id, data: celengan }))
    }

    if (state.updateCelengan) {
        swal({
            title: "Berhasil",
            text: "Data Peserta Celengan Dana Sosial Telah Diperbaharui",
            icon: "success",
            button: false,
            timer: 2000
        }).then(() => {
            history.push('/admin/celengan')
        })
    } else if (state.errorData) {
        swal({
            title: "Gagal",
            text: "Data Peserta Celengan Dana Sosial Gagal Diperbaharui",
            icon: "error",
            button: false,
            timer: 2000
        })
        dispatch(resetErrorData())
    }
    const handleFormChange = (e) => {
        setcelengan({
            ...celengan,
            [e.target.name]: e.target.value
        })
        setValue(e.target.name, e.target.value)
    }
    if (state.celengan.length <= 0 || state.error) {
        return (
            <div>
                <DataNotFound />
            </div>
        )
    } else {
        return (
            <Card variant="outlined" >
                {state.loading || state.loadingData ? <LinearProgress /> : ''}
                <CardContent>
                    < Grid container spacing={1} direction="row" justify="center" >
                        <Grid item xs={12}>
                            <Box my={2}>
                                <Typography variant="h5" color="initial" align="center">Formulir Ubah</Typography>
                                <Typography variant="h5" color="initial" align="center">Peserta Celengan Dana Sosial</Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={8} md={11} sm={11} xs={11}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Box my={1}>
                                    <Grid container justify="flex-start" direction="row" spacing={2} >
                                        <Grid item lg={4} md={6} sm={6} xs={6} >
                                            <FormControl fullWidth variant="outlined">
                                                {state.loading ? <Skeleton variant="rect" height={50} /> :
                                                    <TextField
                                                        {...register('year_hijriah')}
                                                        label="Tahun Hijriah*"
                                                        name='year_hijriah'
                                                        variant="outlined"
                                                        value={celengan.year_hijriah.toString()}
                                                        onChangeCapture={handleFormChange}
                                                        disabled={state.loadingData}
                                                    />
                                                }
                                                <Typography variant="caption" style={{ color: 'red' }}>{errors.year_hijriah?.message}</Typography>
                                            </FormControl>
                                        </Grid>
                                        <Grid item lg={8} md={6} sm={6} xs={6} >
                                            <FormControl fullWidth variant="outlined">
                                                {state.loading ? <Skeleton variant="rect" height={50} /> :
                                                    <TextField
                                                        {...register('amount')}
                                                        label="Jumlah Uang"
                                                        name='amount'
                                                        onChangeCapture={handleFormChange}
                                                        variant="outlined"
                                                        value={celengan.amount.toString()}
                                                        disabled={state.loadingData} />

                                                }
                                                <Typography variant="caption" style={{ color: 'red' }}>{errors.amount?.message}</Typography>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box my={1}>
                                    <Grid container justify="flex-start" direction="row" spacing={2} >
                                        <Grid item lg={4} md={6} sm={6} xs={6}>
                                            {state.loading ? <Skeleton variant="rect" height={50} style={{ marginRight: '30px' }} /> :
                                                <FormControl fullWidth variant="outlined">
                                                    <FormControl component="fieldset">
                                                        <FormLabel component="legend">Status Celengan Dikumpulkan</FormLabel>
                                                        <RadioGroup aria-label="" value={celengan.is_money_received ? celengan.is_money_received.toString() : 'false'} color="primary" {...register('is_money_received')} name="is_money_received" label="Status Zakat Yang Diterima" onChangeCapture={handleFormChange}>
                                                            <Grid container justify="flex-start" direction="row">
                                                                <FormControlLabel color="primary" value="true" label="Sudah" control={<Radio disabled={state.loadingData} />} />
                                                                <FormControlLabel color="primary" value="false" label="Belum" control={<Radio disabled={state.loadingData} />} />
                                                            </Grid>
                                                        </RadioGroup>
                                                        <Typography variant="caption" style={{ color: 'red' }}>{errors.is_money_received?.message}</Typography>
                                                    </FormControl>
                                                </FormControl>
                                            }
                                        </Grid>
                                        <Grid item lg={8} md={6} sm={6} xs={6}>
                                            {state.loading ? <Skeleton variant="rect" height={50} style={{ marginRight: '30px' }} /> :
                                                <FormControl fullWidth variant="outlined">
                                                    <FormControl component="fieldset">
                                                        <FormLabel component="legend">Status Celengan Diberikan</FormLabel>
                                                        <RadioGroup aria-label="" value={celengan.is_money_box_sent ? celengan.is_money_box_sent.toString() : "false"} color="primary" {...register('is_money_box_sent')} name="is_money_box_sent" label="Status Zakat Yang Diterima" onChangeCapture={handleFormChange}>
                                                            <Grid container justify="flex-start" direction="row">
                                                                <FormControlLabel color="primary" value="true" label="Sudah" control={<Radio disabled={state.loadingData} />} />
                                                                <FormControlLabel color="primary" value="false" label="Belum" control={<Radio disabled={state.loadingData} />} />
                                                            </Grid>
                                                        </RadioGroup>
                                                        <Typography variant="caption" style={{ color: 'red' }}>{errors.is_money_box_sent?.message}</Typography>
                                                    </FormControl>
                                                </FormControl>
                                            }
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box my={1}>
                                    <Grid container justify="flex-start" columns="row" >
                                        <Grid item lg={12} md={12} sm={12} xs={12}  >
                                            {state.loading ? <Skeleton variant="rect" height={200} /> :
                                                <FormControl fullWidth>
                                                    <FormLabel style={{ marginBlock: '5px' }}>Catatan</FormLabel>
                                                    <TextareaAutosize rows={10} name="notes" disabled={state.loadingData} onChangeCapture={handleFormChange} value={celengan.notes ? celengan.notes : ''} />
                                                </FormControl>
                                            }
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box my={1}>
                                    <Grid container justify="center" columns="row" >
                                        <Grid item lg={12} md={12} sm={12} xs={12} >
                                            {state.loading || state.loadingData ? <Button type="submit" variant="contained" color="primary" fullWidth disabled> Proses . . . </Button> : <Button type="submit" variant="contained" color="primary" fullWidth> {params.id ? 'Ubah' : 'Simpan'}</Button>}
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

export default FormCelengan
