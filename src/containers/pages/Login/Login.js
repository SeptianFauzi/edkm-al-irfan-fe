import { Box, Card, CardContent, Grid, LinearProgress, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import FormLogin from '../../../components/moleculs/FormLogin'

import iconMesjid from '../../../assets/img/logoDKMAlIrfan.png';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';


function Login() {
    const state = useSelector(state => state.auth)
    const history = useHistory();
    useEffect(() => {
        checkLogin()
    }, [])
    const checkLogin = () => {
        if (localStorage.getItem('token')) {
            history.push('/admin/peserta');
        } else {
        }
    }
    return (
        <Card style={{ minWidth: '50%' }}>
            {state.loading ? <LinearProgress /> : ''}
            <CardContent>
                <Grid container spacing={1} direction="column" justify="center">
                    <Box m={10}>
                        <Grid container spacing={1} direction="row" justify="center">
                            <img src={iconMesjid} alt="Icon Mesjid" width="100px" />
                        </Grid>
                        <Box my={2}>
                            <Typography variant="h6" color="primary" align="center">E-DKM AL-IRFAN</Typography>
                        </Box>
                        <FormLogin />
                    </Box>
                </Grid>
            </CardContent>
        </Card >
    )
}

export default Login
