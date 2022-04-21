import React, { useEffect, useState } from 'react'
import { DataGrid, GridToolbar, } from '@material-ui/data-grid';
import { Box, Button, CircularProgress, Grid, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, FormControl, TextField, Typography } from '@material-ui/core';
import { Check, Clear, Delete, Edit, Visibility } from '@material-ui/icons';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { deleteZakatFitrah, getZakatFitrahList, pesertaZakatFitrahList, pesertaZakatFitrahListSent, postZakatFitrah, postZakatFitrahSent, removePostPesertaZakatFitrahList } from '../../config/redux/action';
import swal from 'sweetalert';
import { resetErrorData } from '../../config/redux/features/zakatfitrahsent/zakatFitrahSentSlice';
import { CreateZakatFitrahSent } from '../../config/redux/services';
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Skeleton } from '@material-ui/lab';
function TableTambahZakatFitrahSent(props) {
    const history = useHistory()
    const state = useSelector(state => state.zakatFitrahSent)
    const dispatch = useDispatch()
    const [peserta, setpeserta] = useState({
        id_peserta: '',
        year_hijriah: props.yearHijriah,
        amount_sent: 0
    })
    const schema = yup.object().shape({
        amount_sent: yup.number().required('Wajib Di isi'),

    });
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const [isOpenDialog, setOpenDialog] = useState(false)


    const handleModal = () => {
        setOpenDialog(!isOpenDialog)

    }


    const handlePostPesertaZakatFitrah = (params) => {
        dispatch(CreateZakatFitrahSent(peserta))
    }
    const id_user = JSON.parse(localStorage.getItem('user')).id
    if (state.createZakatFitrahSent) {
        swal({
            title: "Berhasil",
            text: "Data Peserta Penerima Zakat Fitrah Telah Dibuat",
            icon: "success",
            timer: 2000,
            button: false,
        }).then(() => {
            history.push('/admin/penerimazakatfitrah')
        })
    } else if (state.errorData) {
        swal({
            title: "Gagal",
            text: "Data Peserta Penerima Zakat Fitrah Gagal Dibuat",
            icon: "error",
            timer: 2000,
            button: false,
        })
        dispatch(resetErrorData())
    }
    const columns = [
        {
            field: 'id', headerName: 'ID'
        },
        { field: 'name', headerName: 'Nama', flex: 1 },
        {
            field: 'is_person', headerName: 'Warga', flex: 0.75, renderCell: (params) => {
                return params.getValue('is_person') ? <Check style={{ color: 'green' }} /> : <Clear style={{ color: 'red' }} />
            }
        },
        {
            field: 'service_zakat_sent', headerName: 'Penerima Zakat Fitrah', flex: 0.75, renderCell: (params) => {
                return params.getValue('service_zakat_sent') ? <Check style={{ color: 'green' }} /> : <Clear style={{ color: 'red' }} />
            }
        },
    ];
    const rows = props.dataRow;
    return (
        <div>
            <DataGrid components={{ Toolbar: GridToolbar }} rows={rows} loading={state.loading} columns={columns} autoHeight pageSize={20} checkboxSelection onSelectionModelChange={(newSelection) => {
                setpeserta({ ...peserta, id_user: id_user, id_peserta: newSelection.selectionModel, year_hijriah: props.yearHijriah, kulak: 0 })

            }} />
            <Box my={3}>
                <Grid container spacing={1}>
                    <Grid container spacing={1}>
                        <Grid item xs={2}>
                            {(peserta.id_peserta.length > 0 && !state.loading && !state.loadingData) ? <Button variant="contained" color="primary" fullWidth onClick={handleModal}>Simpan</Button> : <Button variant="contained" color="primary" fullWidth disabled>{state.loadingData ? 'Sedang Diproses' : 'Simpan'}</Button>}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Dialog open={isOpenDialog}>
                <DialogContent>
                    <DialogContentText>
                        <div style={{ marginBlock: "1.25em" }}>
                            <Typography variant="body1">Silakan Masukan Jumlah Jatah Beras Penerima Dalam Liter</Typography>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit(handlePostPesertaZakatFitrah)}>
                                <FormControl fullWidth variant="outlined">
                                    {state.loading ? <Skeleton variant="rect" height={50} /> : <TextField
                                        {...register('amount_sent')}
                                        label="Jatah"
                                        name='amount_sent'
                                        type="number"
                                        variant="outlined"
                                        onChangeCapture={(e) => setpeserta({ ...peserta, amount_sent: parseInt(e.target.value) })}
                                        disabled={state.loading || state.loadingData}
                                    />}
                                    {errors.amount_sent?.message ? <Typography variant="body1" style={{ color: 'red' }}>{errors.name?.message}</Typography> : ''}
                                </FormControl>
                            </form>
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ m: 5 }}>
                    <Button onClick={handleModal} fullWidth variant="contained" color="default">
                        Cancel
                    </Button>
                    <Button onClick={handlePostPesertaZakatFitrah} fullWidth variant="contained" color="primary">
                        Simpan
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    )
}

export default TableTambahZakatFitrahSent