import React, { useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { CardComercio } from './CardComercio';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

// actions
import { obtenerComercios, comercioActivo } from '../actions/comercio';

// Reducer
import { useDispatch, useSelector } from 'react-redux';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(4),
        textAlign: "left",
        color: theme.palette.text.primary
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

//const [correo, setcorreo] = useState()

const handleInputChance = (event) => {
    console.log(event.target.value);
}

const handleSubmit = () => {
    console.log('Metodo para guardar el comercio');
}

const handleModal = () => {
    console.log('Abriendo MODAL');
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
                <Grid spacing={2}>
                    <Grid item xs={12} sm={12} >
                        <Paper className={classes.paper}>
                            <Typography gutterBottom variant="h4" component="h2">
                                Lista de comercios
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={12} >

                        <Paper className={classes.paper}>
                            <Grid container spacing={2}>
                                {
                                    comercios.map(comercio => (
                                        <Grid key={comercio.id} item xs={12} md={4} sm={12}>
                                            <CardComercio  {...comercio} />
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </Paper>
                        <Fab color="primary" onClick={handleModal} className={classes.fab}>
                            <AddIcon />
                        </Fab>
                    </Grid>
                </Grid>
            </div>

        </div>
    )
}
