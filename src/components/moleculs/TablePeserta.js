import React, { useEffect } from 'react'
import { DataGrid, GridToolbar, } from '@material-ui/data-grid';
import { Button } from '@material-ui/core';
import { Check, Clear, Delete, Edit, StarOutlined, Visibility } from '@material-ui/icons';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { DeletePeserta, GetPesertaList } from '../../config/redux/services';
import { resetErrorData } from '../../config/redux/features/peserta/pesertaSlice';
function TablePeserta(props) {
    const history = useHistory()
    const dispatch = useDispatch()
    const state = useSelector(state => state.peserta)

    if (state.deletePeserta) {
        swal({
            title: "Berhasil",
            text: "Data Peserta Telah Dihapus",
            icon: "success",
            timer: 2000,
            button: false,
        }).then(() => {
            dispatch(GetPesertaList())
        })
    } else if (state.errorData) {
        swal({
            title: "Gagal",
            text: "Data Peserta Gagal DIhapus",
            icon: "error",
            timer: 2000,
            button: false,
        })
        dispatch(resetErrorData())
    }

    const columns = [
        {
            field: 'id', headerName: 'ID', flex: 0.4
        },
        { field: 'name', headerName: 'Nama', flex: 0.6 },
        {
            field: 'is_person', headerName: 'Warga', renderCell: (params) => {
                return params.getValue('is_person') ? <Check style={{ color: 'green' }} /> : <Clear style={{ color: 'red' }} />
            }
        },
        {
            field: 'service_money', headerName: 'Celengan', flex: 0.5, renderCell: (params) => {
                return params.getValue('service_money') ? <Check style={{ color: 'green' }} /> : <Clear style={{ color: 'red' }} />
            }
        },
        {
            field: 'service_zakat_sent', headerName: 'Jatah Zakat', flex: 0.6, renderCell: (params) => {
                return params.getValue('service_zakat_sent') ? <Check style={{ color: 'green' }} /> : <Clear style={{ color: 'red' }} />
            }
        },
        {
            field: 'service_zakat_received', headerName: 'Zakat', flex: 0.4, renderCell: (params) => {
                return params.getValue('service_zakat_received') ? <Check style={{ color: 'green' }} /> : <Clear style={{ color: 'red' }} />
            }
        },
        {
            field: 'service_qurban_sent', headerName: 'Jatah Qurban', flex: 0.6, renderCell: (params) => {
                return params.getValue('service_qurban_sent') ? <Check style={{ color: 'green' }} /> : <Clear style={{ color: 'red' }} />
            }
        },
        {
            field: 'service_qurban_received', headerName: 'Qurban', flex: 0.5, renderCell: (params) => {
                return params.getValue('service_qurban_received') ? <Check style={{ color: 'green' }} /> : <Clear style={{ color: 'red' }} />
            }
        },
        {
            field: 'location', headerName: 'Lokasi', flex: 0.5, renderCell: (params) => {
                return params.getValue('location')
            }
        },
        {
            field: 'Action', headerName: 'Action', flex: 0.5, renderCell: (params) => {
                return <div>
                    <Visibility style={{ color: 'blue', cursor: 'pointer' }} onClick={() => {
                        if (!state.loadingDelete) {
                            history.push('/admin/peserta/lihat/' + params.getValue('id'))
                        }
                    }} />
                    <Edit style={{ color: 'orange', cursor: 'pointer' }} onClick={() => {
                        if (!state.loadingDelete) {
                            history.push('/admin/peserta/ubah/' + params.getValue('id'))
                        }
                    }} /><Delete style={{ color: 'red', cursor: 'pointer' }} onClick={() => {
                        if (!state.loadingDelete) {
                            dispatch(DeletePeserta(params.getValue('id')));
                        }
                    }} />
                </div >
            }
        }
    ];
    const rows = props.dataRow;
    return (
        <div style={{ minHeight: '500px', width: '100%' }}>
            <DataGrid loading={state.loading} components={{
                Toolbar: GridToolbar,
            }} style={{ textAlign: 'center' }} onSelectionModelChange={(newSelection) => {

            }} rows={rows} columns={columns} autoHeight pageSize={10} />
        </div>
    )
}

export default TablePeserta
