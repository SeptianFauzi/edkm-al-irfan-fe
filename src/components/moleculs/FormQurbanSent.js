import { FormControl, FormLabel, TextField, Container, Grid, FormHelperText, RadioGroup, FormControlLabel, Radio, Box, Typography, TextareaAutosize, Button, Card, CardContent, CircularProgress, Select, MenuItem, InputLabel } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { connect, useDispatch, useSelector } from 'react-redux';
import { deleteStateUpdateDeleteQurban, getDetailPeserta, getDetailQurban, getDetailQurbanSent, postPeserta, updatePeserta, updateQurban, updateQurbanSent } from '../../config/redux/action';
import swal from 'sweetalert';
import { useHistory, useParams } from 'react-router';
import { GetDetailQurbanSent, UpdateQurbanSent } from '../../config/redux/services';
import { resetErrorData } from '../../config/redux/features/qurbansent/qurbanSentSlice';
import DataNotFound from './DataNotFound';
import { LinearProgress } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
function FormQurbanSent(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();
    const state = useSelector(state => state.qurbanSent)
    const [update, setupdate] = useState(false)
    const [qurban, setqurban] = useState({
        year_hijriah: '',
        amount_sent: '',
        amount_type: '',
        notes: '',
        is_qurban_sent: '',
        id_user_qurban_sent: '',
        id_user_amount_sent_updated: '',
        date_qurban_sent: '',
        id_user: JSON.parse(localStorage.getItem('user')).id
    })
    const schema = yup.object().shape({
        year_hijriah: yup.number().required(),
        amount_sent: yup.number().required(),
        is_qurban_sent: yup.string().required()
    });
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
        resolver: yupResolver(schema)
    });
    useEffect(() => {
        if (params.id) {
            dispatch(GetDetailQurbanSent(params.id)).then((response) => {
                if (update && state.qurbanSent.length > 0) {
                    setqurban({
                        ...qurban,
                        id: state.qurbanSent[0].id,
                        year_hijriah: state.qurbanSent[0].year_hijriah,
                        amount_sent: state.qurbanSent[0].amount_sent,
                        amount_type: state.qurbanSent[0].amount_type,
                        notes: state.qurbanSent[0].notes,
                        is_qurban_sent: state.qurbanSent[0].is_qurban_sent,
                        id_user_qurban_sent: state.qurbanSent[0].id_user_qurban_sent,
                        id_user_amount_sent_updated: state.qurbanSent[0].id_user_amount_sent_updated,
                        date_qurban_sent: state.qurbanSent[0].date_qurban_sent
                    })
                    reset({
                        id: state.qurbanSent[0].id,
                        year_hijriah: state.qurbanSent[0].year_hijriah,
                        amount_sent: state.qurbanSent[0].amount_sent,
                        amount_type: state.qurbanSent[0].amount_type,
                        notes: state.qurbanSent[0].notes,
                        is_qurban_sent: state.qurbanSent[0].is_qurban_sent,
                        id_user_qurban_sent: state.qurbanSent[0].id_user_qurban_sent,
                        id_user_amount_sent_updated: state.qurbanSent[0].id_user_amount_sent_updated,
                        date_qurban_sent: state.qurbanSent[0].date_qurban_sent
                    })
                } else {
                    setupdate(true)
                }
            })
        }
    }, [update])
    const onSubmit = async (data) => {
        dispatch(UpdateQurbanSent({ id: qurban.id, data: qurban }))
    }

    if (state.updateQurbanSent) {
        swal({
            title: "Berhasil",
            text: "Data Peserta Penerima Qurban Telah Diperbaharui",
            icon: "success",
            button: false,
            timer: 2000
        }).then(() => {
            history.push('/admin/qurbansent')
        })
    } else if (state.errorData) {
        swal({
            title: "Gagal",
            text: "Data Peserta  Penerima Qurban Gagal Diperbaharui",
            icon: "error",
            button: false,
            timer: 2000
        })
        dispatch(resetErrorData())
    }
    const handleFormChange = (e) => {
        setValue(e.target.name, e.target.value)
        setqurban({
            ...qurban,
            [e.target.name]: e.target.value
        })
    }
    if (state.qurbanSent.length <= 0 || state.error) {
        return (
            <div>
                <DataNotFound />
            </div>
        )
    } else {
        return (
            <Card variant="outlined" >
                {state.loading || state.loadingData ? <LinearProgress /> : ''}
                <CardContent style={{ minHeight: '80vh' }}>
                    < Grid container spacing={1} direction="row" justify="center" >
                        <Grid item xs={12}>
                            <Box my={2}>
                                <Typography variant="h5" color="initial" align="center">Formulir Ubah</Typography>
                                <Typography variant="h5" color="initial" align="center">Peserta Penerima Qurban</Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={8} md={11} sm={11} xs={11}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Box my={1}>
                                    <Grid container justify="flex-start" direction="row" spacing={2} >
                                        <Grid item lg={2} md={2} sm={4} xs={4} >
                                            <FormControl fullWidth variant="outlined">
                                                {state.loading ? <Skeleton variant="rect" height={50} /> :
                                                    <TextField
                                                        {...register('year_hijriah')}
                                                        label="Tahun Hijriah*"
                                                        name='year_hijriah'
                                                        variant="outlined"
                                                        value={qurban.year_hijriah.toString()}
                                                        onChangeCapture={handleFormChange}
                                                    />
                                                }
                                                <Typography variant="caption" style={{ color: 'red' }}>{errors.year_hijriah?.message}</Typography>
                                            </FormControl>
                                        </Grid>
                                        <Grid item lg={5} md={5} sm={4} xs={4} >
                                            <FormControl fullWidth variant="outlined">
                                                {state.loading ? <Skeleton variant="rect" height={50} /> :
                                                    <TextField
                                                        {...register('amount_sent')}
                                                        label="Jatah Qurban (Liter)"
                                                        name='amount_sent'
                                                        onChangeCapture={handleFormChange}
                                                        variant="outlined"
                                                        value={qurban.amount_sent.toString()} />
                                                }
                                                <Typography variant="caption" style={{ color: 'red' }}>{errors.amount_sent?.message}</Typography>
                                            </FormControl>
                                        </Grid>
                                        <Grid item lg={5} md={5} sm={4} xs={4} >
                                            {state.loading ? <Skeleton variant="rect" height={50} /> :
                                                <FormControl fullWidth variant="outlined">
                                                    <InputLabel id="amount_type">Satuan</InputLabel>
                                                    <Select
                                                        label="Satuan"
                                                        id="amount_type"
                                                        value={qurban.amount_type.toString()}
                                                        onChange={handleFormChange}
                                                        variant="outlined"
                                                        name="amount_type"
                                                    >
                                                        <MenuItem value={"Bungkus"}>Bungkus</MenuItem>
                                                        <MenuItem value={"Kg"}>Kg</MenuItem>
                                                    </Select>
                                                    <Typography variant="caption" style={{ color: 'red' }}>{errors.amount_sent?.message}</Typography>
                                                </FormControl>
                                            }
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box my={1}>
                                    <Grid container justify="flex-start" direction="row" spacing={2} >
                                        <Grid item lg={4} md={6} sm={6} xs={8}  >
                                            {state.loading ? <Skeleton variant="rect" height={50} style={{ marginRight: '30px' }} /> :
                                                <FormControl fullWidth variant="outlined">
                                                    <FormControl component="fieldset">
                                                        <FormLabel component="legend">Status Qurban Diberikan</FormLabel>
                                                        <RadioGroup aria-label="" value={qurban.is_qurban_sent.toString()} color="primary" {...register('is_qurban_sent')} name="is_qurban_sent" label="Status Zakat Yang Diterima" onChangeCapture={handleFormChange}>
                                                            <Grid container justify="flex-start" direction="row">
                                                                <FormControlLabel color="primary" value="true" label="Sudah" control={<Radio disabled={state.loadingData} />} />
                                                                <FormControlLabel color="primary" value="false" label="Belum" control={<Radio disabled={state.loadingData} />} />
                                                            </Grid>
                                                        </RadioGroup>
                                                        <Typography variant="caption" style={{ color: 'red' }}>{errors.is_qurban_sent?.message}</Typography>
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
                                                    <FormLabel>Catatan</FormLabel>
                                                    <TextareaAutosize rows={10} name="notes" onChangeCapture={handleFormChange} value={qurban.notes ? qurban.notes : ''} />
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
            </Card >

        )
    }

}

export default FormQurbanSent
