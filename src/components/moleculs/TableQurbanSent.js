import React, { useEffect, useState } from 'react'
import { DataGrid, GridToolbar, } from '@material-ui/data-grid';
import { Button } from '@material-ui/core';
import { Check, Clear, Delete, Edit, Visibility } from '@material-ui/icons';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStateUpdateDeleteQurbanSent, deleteZakatFitrah, deleteQurbanSent, getDetailZakatFitrah, getDetailQurbanSent, getPesertaZakatFitrahList, getZakatFitrahList, getZakatFitrahListSent, updateZakatFitrah, updateQurbanSent } from '../../config/redux/action';
import moment from 'moment-hijri'
import swal from 'sweetalert';
import { DeleteQurbanSent, GetQurbanSentList } from '../../config/redux/services';
function TableQurbanSent(props) {
    const history = useHistory()
    const dispatch = useDispatch()
    const [qurban, setQurban] = useState({
        year_hijriah: '',
        amount_sent: '',
        notes: '',
        is_qurban_sent: '',
        id_user_qurban_sent: '',
        id_user_amount_sent_updated: '',
        date_qurban_sent: '',
        id_user: JSON.parse(localStorage.getItem('user')).id
    })
    const state = useSelector(state => state.qurbanSent)

    if (state.deleteQurbanSent) {
        swal({
            title: "Berhasil",
            text: "Data Penerima Qurban Telah Dihapus",
            icon: "success",
            timer: 2000,
            button: false,
        }).then(() => {
            dispatch(GetQurbanSentList(moment().iYear()))
        })
    }

    const columns = [
        {
            field: 'id_peserta', headerName: 'ID', flex: 0.3, renderCell: (params) => {
                return params.row.id_peserta
            }
        },
        {
            field: 'name', headerName: 'Nama', flex: 0.8, valueGetter: (params) => {
                return params.row.id_peserta_peserta.name
            }
        },
        {
            field: 'amount_sent', headerName: 'Jatah ', flex: 0.4, editable: true, renderCell: (params) => {
                return params.getValue('amount_sent')
            }
        },
        {
            field: 'amount_type', headerName: 'Satuan', flex: 0.4, editable: true, renderCell: (params) => {
                return params.getValue('amount_type')
            }
        },
        {
            field: 'is_qurban_sent', headerName: 'Status Diberikan', flex: 0.7, renderCell: (params) => {
                return params.getValue('is_qurban_sent') ? <Check style={{ color: 'green' }} /> : <Clear style={{ color: 'red' }} />
            }
        },
        {
            field: 'year_hijriah', headerName: 'Tahun', flex: 0.4, renderCell: (params) => {
                return params.getValue('year_hijriah') + ' H'
            }
        },
        {
            field: 'location', headerName: 'Lokasi', flex: 0.6, valueGetter: (params) => {
                return params.row.id_peserta_peserta.location
            }
        },
        {
            field: 'date_qurban_sent', headerName: 'Tanggal', flex: 0.7, renderCell: (params) => {
                return params.getValue('date_qurban_sent')
            }
        },
        {
            field: 'Action', headerName: 'Action', flex: 0.5, renderCell: (params) => {
                return <div>
                    <Visibility style={{ cursor: 'pointer', color: 'blue' }} onClick={() => {
                        history.push('/admin/qurbansent/lihat/' + params.getValue('id'))
                    }} />
                    <Edit style={{ color: 'orange', cursor: 'pointer' }} onClick={() => {
                        history.push('/admin/qurbansent/ubah/' + params.getValue('id'))
                    }} /><Delete style={{ color: 'red', cursor: 'pointer' }} onClick={() => {
                        dispatch(DeleteQurbanSent(params.getValue('id')));
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
                    // dispatch(getDetailQurbanSent(row.row.id)).then((response) => {
                    //     setQurban({
                    //         ...qurban,
                    //         year_hijriah: response[0].year_hijriah,
                    //         amount_sent: response[0].amount_sent,
                    //         notes: response[0].notes,
                    //         is_qurban_sent: response[0].is_qurban_sent,
                    //         id_user_qurban_sent: response[0].id_user_qurban_sent,
                    //         id_user_amount_sent_updated: response[0].id_user_amount_sent_updated,
                    //         date_qurban_sent: response[0].date_qurban_sent,
                    //     })
                    // })

                }} onEditCellChangeCommitted={(params) => {
                    // const value = params.props.value
                    // if (params.field == 'amount_sent') {
                    //     setQurban({
                    //         ...qurban,
                    //         amount_sent: 5
                    //     })
                    // } else if (params.field == 'amount_sent') {
                    //     setQurban({
                    //         ...qurban,
                    //         amount_sent: value
                    //     })
                    // }
                    // dispatch(updateQurbanSent(params.id, qurban));
                }} />
        </div >
    )
}

export default TableQurbanSent
