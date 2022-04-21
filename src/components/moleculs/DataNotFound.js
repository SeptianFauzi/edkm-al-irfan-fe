import React from 'react'
import Grid from '@material-ui/core/Grid'

import imageNotFound from '../../assets/img/datanotfound.jpg'
import { Card, CardContent } from '@material-ui/core'
function DataNotFound() {
    return (
        <div>
            <Card>
                <CardContent>
                    <Grid container spacing={1} justify="center" direction="column" alignItems="center" style={{ minHeight: '75vh' }}>
                        <img src={imageNotFound} alt="Logo" width="600px" />
                    </Grid>
                </CardContent>
            </Card>

        </div>
    )
}

export default DataNotFound
