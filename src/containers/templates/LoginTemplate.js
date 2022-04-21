import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Login from '../pages/Login/Login'



function LoginTemplate() {
    return (
        <div style={{ backgroundColor: '#A8DBCC' }}>
            <Container>
                <Grid container justify="center" alignItems="center" direction="row">
                    <Grid item xs={12}>
                        <Grid container justify="center" alignItems="center" direction="column" style={{ minHeight: '100vh' }}>
                            <Login />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default LoginTemplate
