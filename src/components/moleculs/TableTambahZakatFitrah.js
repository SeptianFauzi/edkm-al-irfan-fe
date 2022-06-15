import React, { useEffect, useState } from 'react'
import { DataGrid, GridToolbar, } from '@material-ui/data-grid';
import { Box, Button, CircularProgress, Grid, LinearProgress } from '@material-ui/core';
import { Check, Clear, Delete, Edit, Visibility } from '@material-ui/icons';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { deleteZakatFitrah, getZakatFitrahList, pesertaZakatFitrahList, postZakatFitrah, removePostPesertaZakatFitrahList } from '../../config/redux/action';
import moment from 'moment-hijri'
import swal from 'sweetalert';
import { CreateZakatFitrahReceived } from '../../config/redux/services';
import { resetErrorData } from '../../config/redux/features/zakatfitrahreceived/zakatFitrahReceivedSlice';
function TableTambahZakatFitrah(props) {
    const history = useHistory()
    const state = useSelector(state => state.zakatFitrahReceived)
    const dispatch = useDispatch()
    const [peserta, setpeserta] = useState({
        id_peserta: '',
        year_hijriah: props.yearHijriah
    })

    const handlePostPesertaZakatFitrah = (params) => {
        dispatch(CreateZakatFitrahReceived(peserta))

    }
    const id_user = JSON.parse(localStorage.getItem('user')).id
    if (state.createZakatFitrahReceived) {
        swal({
            title: "Berhasil",
            text: "Data Peserta Zakat Fitrah Telah Dibuat",
            icon: "success",
            timer: 2000,
            button: false,
        }).then(() => {
            history.push('/admin/zakatfitrah')
        })
    } else if (state.errorData) {
        swal({
            title: "Gagal",
            text: "Data Peserta Zakat Fitrah Gagal Dibuat",
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
            field: 'service_zakat_received', headerName: 'Zakat Fitrah', flex: 0.75, renderCell: (params) => {
                return params.getValue('service_zakat_received') ? <Check style={{ color: 'green' }} /> : <Clear style={{ color: 'red' }} />
            }
        },
    ];
    const rows = props.dataRow;
    return (
        <div>
            <DataGrid
                components={{ Toolbar: GridToolbar }}
                loading={state.loading} rows={rows} columns={columns} autoHeight pageSize={10} checkboxSelection onSelectionModelChange={(newSelection) => {
                    setpeserta({ ...peserta, id_user: id_user, id_peserta: newSelection.selectionModel, year_hijriah: props.yearHijriah })
                }} />
            <Box my={3}>
                <Grid container spacing={1}>
                    <Grid item xs={2}>
                        {(peserta.id_peserta.length > 0 && !state.loading && !state.loadingData) ? <Button variant="contained" color="primary" fullWidth onClick={handlePostPesertaZakatFitrah}>Simpan</Button> : <Button variant="contained" color="primary" fullWidth disabled>{state.loadingData ? 'Sedang Diproses' : 'Simpan'}</Button>}
                    </Grid>
                </Grid>
            </Box>

        </div >
    )
}

export default TableTambahZakatFitrah
