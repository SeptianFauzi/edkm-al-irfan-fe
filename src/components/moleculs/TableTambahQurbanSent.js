import React, { useEffect, useState } from 'react'
import { DataGrid, GridToolbar, selectedGridRowsCountSelector, } from '@material-ui/data-grid';
import { Box, Button, CircularProgress, Grid } from '@material-ui/core';
import { Check, Clear, Delete, Edit, Visibility } from '@material-ui/icons';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { deleteQurban, getQurbanList, pesertaQurbanList, pesertaQurbanListSent, postQurban, postQurbanSent, removePostPesertaQurbanList } from '../../config/redux/action';
import moment from 'moment-hijri'
import swal from 'sweetalert';
import { resetErrorData } from '../../config/redux/features/qurbansent/qurbanSentSlice';
import { CreateQurbanSent } from '../../config/redux/services';
function TableTambahQurbanSent(props) {
    const history = useHistory()
    const state = useSelector(state => state.qurbanSent)
    const dispatch = useDispatch()
    const [peserta, setpeserta] = useState({
        id_user: '',
        year_hijriah: props.yearHijriah,
        peserta_qurban: []
    })

    const handlePostPesertaQurban = (params) => {
        dispatch(CreateQurbanSent(peserta))

    }
    const id_user = JSON.parse(localStorage.getItem('user')).id
    if (state.createQurbanSent) {
        swal({
            title: "Berhasil",
            text: "Data Peserta Penerima Qurban Telah Dibuat",
            icon: "success",
            timer: 2000,
            button: false,
        }).then(() => {
            history.push('/admin/qurbansent')
        })
    } else if (state.errorData) {
        swal({
            title: "Gagal",
            text: "Data Peserta Penerima Qurban Gagal Dibuat",
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
            field: 'service_qurban_sent', headerName: 'Penerima Qurban', flex: 0.75, renderCell: (params) => {
                return params.getValue('service_qurban_sent') ? <Check style={{ color: 'green' }} /> : <Clear style={{ color: 'red' }} />
            }
        },
        {
            field: 'amount_sent', headerName: 'Jatah', flex: 0.75, renderCell: (params) => {
                return params.getValue('amount_sent')
            }, editable: true
        },
        {
            field: 'amount_type', headerName: 'Satuan', flex: 0.75, renderCell: (params) => {
                return params.getValue('amount_type')
            }, editable: true
        },
    ];
    console.log(peserta)
    const rows = props.dataRow;
    return (
        <div>
            <DataGrid
                components={{ Toolbar: GridToolbar }}
                rows={rows} loading={state.loading} columns={columns} autoHeight pageSize={20} checkboxSelection onSelectionModelChange={(newSelection) => {
                    const id = newSelection.selectionModel;
                    id.forEach(element => {
                        setpeserta({
                            ...peserta,
                            id_user: id_user,
                            year_hijriah: props.yearHijriah
                        })
                        // console.log(rows)
                        // rows.filter(x => x.id === parseInt(element)))
                        peserta.peserta_qurban.push({
                            id_peserta: rows.find(row => row.id === parseInt(element)).id,
                            amount_sent: rows.find(row => row.id === parseInt(element)).amount_sent,
                            amount_type: rows.find(row => row.id === parseInt(element)).amount_type,
                        })
                    });
                }}
                onRowSelected={(selectionModel) => {
                    if (selectionModel.isSelected) {
                        setpeserta(
                            {
                                ...peserta,
                                id_user: id_user,
                                year_hijriah: props.yearHijriah
                            }
                        )
                        peserta.peserta_qurban.push({
                            id_peserta: selectionModel.data.id,
                            amount_sent: selectionModel.data.amount_sent,
                            amount_type: selectionModel.data.amount_type
                        })
                    } else {
                        const peserta_qurban = peserta.peserta_qurban.filter(item => item.id_peserta !== selectionModel.data.id)
                        setpeserta({
                            ...peserta,
                            peserta_qurban: peserta_qurban
                        })
                    }
                }

                } onEditCellChangeCommitted={(cellChange) => {

                }} />
            <Box my={3}>
                <Grid container spacing={1}>
                    <Grid container spacing={1}>
                        <Grid item xs={2}>
                            {(peserta.peserta_qurban.length > 0 && !state.loading && !state.loadingData) ? <Button variant="contained" color="primary" fullWidth onClick={handlePostPesertaQurban}>Simpan</Button> : <Button variant="contained" color="primary" fullWidth disabled>{state.loadingData ? 'Sedang Diproses' : 'Simpan'}</Button>}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div >
    )
}

export default TableTambahQurbanSent