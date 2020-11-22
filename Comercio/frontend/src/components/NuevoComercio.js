import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import { ModalNuevo } from './ModalNuevo';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export const NuevoComercio = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <ModalNuevo />

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>Nombre PROPIERATCIO</Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>Nombre comercio</Paper>
                </Grid>

                <Grid item xs={12} sm={12}>
                    <Paper className={classes.paper}>Drieccion </Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>

                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>Tipo comercio</Paper>
                </Grid>

                <Grid item xs={12} sm={12}>
                    
                </Grid>

            </Grid>
        </div>
    )
}
