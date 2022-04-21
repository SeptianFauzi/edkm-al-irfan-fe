import React, { useEffect, useState } from 'react'
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { Button } from '@material-ui/core';
import { Check, Clear, Delete, Edit, Visibility } from '@material-ui/icons';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCelengan, getDetailCelengan, getPesertaCelenganList, getCelenganList, updateCelengan } from '../../config/redux/action';
import moment from 'moment-hijri'
import swal from 'sweetalert';
import { DeleteCelengan, GetCelenganList } from '../../config/redux/services';
function TableCelengan(props) {
    const history = useHistory()
    const dispatch = useDispatch()
    const [celengan, setcelengan] = useState({
        year_hijriah: '',
        amount_received: '',
        notes: '',
        is_money_received: '',
        id_user_money_received: '',
        id_user_amount_received_updated: '',
        date_money_received: '',
        id_user: JSON.parse(localStorage.getItem('user')).id
    })
    const state = useSelector(state => state.celengan)

    if (state.deleteCelengan) {
        swal({
            title: "Berhasil",
            text: "Data Celengan Telah Dihapus",
            icon: "success",
            timer: 2000,
            button: false,
        }).then(() => {
            dispatch(GetCelenganList(moment().iYear()))
        })
    }
    const rows = props.dataRow;
    const columns = [
        {
            field: 'id_peserta', headerName: 'ID', flex: 0.3, renderCell: (params) => {
                return params.row.id_peserta
            }
        },
        {
            field: 'id_peserta_peserta', headerName: 'Nama', flex: 0.8, valueGetter: (params) => {
                console.log(params.row.id_peserta_peserta.name)
                return params.row.id_peserta_peserta.name
            }
        },
        {
            field: 'amount', headerName: 'Jumlah', flex: 0.8, editable: true, renderCell: (params) => {
                return 'Rp. ' + params.getValue('amount').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            }
        },
        {
            field: 'is_money_received', headerName: 'Diterima', flex: 0.5, editable: true, renderCell: (params) => {
                return params.getValue('is_money_received') ? <Check style={{ color: 'green' }} /> : <Clear style={{ color: 'red' }} />
            }
        },
        {
            field: 'is_money_box_sent', headerName: 'Diberikan', flex: 0.5, renderCell: (params) => {
                return params.getValue('is_money_box_sent') ? <Check style={{ color: 'green' }} /> : <Clear style={{ color: 'red' }} />
            }
        },
        {
            field: 'year_hijriah', headerName: 'Tahun', flex: 0.4, renderCell: (params) => {
                return params.getValue('year_hijriah') + ' H'
            }
        },
        {
            field: 'date_money_received', headerName: 'Tanggal Diterima', flex: 0.7, renderCell: (params) => {
                return params.getValue('date_money_received')
            }
        },
        {
            field: 'date_money_box_sent', headerName: 'Tanggal Diberikan', flex: 0.7, renderCell: (params) => {
                return params.getValue('date_money_box_sent')
            }
        },
        {
            field: 'Action', headerName: 'Action', flex: 0.5, renderCell: (params) => {
                return <div>
                    <Visibility style={{ cursor: 'pointer', color: 'blue' }} onClick={() => {
                        history.push('/admin/celengan/lihat/' + params.getValue('id'))
                    }} />
                    <Edit style={{ color: 'orange', cursor: 'pointer' }} onClick={() => {
                        history.push('/admin/celengan/ubah/' + params.getValue('id'))
                    }} /><Delete style={{ color: 'red', cursor: 'pointer' }} onClick={() => {
                        dispatch(DeleteCelengan(params.getValue('id')));
                    }} />
                </div >
            }
        }

    ];
    return (
        <DataGrid loading={state.loading} rows={rows} columns={columns}
            components={{
                Toolbar: GridToolbar,
            }} autoHeight pageSize={10} onRowDoubleClick={(row) => {
                // dispatch(getDetailCelengan(row.row.id)).then((response) => {
                //     setcelengan({
                //         ...celengan,
                //         year_hijriah: response[0].year_hijriah,
                //         amount_sent: response[0].amount_sent,
                //         amount_received: response[0].amount_received,
                //         notes: response[0].notes,
                //         is_money_box_sent: response[0].is_money_box_sent,
                //         is_money_received: response[0].is_money_received,
                //         id_user_money_box_sent: response[0].id_user_money_box_sent,
                //         id_user_money_received: response[0].id_user_money_received,
                //         id_user_amount_sent_updated: response[0].id_user_amount_sent_updated,
                //         id_user_amount_received_updated: response[0].id_user_amount_received_updated,
                //         date_money_received: response[0].date_money_received,
                //         date_money_box_sent: response[0].date_money_box_sent,
                //     })
                // })

            }} onEditCellChangeCommitted={(params) => {
                const value = params.props.value
                // if (params.field == 'amount_received') {
                //     setcelengan({
                //         ...celengan,
                //         amount_received: 5
                //     })
                // } else if (params.field == 'amount_sent') {
                //     setcelengan({
                //         ...celengan,
                //         amount_sent: value
                //     })
                // }
                // dispatch(updateCelengan(params.id, celengan));
            }} />
    )
}

export default TableCelengan
