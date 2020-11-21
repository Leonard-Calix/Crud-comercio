import React, { useReducer, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { CardComercio } from './CardComercio';
import { NavBar } from './NavBar';

// actions
import { obtenerComercios, comercioActivo } from '../actions/comercio';

// Reducer
import { comercioReducer } from '../reducers/comercioReducer';
import { useDispatch, useSelector } from 'react-redux';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(4),
        textAlign: "left",
        color: theme.palette.text.primary
    }
}));

//const [correo, setcorreo] = useState()

const handleInputChance = (event) => {
    console.log(event.target.value);
}

const handleSubmit = () => {
    console.log('Funciona papi');
}


export const ListaComercios = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const { comercios } = useSelector(state => state.comercio);
    //console.log(comercios)

    useEffect(() => {
        dispatch(obtenerComercios())
    }, [dispatch]);

    return (
        <div>
            <div className={classes.root}>

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} >
                        <Paper className={classes.paper}>
                            <Grid container spacing={2}>

                                {
                                    comercios.map(comercio => (
                                        <Grid item xs={12} md={4} sm={12}>
                                            <CardComercio key={comercio.id} { ...comercio } />
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
