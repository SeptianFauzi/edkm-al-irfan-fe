import React, { useEffect, useState } from 'react'
import { DataGrid, GridToolbar, } from '@material-ui/data-grid';
import { Button } from '@material-ui/core';
import { Check, Clear, Delete, Edit, Visibility } from '@material-ui/icons';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { deleteZakatFitrah, getDetailZakatFitrah, getPesertaZakatFitrahList, getZakatFitrahList, updateZakatFitrah } from '../../config/redux/action';
import moment from 'moment-hijri'
import swal from 'sweetalert';
import { DeleteZakatFitrahReceived, GetZakatFitrahReceivedList } from '../../config/redux/services';
function TableZakatFitrah(props) {
    const history = useHistory()
    const dispatch = useDispatch()
    const [zakatFitrah, setzakatFitrah] = useState({
        year_hijriah: '',
        amount_received: '',
        notes: '',
        is_zakat_received: '',
        id_user_zakat_received: '',
        id_user_amount_received_updated: '',
        date_zakat_received: '',
        id_user: JSON.parse(localStorage.getItem('user')).id
    })
    const state = useSelector(state => state.zakatFitrahReceived)

    if (state.deleteZakatFitrahReceived) {
        swal({
            title: "Berhasil",
            text: "Data ZakatFitrah Telah Dihapus",
            icon: "success",
            timer: 2000,
            button: false,
        }).then(() => {
            dispatch(GetZakatFitrahReceivedList(moment().iYear()))
        })
    }

    const columns = [
        {
            field: 'id_peserta', headerName: 'ID', flex: 0.3, renderCell: (params) => {
                return params.row.id_peserta
            }
        },
        {
            field: 'id_peserta_peserta', headerName: 'Nama', flex: 0.8, valueGetter: (params) => {
                return params.row.id_peserta_peserta.name
            }
        },
        {
            field: 'kulak', headerName: 'Kulak', flex: 0.4, editable: true, renderCell: (params) => {
                return params.getValue('amount_received') === '0' ? '0' : params.getValue('amount_received') / 3.25
            }
        },
        {
            field: 'amount_received', headerName: 'Jumlah', flex: 0.4, editable: true, renderCell: (params) => {
                return params.getValue('amount_received') + ' Liter'
            }
        },
        {
            field: 'is_zakat_received', headerName: 'Status Dikumpulkan', flex: 0.7, renderCell: (params) => {
                return params.getValue('is_zakat_received') ? <Check style={{ color: 'green' }} /> : <Clear style={{ color: 'red' }} />
            }
        },
        {
            field: 'year_hijriah', headerName: 'Tahun', flex: 0.4, renderCell: (params) => {
                return params.getValue('year_hijriah') + ' H'
            }
        },
        {
            field: 'date_zakat_received', headerName: 'Tanggal', flex: 0.7, renderCell: (params) => {
                return params.getValue('date_zakat_received')
            }
        },
        {
            field: 'Action', headerName: 'Action', flex: 0.5, renderCell: (params) => {
                return <div>
                    <Visibility style={{ cursor: 'pointer', color: 'blue' }} onClick={() => {
                        history.push('/admin/zakatfitrah/lihat/' + params.getValue('id'))
                    }} />
                    <Edit style={{ color: 'orange', cursor: 'pointer' }} onClick={() => {
                        history.push('/admin/zakatfitrah/ubah/' + params.getValue('id'))
                    }} /><Delete style={{ color: 'red', cursor: 'pointer' }} onClick={() => {
                        dispatch(DeleteZakatFitrahReceived(params.getValue('id')));
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
                loading={state.loading} rows={rows} columns={columns} autoHeight pageSize={10} onRowDoubleClick={(row) => {
                    // dispatch(getDetailZakatFitrah(row.row.id)).then((response) => {
                    //     setzakatFitrah({
                    //         ...zakatFitrah,
                    //         year_hijriah: response[0].year_hijriah,
                    //         amount_sent: response[0].amount_sent,
                    //         amount_received: response[0].amount_received,
                    //         notes: response[0].notes,
                    //         is_zakat_sent: response[0].is_zakat_sent,
                    //         is_zakat_received: response[0].is_zakat_received,
                    //         id_user_zakat_sent: response[0].id_user_zakat_sent,
                    //         id_user_zakat_received: response[0].id_user_zakat_received,
                    //         id_user_amount_sent_updated: response[0].id_user_amount_sent_updated,
                    //         id_user_amount_received_updated: response[0].id_user_amount_received_updated,
                    //         date_zakat_received: response[0].date_zakat_received,
                    //         date_zakat_sent: response[0].date_zakat_sent,
                    //     })
                    // })

                }} onEditCellChangeCommitted={(params) => {
                    // const value = params.props.value
                    // if (params.field == 'amount_received') {
                    //     setzakatFitrah({
                    //         ...zakatFitrah,
                    //         amount_received: 5
                    //     })
                    // } else if (params.field == 'amount_sent') {
                    //     setzakatFitrah({
                    //         ...zakatFitrah,
                    //         amount_sent: value
                    //     })
                    // }
                    // dispatch(updateZakatFitrah(params.id, zakatFitrah));
                }} />
        </div >
    )
}

export default TableZakatFitrah
