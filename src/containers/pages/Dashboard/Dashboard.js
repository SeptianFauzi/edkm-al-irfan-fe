import { Box, Breadcrumbs, Button, Card, CardContent, Container, FormControl, Grid, Hidden, LinearProgress, TextField, Typography } from '@material-ui/core'
import moment from 'moment-hijri';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import AdminTemplate from '../../templates/AdminTemplate'
import CardStatistic from '../../../components/moleculs/CardStatistic';
import CardStatisticCelengan from '../../../components/moleculs/CardStatisticCelengan';
import CardStatisticZakatFitrah from '../../../components/moleculs/CardStatisticZakatFitrah';
import { GetStatistic } from '../../../config/redux/services';
import { useCallback } from 'react';
import { SearchRounded } from '@material-ui/icons';
import CardStatisticPenerimaZakatFitrah from '../../../components/moleculs/CardStatisticPenerimaZakatFitrah';

function Dashboard() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.dashboard)
    const year_hijriah = moment().iYear();
    const [yearhijriah, setyearhijriah] = useState(year_hijriah)
    const handleYearHijriah = useCallback(
        (e) => {
            setyearhijriah(e.target.value)
        },
        [],
    )
    useEffect(() => {
        dispatch(GetStatistic(yearhijriah));
    }, []);
    const schema = yup.object().shape({
        tahunhijriah: yup.number().typeError('Wajib angka').required(),

    });
    const { register, watch, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });
    return (
        <div>
            <AdminTemplate>
                <Container>
                    <Grid item xs={12}>
                        <Box my={2}>
                            <Breadcrumbs aria-label="breadcrumb">
                                <NavLink color="inherit" to={"/admin/dashboard"}>
                                    Dashboard
                                </NavLink>
                            </Breadcrumbs>
                        </Box>
                    </Grid>
                    <Card variant="outlined" style={{ minHeight: '80vh' }}>
                        {state.loading ? <LinearProgress /> : ''}
                        <CardContent>
                            <Grid container direction="row" justify="center" alignItems="center">
                                <Grid item xs={12}>
                                    <Grid container direction="row" justify="space-between" alignItems="flex-start">
                                        <Grid item>
                                            <Grid direction="column" container justify="flex-end" alignItems="flex-end" style={{ marginBlock: '10px' }}>
                                                <Grid direction="row" container justify="flex-end" alignContent="flex-start" spacing={1}>
                                                    <Grid item>
                                                        <FormControl variant="outlined">
                                                            <TextField
                                                                {...register('tahunhijriah')}
                                                                label="Tahun Hijriah"
                                                                name='tahunhijriah'
                                                                variant="outlined"
                                                                value={yearhijriah}
                                                                onChange={handleYearHijriah}
                                                                disabled={state.loading} />
                                                            <Typography variant="caption" style={{ color: 'red' }}>{errors.tahunhijriah?.message}</Typography>
                                                        </FormControl>
                                                    </Grid>

                                                    <Grid item>
                                                        <Button style={{ paddingBlock: '1.1em' }} variant="contained" color="primary" disabled={state.loading} onClick={() => dispatch(GetStatistic(yearhijriah))}><SearchRounded /></Button>
                                                    </Grid>
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs="12">
                                <CardStatistic year_hijriah={yearhijriah} />
                            </Grid>
                            <Grid item xs="12">
                                <CardStatisticCelengan year_hijriah={yearhijriah} />
                            </Grid>
                            <Grid item xs="12">
                                <CardStatisticZakatFitrah year_hijriah={yearhijriah} />
                            </Grid>
                            <Grid item xs="12">
                                <CardStatisticPenerimaZakatFitrah year_hijriah={yearhijriah} />
                            </Grid>
                        </CardContent>
                    </Card>

                </Container>
            </AdminTemplate >
        </div >
    )
}

export default Dashboard