import { Grid, Typography, Card, CardContent, Divider, LinearProgress, CircularProgress } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { thousandSeparator } from '../../utils/commonFunction';



function CardStatisticCelengan(props) {
    const state = useSelector(state => state.dashboard)


    return (
        <>
            <Typography variant="h5" style={{ marginBlock: '1em' }} >Layanan Celengan Dana Sosial</Typography>
            <Grid container direction="row" style={{ width: '100%' }} spacing={2}>
                <Grid item>
                    < Card variant="outlined" style={{ maxHeight: '200px', maxWidth: '300px', minHeight: '150px', minWidth: '300px' }} >
                        <CardContent style={{ padding: 0, margin: 0 }}>
                            {/* ? <Skeleton variant="rect" height={300} /> : */}
                            {state.loading ?
                                <Grid container direction="column" justify="center" alignItems="center" style={{ minHeight: '150px', width: '100%' }}>
                                    <Grid item xs={12}> <CircularProgress /> </Grid>
                                </Grid>
                                :
                                <Grid container direction="column" justify="center" alignItems="center" style={{ background: '#A8DBCC', minHeight: '150px', width: '100%' }}>
                                    <Typography variant="h5" align="center" style={{ color: 'white' }}>Total Peserta Celengan</Typography>
                                    <Grid item xs={12}>
                                        <Typography variant="h5" align="center" style={{ color: 'white' }}>{state.statistic.total_peserta_celengan ? state.statistic.total_peserta_celengan : 0}</Typography>
                                    </Grid>
                                </Grid>
                            }
                        </CardContent>
                    </Card >
                </Grid>
                <Grid item>
                    < Card variant="outlined" style={{ maxHeight: '200px', maxWidth: '300px', minHeight: '150px', minWidth: '300px' }} >
                        <CardContent style={{ padding: 0, margin: 0 }}>
                            {state.loading ?
                                <Grid container direction="column" justify="center" alignItems="center" style={{ minHeight: '150px', width: '100%' }}>
                                    <Grid item xs={12}> <CircularProgress /> </Grid>
                                </Grid>
                                :
                                <Grid container direction="column" justify="center" alignItems="center" style={{ background: '#A8DBCC', minHeight: '150px', width: '100%' }}>
                                    <Typography variant="h5" align="center" style={{ color: 'white' }}>Celengan Dikumpulkan</Typography>
                                    <Grid item xs={12}>
                                        <Typography variant="h5" align="center" style={{ color: 'white' }}>{state.statistic.total_dikumpulkan_celengan ? state.statistic.total_dikumpulkan_celengan : 0}</Typography>
                                    </Grid>
                                </Grid>
                            }
                        </CardContent>
                    </Card >
                </Grid>
                <Grid item>
                    < Card variant="outlined" style={{ maxHeight: '200px', maxWidth: '300px', minHeight: '150px', minWidth: '300px' }} >
                        <CardContent style={{ padding: 0, margin: 0 }}>
                            {/* ? <Skeleton variant="rect" height={300} /> : */}
                            {state.loading ?
                                <Grid container direction="column" justify="center" alignItems="center" style={{ minHeight: '150px', width: '100%' }}>
                                    <Grid item xs={12}> <CircularProgress /> </Grid>
                                </Grid>
                                :
                                <Grid container direction="column" justify="center" alignItems="center" style={{ background: '#A8DBCC', minHeight: '150px', width: '100%' }}>
                                    <Typography variant="h5" align="center" style={{ color: 'white' }}>Celengan Belum Dikumpulkan</Typography>
                                    <Grid item xs={12}>
                                        <Typography variant="h5" align="center" style={{ color: 'white' }}>{state.statistic.total_sisa_celengan_belum_dikumpulkan ? state.statistic.total_sisa_celengan_belum_dikumpulkan : 0}</Typography>
                                    </Grid>
                                </Grid>
                            }
                        </CardContent>
                    </Card >
                </Grid>
                <Grid item>
                    < Card variant="outlined" style={{ maxHeight: '200px', maxWidth: '300px', minHeight: '150px', minWidth: '300px' }} >
                        <CardContent style={{ padding: 0, margin: 0 }}>
                            {state.loading ?
                                <Grid container direction="column" justify="center" alignItems="center" style={{ minHeight: '150px', width: '100%' }}>
                                    <Grid item xs={12}> <CircularProgress /> </Grid>
                                </Grid>
                                :
                                <Grid container direction="column" justify="center" alignItems="center" style={{ background: '#A8DBCC', minHeight: '150px', width: '100%' }}>
                                    <Typography variant="h5" align="center" style={{ color: 'white' }}>Celengan Dikirim</Typography>
                                    <Grid item xs={12}>
                                        <Typography variant="h5" align="center" style={{ color: 'white' }}>{state.statistic.total_dikirim_celengan ? state.statistic.total_dikirim_celengan : 0}</Typography>
                                    </Grid>
                                </Grid>
                            }
                        </CardContent>
                    </Card >
                </Grid>
                <Grid item>
                    < Card variant="outlined" style={{ maxHeight: '200px', maxWidth: '300px', minHeight: '150px', minWidth: '300px' }} >
                        <CardContent style={{ padding: 0, margin: 0 }}>
                            {state.loading ?
                                <Grid container direction="column" justify="center" alignItems="center" style={{ minHeight: '150px', width: '100%' }}>
                                    <Grid item xs={12}> <CircularProgress /> </Grid>
                                </Grid>
                                :
                                <Grid container direction="column" justify="center" alignItems="center" style={{ background: '#A8DBCC', minHeight: '150px', width: '100%' }}>
                                    <Typography variant="h5" align="center" style={{ color: 'white' }}>Celengan Belum Dikirim</Typography>
                                    <Grid item xs={12}>
                                        <Typography variant="h5" align="center" style={{ color: 'white' }}>{state.statistic.total_sisa_celengan_belum_dikirim ? state.statistic.total_sisa_celengan_belum_dikirim : 0}</Typography>
                                    </Grid>
                                </Grid>
                            }
                        </CardContent>
                    </Card >
                </Grid>
                <Grid item>
                    < Card variant="outlined" style={{ maxHeight: '200px', maxWidth: '300px', minHeight: '150px', minWidth: '300px' }} >
                        <CardContent style={{ padding: 0, margin: 0 }}>
                            {state.loading ?
                                <Grid container direction="column" justify="center" alignItems="center" style={{ minHeight: '150px', width: '100%' }}>
                                    <Grid item xs={12}> <CircularProgress /> </Grid>
                                </Grid>
                                :
                                <Grid container direction="column" justify="center" alignItems="center" style={{ background: '#A8DBCC', minHeight: '150px', width: '100%' }}>
                                    <Typography variant="h5" align="center" style={{ color: 'white' }}>Total Uang Celengan</Typography>
                                    <Grid item xs={12}>
                                        <Typography variant="h5" align="center" style={{ color: 'white' }}>Rp. {state.statistic.total_uang_celengan ? thousandSeparator(state.statistic.total_uang_celengan) : 0}</Typography>
                                    </Grid>
                                </Grid>
                            }
                        </CardContent>
                    </Card >
                </Grid>
            </Grid>
        </>
    )
}

export default CardStatisticCelengan
