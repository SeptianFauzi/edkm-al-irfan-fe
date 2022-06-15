import { FormControl, FormLabel, TextField, Container, Grid, FormHelperText, RadioGroup, FormControlLabel, Radio, Alert, Box, Typography, TextareaAutosize, Button, Card, CardContent, CircularProgress, Divider, LinearProgress, Snackbar, Hidden } from '@material-ui/core'
import { Skeleton } from "@material-ui/lab";
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { connect, useDispatch, useSelector } from 'react-redux';
import { deleteStatePeserta, postPeserta, updatePeserta } from '../../config/redux/action';
import swal from 'sweetalert';
import { useHistory, useParams } from 'react-router';
import { CreatePeserta, GetDetailPeserta, UpdatePeserta } from '../../config/redux/services';
import DataNotFound from './DataNotFound';
import { resetErrorData } from '../../config/redux/features/peserta/pesertaSlice';
function FormPeserta(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();
    const state = useSelector(state => state.peserta)
    const [update, setupdate] = useState(false)
    const [peserta, setpeserta] = useState({
        name: '',
        is_person: '',
        service_money: '',
        service_zakat_sent: '',
        service_zakat_received: '',
        service_qurban_sent: '',
        service_qurban_received: '',
        notes: '',
        status: '',
        phone: ''
    })
    const schema = yup.object().shape({
        name: yup.string().max(255, 'Maksimal Karakter 255').required('Wajib Di isi'),
        is_person: yup.string().required('Wajib Di isi'),
        service_money: yup.string().required('Wajib Di isi'),
        service_zakat_received: yup.string().required('Wajib Di isi'),
        service_zakat_sent: yup.string().required('Wajib Di isi'),
        service_qurban_sent: yup.string().required('Wajib Di isi'),
        service_qurban_received: yup.string().required('Wajib Di isi'),
        status: yup.string().required('Wajib Di isi'),
        phone: yup.string().max(13).nullable()

    });
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
        resolver: yupResolver(schema)
    });

    useEffect(() => {
        if (params.id) {
            dispatch(GetDetailPeserta(params.id)).then((response) => {
                if (update && state.peserta.length > 0) {
                    setpeserta({
                        ...peserta,
                        name: state.peserta[0].name,
                        is_person: state.peserta[0].is_person,
                        service_money: state.peserta[0].service_money,
                        service_zakat_sent: state.peserta[0].service_zakat_sent,
                        service_zakat_received: state.peserta[0].service_zakat_received,
                        service_qurban_sent: state.peserta[0].service_qurban_sent,
                        service_qurban_received: state.peserta[0].service_qurban_received,
                        notes: state.peserta[0].notes,
                        phone: state.peserta[0].phone,
                        status: state.peserta[0].status,
                    })
                    reset({
                        name: state.peserta[0].name,
                        is_person: state.peserta[0].is_person,
                        service_money: state.peserta[0].service_money,
                        service_zakat_sent: state.peserta[0].service_zakat_sent,
                        service_zakat_received: state.peserta[0].service_zakat_received,
                        service_qurban_sent: state.peserta[0].service_qurban_sent,
                        service_qurban_received: state.peserta[0].service_qurban_received,
                        notes: state.peserta[0].notes,
                        phone: state.peserta[0].phone,
                        status: state.peserta[0].status
                    })
                } else {
                    setupdate(true)
                }
            })
        } else {
            setupdate(false)
        }
    }, [update])

    const onSubmit = (data) => {
        if (update) {
            dispatch(UpdatePeserta({ id: params.id, data: data }))
        } else {
            dispatch(CreatePeserta(data))
        }
    }


    if (state.errorData) {
        dispatch(resetErrorData())
        if (update) {
            swal({
                title: "Gagal",
                text: "Data Peserta Gagal Diperbaharui",
                icon: "error",
                button: false,
                timer: 2000
            })
        } else {
            swal({
                title: "Gagal",
                text: "Data Peserta Gagal Dibuat",
                icon: "error",
                button: false,
                timer: 2000
            })
        }
    }
    if (state.createPeserta || state.updatePeserta) {
        if (update) {
            swal({
                title: "Berhasil",
                text: "Data Peserta Telah Diperbaharui",
                icon: "success",
                button: false,
                timer: 2000
            }).then(() => {
                history.push('/admin/peserta')
            })
        } else {
            swal({
                title: "Berhasil",
                text: "Data Peserta Telah Dibuat",
                icon: "success",
                button: false,
                timer: 2000
            }).then(() => {
                history.push('/admin/peserta')
            })
        }
    }

    const handleFormChange = (e) => {
        setpeserta({
            ...peserta,
            [e.target.name]: e.target.value
        })
        setValue(e.target.name, e.target.value)
    }
    if (state.peserta.length <= 0 || state.error) {
        return (
            <div>
                <DataNotFound />
            </div>
        )
    } else {
        return (
            < Card variant="outlined" >
                {state.loading || state.loadingData || (!state.peserta && update) ? <LinearProgress /> : ''}
                <CardContent>
                    <Grid container spacing={2} direction="row" justify="center" >
                        <Grid item lg={12}>
                            <Box my={2}>
                                <Typography variant="h4" color="initial" align="center">Formulir {params.id ? 'Ubah' : 'Tambah'} Peserta</Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={10} md={10} sm={11} xs={11}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Box my={1}>
                                    <Typography variant="h5" color="initial" align="justify" color="primary">Identitas Peserta</Typography>
                                    <Box my={2}>
                                        <Divider />
                                    </Box>
                                    <Grid container justify="space-between" direction="row" spacing={2}>
                                        <Grid item lg={6} md={6} sm={6} xs={12}>
                                            <FormControl fullWidth variant="outlined">
                                                {state.loading ? <Skeleton variant="rect" height={50} /> : <TextField
                                                    {...register('name')}
                                                    label="Nama Lengkap*"
                                                    name='name'
                                                    variant="outlined"
                                                    value={peserta.name.toString()}
                                                    onChangeCapture={handleFormChange}
                                                    disabled={state.loading || state.loadingData}
                                                />}
                                                {errors.name?.message ? <Typography variant="caption" style={{ color: 'red' }}>{errors.name?.message}</Typography> : ''}
                                            </FormControl>
                                        </Grid>
                                        <Grid item lg={6} md={6} sm={6} xs={12} >
                                            <FormControl fullWidth variant="outlined">
                                                {state.loading ? <Skeleton variant="rect" height={50} /> : <TextField
                                                    {...register('phone')}
                                                    label="No Telepon"
                                                    name='phone'
                                                    type="number"
                                                    variant="outlined"
                                                    value={peserta.phone ? peserta.phone.toString() : ''}
                                                    onChangeCapture={handleFormChange}
                                                    disabled={state.loading || state.loadingData}
                                                />}
                                                {errors.phone?.message ? <Typography variant="caption" style={{ color: 'red' }}>{errors.phone?.message}</Typography> : ''}
                                            </FormControl>
                                        </Grid>
                                        <Grid item lg={6} md={6} sm={6} xs={12}>
                                            {state.loading ? <Skeleton variant="rect" height={50} style={{ marginRight: '30px' }} /> :
                                                <FormControl fullWidth variant="outlined">
                                                    <FormControl component="fieldset">
                                                        <FormLabel component="legend">Apakah Seorang Warga?*</FormLabel>
                                                        <RadioGroup aria-label="" color="primary" value={peserta.is_person.toString()} {...register('is_person')} name="is_person" label="Apakah Warga?" onChangeCapture={handleFormChange}>
                                                            <Grid container justify="flex-start" direction="row">
                                                                <FormControlLabel color="primary" value="true" label="Ya" control={<Radio disabled={state.loadingData} />} />
                                                                <FormControlLabel color="primary" value="false" label="Tidak" control={<Radio disabled={state.loadingData} />} />
                                                            </Grid>

                                                        </RadioGroup>
                                                        <Typography variant="caption" style={{ color: 'red' }}>{errors.is_person?.message}</Typography>
                                                    </FormControl>
                                                </FormControl>
                                            }
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box my={1}>
                                    <Typography variant="h6" color="initial" align="justify" color="primary">Pelayanan Yang Di Ikuti</Typography>
                                    <Box my={2}>
                                        <Divider />
                                    </Box>
                                    <Grid container justify="flex-start" direction="row">
                                        <Grid item lg={4} md={4} sm={4} xs={12} >
                                            {state.loading ? <Skeleton variant="rect" height={50} style={{ marginRight: '30px' }} /> :
                                                <FormControl component="fieldset">
                                                    <FormLabel component="legend">Celengan*</FormLabel>
                                                    <RadioGroup disabled={state.loading || state.loadingData} aria-label="" value={peserta.service_money.toString()} {...register('service_money')} name="service_money" onChangeCapture={handleFormChange}>
                                                        <Grid container justify="flex-start" direction="row">
                                                            <FormControlLabel value="true" label="Ya" control={<Radio disabled={state.loadingData} />} />
                                                            <FormControlLabel value="false" label="Tidak" control={<Radio disabled={state.loadingData} />} />
                                                        </Grid>
                                                    </RadioGroup>
                                                    <Typography variant="caption" style={{ color: 'red' }}>{errors.service_money?.message}</Typography>
                                                </FormControl>
                                            }
                                        </Grid>
                                        <Grid item lg={4} md={4} sm={4} xs={12}  >
                                            {state.loading ? <Skeleton variant="rect" height={50} style={{ marginRight: '30px' }} /> :
                                                <FormControl component="fieldset">
                                                    <FormLabel component="legend">Zakat Fitrah*</FormLabel>
                                                    <RadioGroup disabled={state.loading || state.loadingData} aria-label="" value={peserta.service_zakat_received.toString()} {...register('service_zakat_received')} name="service_zakat_received" onChangeCapture={handleFormChange}>
                                                        <Grid container justify="flex-start" direction="row">
                                                            <FormControlLabel value="true" label="Ya" control={<Radio disabled={state.loadingData} />} />
                                                            <FormControlLabel value="false" label="Tidak" control={<Radio disabled={state.loadingData} />} />
                                                        </Grid>
                                                    </RadioGroup>
                                                    <Typography variant="caption" style={{ color: 'red' }}>{errors.service_zakat_received?.message}</Typography>
                                                </FormControl>
                                            }
                                        </Grid>
                                        <Grid item lg={4} md={4} sm={4} xs={12} >
                                            {state.loading ? <Skeleton variant="rect" height={50} style={{ marginRight: '30px' }} /> :
                                                <FormControl component="fieldset">
                                                    <FormLabel component="legend">Penerima Zakat Fitrah*</FormLabel>
                                                    <RadioGroup disabled={state.loading || state.loadingData} aria-label="" value={peserta.service_zakat_sent.toString()} {...register('service_zakat_sent')} name="service_zakat_sent" onChangeCapture={handleFormChange}>
                                                        <Grid container justify="flex-start" direction="row">
                                                            <FormControlLabel value="true" label="Ya" control={<Radio disabled={state.loadingData} />} />
                                                            <FormControlLabel value="false" label="Tidak" control={<Radio disabled={state.loadingData} />} />
                                                        </Grid>
                                                    </RadioGroup>
                                                    <Typography variant="caption" style={{ color: 'red' }}>{errors.service_zakat_sent?.message}</Typography>
                                                </FormControl>
                                            }
                                        </Grid>
                                        <Grid item lg={4} md={4} sm={4} xs={12} >
                                            {state.loading ? <Skeleton variant="rect" height={50} style={{ marginRight: '30px', marginTop: '5px' }} /> :
                                                <FormControl component="fieldset">
                                                    <FormLabel component="legend">Qurban*</FormLabel>
                                                    <RadioGroup disabled={state.loading || state.loadingData} aria-label="" value={peserta.service_qurban_received.toString()} {...register('service_qurban_received')} name="service_qurban_received" onChangeCapture={handleFormChange}>
                                                        <Grid container justify="flex-start" direction="row">
                                                            <FormControlLabel value="true" label="Ya" control={<Radio disabled={state.loadingData} />} />
                                                            <FormControlLabel value="false" label="Tidak" control={<Radio disabled={state.loadingData} />} />
                                                        </Grid>
                                                    </RadioGroup>
                                                    <Typography variant="caption" style={{ color: 'red' }}>{errors.service_qurban_received?.message}</Typography>
                                                </FormControl>
                                            }
                                        </Grid>
                                        <Grid item lg={4} md={4} sm={4} xs={12} >
                                            {state.loading ? <Skeleton variant="rect" height={50} style={{ marginRight: '30px', marginTop: '5px' }} /> :
                                                <FormControl component="fieldset">
                                                    <FormLabel component="legend">Penerima Qurban*</FormLabel>
                                                    <RadioGroup disabled={state.loading || state.loadingData} aria-label="" value={peserta.service_qurban_sent.toString()} {...register('service_qurban_sent')} name="service_qurban_sent" onChangeCapture={handleFormChange}>
                                                        <Grid container justify="flex-start" direction="row">
                                                            <FormControlLabel value="true" label="Ya" control={<Radio disabled={state.loadingData} />} />
                                                            <FormControlLabel value="false" label="Tidak" control={<Radio disabled={state.loadingData} />} />
                                                        </Grid>
                                                    </RadioGroup>
                                                    <Typography variant="caption" style={{ color: 'red' }}>{errors.service_qurban_sent?.message}</Typography>
                                                </FormControl>
                                            }
                                        </Grid>
                                    </Grid>
                                    <Box my={2}>
                                        <Divider />
                                    </Box>
                                </Box>
                                <Box my={1}>
                                    <Grid container justify="flex-start" columns="row" >
                                        <Grid item lg={12} sm={12} xs={12} md={12} >
                                            {state.loading ? <Skeleton variant="rect" height={200} /> :
                                                <FormControl fullWidth>
                                                    <FormLabel style={{ marginBlock: '10px' }}>Catatan</FormLabel>
                                                    <TextareaAutosize disabled={state.loadingData} rows={10} name="notes" value={peserta.notes ? peserta.notes : ''} onChangeCapture={handleFormChange}>
                                                    </TextareaAutosize>
                                                </FormControl>
                                            }
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box my={1}>
                                    <Typography variant="h6" color="initial" align="left" color="primary">Status Peserta</Typography>
                                    <Box my={2}>
                                        <Divider />
                                    </Box>
                                    <Grid container justify="flex-start" direction="row">
                                        <Grid item lg={4} >
                                            {state.loading ? <Skeleton variant="rect" height={50} style={{ marginRight: '30px' }} /> :
                                                <FormControl component="fieldset">
                                                    <FormLabel component="legend">Aktif</FormLabel>
                                                    <RadioGroup aria-label="" value={peserta.status.toString()} {...register('status')} name="status" onChangeCapture={handleFormChange}>
                                                        <Grid container justify="flex-start" direction="row">
                                                            <FormControlLabel value="true" label="Aktif" control={<Radio disabled={state.loadingData} />} />
                                                            <FormControlLabel value="false" label="Tidak Aktif" control={<Radio disabled={state.loadingData} />} />
                                                        </Grid>
                                                    </RadioGroup>
                                                    <Typography variant="caption" style={{ color: 'red' }}>{errors.status?.message}</Typography>
                                                </FormControl>
                                            }
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box my={1}>
                                    <Grid container justify="center" columns="row" >
                                        <Grid item xs={12} >
                                            {state.loading || state.loadingData ? <Button type="submit" variant="contained" color="primary" fullWidth disabled> Proses . . . </Button> : <Button type="submit" variant="contained" color="primary" fullWidth> {params.id ? 'Ubah' : 'Simpan'}</Button>}
                                        </Grid>
                                    </Grid>
                                </Box>
                            </form>
                        </Grid>
                    </Grid>
                </CardContent>
                {state.loading || state.loadingData || (!state.peserta && update) ? <LinearProgress /> : ''}
            </Card >
        )
    }
}
export default FormPeserta
