import { Grid, Typography, Card, CardContent, Divider, LinearProgress, CircularProgress } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import QRCode from 'react-qr-code';
import DataNotFound from './DataNotFound';
import { GetDetailqurbanSent, GetPesertaQurbanSentList, GetQurbanSentList, GetStatusSelesaiQurbanSent, GetStatusSisaQurbanSent } from '../../config/redux/services';
import { Skeleton } from "@material-ui/lab";
function CardStatistic(props) {
    const dispatch = useDispatch();
    const params = useParams();
    const { year_hijriah, location, layanan } = props;
    const state = useSelector(state => state.dashboard)
    return (
        <>
            <Typography variant="h5" style={{ marginBlock: '1.5em' }} >Layanan Qurban</Typography>
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
                                    <Typography variant="h5" align="center" style={{ color: 'white' }}>Total Penerima Qurban</Typography>
                                    <Grid item xs={12}>
                                        <Typography variant="h5" align="center" style={{ color: 'white' }}>{state.statistic.total_penerima_qurban ? state.statistic.total_penerima_qurban : 0}</Typography>
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
                                    <Typography variant="h5" align="center" style={{ color: 'white' }}>Sisa</Typography>
                                    <Grid item xs={12}>
                                        <Typography variant="h5" align="center" style={{ color: 'white' }}>{state.statistic.total_sisa_qurban ? state.statistic.total_sisa_qurban : 0}</Typography>
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
                                    <Typography variant="h5" align="center" style={{ color: 'white' }}>Dikirim</Typography>
                                    <Grid item xs={12}>
                                        <Typography variant="h5" align="center" style={{ color: 'white' }}>{state.statistic.total_dikirim_qurban ? state.statistic.total_dikirim_qurban : 0}</Typography>
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

export default CardStatistic
