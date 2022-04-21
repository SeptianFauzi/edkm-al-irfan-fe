import { Grid, Typography, Card, CardContent, CircularProgress } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'

function CardStatisticPenerimaZakatFitrah(props) {
    const state = useSelector(state => state.dashboard)

    return (
        <>
            <Typography variant="h5" style={{ marginBlock: '1em' }} >Layanan Penerima Zakat Fitrah</Typography>
            <Grid container direction="row" style={{ width: '100%' }} spacing={2}>
                <Grid item>
                    < Card variant="outlined" style={{ maxHeight: '200px', maxWidth: '300px', minHeight: '150px', minWidth: '300px' }} >
                        <CardContent style={{ padding: 0, margin: 0 }}>
                            {state.loading ?
                                <Grid container direction="column" justify="center" alignItems="center" style={{ minHeight: '150px', width: '100%' }}>
                                    <Grid item xs={12}> <CircularProgress /> </Grid>
                                </Grid>
                                :
                                <Grid container direction="column" justify="center" alignItems="center" style={{ background: '#A8DBCC', minHeight: '150px', width: '100%' }}>
                                    <Typography variant="h5" align="center" style={{ color: 'white' }}>Total Peserta Penerima Zakat Fitrah</Typography>
                                    <Grid item xs={12}>
                                        <Typography variant="h5" align="center" style={{ color: 'white' }}>{state.statistic.total_peserta_penerima_zakat_fitrah ? state.statistic.total_peserta_penerima_zakat_fitrah : 0}</Typography>
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
                                    <Typography variant="h5" align="center" style={{ color: 'white' }}>Total Peserta Yang Sudah Menerima Zakat</Typography>
                                    <Grid item xs={12}>
                                        <Typography variant="h5" align="center" style={{ color: 'white' }}>{state.statistic.total_penerima_zakat_fitrah ? state.statistic.total_penerima_zakat_fitrah : 0}</Typography>
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
                                    <Typography variant="h5" align="center" style={{ color: 'white' }}>Total Peserta Yang Belum Menerima Zakat</Typography>
                                    <Grid item xs={12}>
                                        <Typography variant="h5" align="center" style={{ color: 'white' }}>{state.statistic.total_sisa_penerima_zakat_fitrah ? state.statistic.total_sisa_penerima_zakat_fitrah : 0}</Typography>
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

export default CardStatisticPenerimaZakatFitrah
