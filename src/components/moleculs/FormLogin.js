import { FormControl, FormLabel, TextField, Container, Grid, FormHelperText, RadioGroup, FormControlLabel, Radio, Box, Typography, TextareaAutosize, Button, Card, CardContent, CircularProgress } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { connect, useDispatch, useSelector } from 'react-redux';
import { getDetailuser, postLogin, postuser, updateuser } from '../../config/redux/action';
import swal from 'sweetalert';
import { Redirect, useHistory, useParams } from 'react-router';
import { Login, PostLogin } from '../../config/redux/services';
import { clearAuthData } from '../../config/redux/features/auth/authSlice';
function FormLogin(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();
    const state = useSelector(state => state.auth)
    const [user, setuser] = useState({
        email: '',
        password: ''
    })
    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required()
    });
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) => {
        dispatch(PostLogin(user))
    }
    // checkNotification()
    const handleFormChange = (e) => {
        setValue(e.target.name, e.target.value)
        setuser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    if (state.auth.status === 'Success') {
        localStorage.setItem('user', JSON.stringify(state.auth.data));
        localStorage.setItem('token', state.auth.data.api_token);
        history.push('/admin/peserta')
    } else if (state.auth.status === 'Failed') {
        swal({
            title: "Gagal",
            text: state.auth.message,
            icon: "error",
            button: false,
            timer: 2000
        })
        dispatch(clearAuthData())
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box my={1}>
                <Grid container justify="flex-start" direction="column" >
                    <Grid item lg={12} md={12} sm={12} xs={12} >
                        <FormControl fullWidth variant="outlined">
                            <TextField
                                {...register('email')}
                                label="Email"
                                name='email'
                                onChangeCapture={handleFormChange}
                                variant="outlined"
                                disabled={state.loading} />
                            <Typography variant="caption" style={{ color: 'red' }}>{errors.email?.message}</Typography>
                        </FormControl>
                    </Grid>
                </Grid>
            </Box>
            <Box my={1}>
                <Grid item lg={12} md={12} sm={12} xs={12} >
                    <FormControl fullWidth variant="outlined">
                        <TextField
                            {...register('password')}
                            label="Password"
                            name='password'
                            onChangeCapture={handleFormChange}
                            variant="outlined"
                            type="password"
                            disabled={state.loading} />
                        <Typography variant="caption" style={{ color: 'red' }}>{errors.password?.message}</Typography>
                    </FormControl>
                </Grid>
            </Box>
            <Box my={1}>
                <Grid container justify="center" columns="row" >
                    <Grid item lg={12} md={12} sm={12} xs={12} >
                        {!state.loading ? < Button type="submit" variant="contained" color="primary" fullWidth>Masuk</Button> : < Button type="submit" variant="contained" color="primary" disabled fullWidth>Proses . .</Button>}
                    </Grid>
                </Grid>
            </Box>
        </form >
    )

}

export default FormLogin
