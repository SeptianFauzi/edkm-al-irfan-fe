import React, { useEffect, useState } from 'react'
import { DataGrid, GridToolbar, } from '@material-ui/data-grid';
import { Button } from '@material-ui/core';
import { Check, Clear, Delete, Edit, Visibility } from '@material-ui/icons';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStateUpdateDeleteZakatFitrahSent, deleteZakatFitrah, deleteZakatFitrahSent, getDetailZakatFitrah, getDetailZakatFitrahSent, getPesertaZakatFitrahList, getZakatFitrahList, getZakatFitrahListSent, updateZakatFitrah, updateZakatFitrahSent } from '../../config/redux/action';
import moment from 'moment-hijri'
import swal from 'sweetalert';
import { DeleteZakatFitrahSent, GetZakatFitrahSentList } from '../../config/redux/services';
function TableZakatFitrahSent(props) {
    const history = useHistory()
    const dispatch = useDispatch()
    const [zakatFitrah, setzakatFitrah] = useState({
        year_hijriah: '',
        amount_sent: '',
        notes: '',
        is_zakat_sent: '',
        id_user_zakat_sent: '',
        id_user_amount_sent_updated: '',
        date_zakat_sent: '',
        id_user: JSON.parse(localStorage.getItem('user')).id
    })
    const state = useSelector(state => state.zakatFitrahSent)

    if (state.deleteZakatFitrahSent) {
        swal({
            title: "Berhasil",
            text: "Data Penerima Zakat Fitrah Telah Dihapus",
            icon: "success",
            timer: 2000,
            button: false,
        }).then(() => {
            dispatch(GetZakatFitrahSentList(moment().iYear()))
        })
    }

    const columns = [
        {
            field: 'id_peserta', headerName: 'ID', flex: 0.3, renderCell: (params) => {
                return params.row.id_peserta
            }
        },
        {
            field: 'id_peserta_peserta', headerName: 'Nama', flex: 0.8, renderCell: (params) => {
                return params.getValue('id_peserta_peserta').name
            }
        },
        {
            field: 'amount_sent', headerName: 'Jatah ', flex: 0.4, editable: true, renderCell: (params) => {
                return params.getValue('amount_sent') + ' Liter'
            }
        },
        {
            field: 'is_zakat_sent', headerName: 'Status Diberikan', flex: 0.7, renderCell: (params) => {
                return params.getValue('is_zakat_sent') ? <Check style={{ color: 'green' }} /> : <Clear style={{ color: 'red' }} />
            }
        },
        {
            field: 'year_hijriah', headerName: 'Tahun', flex: 0.4, renderCell: (params) => {
                return params.getValue('year_hijriah') + ' H'
            }
        },
        {
            field: 'date_zakat_sent', headerName: 'Tanggal', flex: 0.7, renderCell: (params) => {
                return params.getValue('date_zakat_sent')
            }
        },
        {
            field: 'Action', headerName: 'Action', flex: 0.5, renderCell: (params) => {
                return <div>
                    <Visibility style={{ cursor: 'pointer', color: 'blue' }} onClick={() => {
                        history.push('/admin/penerimazakatfitrah/lihat/' + params.getValue('id'))
                    }} />
                    <Edit style={{ color: 'orange', cursor: 'pointer' }} onClick={() => {
                        history.push('/admin/penerimazakatfitrah/ubah/' + params.getValue('id'))
                    }} /><Delete style={{ color: 'red', cursor: 'pointer' }} onClick={() => {
                        dispatch(DeleteZakatFitrahSent(params.getValue('id')));
                    }} />
                </div >
            }
        }

    ];
    const rows = props.dataRow;
    return (
        <div>
            <DataGrid
                components={{ Toolbar: GridToolbar }}
                loading={state.loading} rows={rows} columns={columns} autoHeight pageSize={20} onRowDoubleClick={(row) => {
                    // dispatch(getDetailZakatFitrahSent(row.row.id)).then((response) => {
                    //     setzakatFitrah({
                    //         ...zakatFitrah,
                    //         year_hijriah: response[0].year_hijriah,
                    //         amount_sent: response[0].amount_sent,
                    //         notes: response[0].notes,
                    //         is_zakat_sent: response[0].is_zakat_sent,
                    //         id_user_zakat_sent: response[0].id_user_zakat_sent,
                    //         id_user_amount_sent_updated: response[0].id_user_amount_sent_updated,
                    //         date_zakat_sent: response[0].date_zakat_sent,
                    //     })
                    // })

                }} onEditCellChangeCommitted={(params) => {
                    // const value = params.props.value
                    // if (params.field == 'amount_sent') {
                    //     setzakatFitrah({
                    //         ...zakatFitrah,
                    //         amount_sent: 5
                    //     })
                    // } else if (params.field == 'amount_sent') {
                    //     setzakatFitrah({
                    //         ...zakatFitrah,
                    //         amount_sent: value
                    //     })
                    // }
                    // dispatch(updateZakatFitrahSent(params.id, zakatFitrah));
                }} />
        </div >
    )
}

export default TableZakatFitrahSent
