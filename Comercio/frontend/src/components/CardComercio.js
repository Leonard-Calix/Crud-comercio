import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import EditIcon from '@material-ui/icons/Edit';
//import swal from 'sweetalert';
import PersonIcon from '@material-ui/icons/Person';
import MenuIcon from '@material-ui/icons/Menu';

import { Redirect, Link } from 'react-router-dom';


import { useDispatch, useSelector } from 'react-redux';

// actions
import { obtenerComercio, EliminarComercio, } from '../actions/comercio';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12
    },
    btns: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
});

export const CardComercio = ({ id, nombreComercio, propietario, direccion, tipoComercio }) => {

    const dispatch = useDispatch();
    const classes = useStyles();

    const btnEliminarComercio = (id) => {
        console.log('Eliminar', id);
        dispatch(EliminarComercio({ id }));
    }

    const btnDetallesComercio = (id) => {
        console.log('Detalles', id);
        dispatch(obtenerComercio({ id }));

        <Redirect to="/nuevo-comercio" />

    }


    return (
        <div>

            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {nombreComercio}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <PersonIcon /> {propietario}
                    </Typography>
                </CardContent>

                <CardActions>
                    <div className={classes.btns}>
                        <ButtonGroup size="small" aria-label="small outlined button group">
                            <Link
                                color="secondary"
                                to="/detalle-comercio"
                                onClick={() => btnDetallesComercio(id)}
                            >
                                <MenuIcon />
                            </Link>
                            <Link
                                color="secondary"
                                variant="body2"
                                to="/editar-comercio"
                                onClick={() => btnDetallesComercio(id)}
                            >
                                <EditIcon />
                            </Link>
                            <Link
                                onClick={() => btnEliminarComercio(id)}
                                color="primary"
                                variant="body2"
                                to="/editar-comercio"
                                onClick={() => btnDetallesComercio(id)}
                            >
                                <DeleteIcon />
                            </Link>

                        </ButtonGroup>
                    </div>
                </CardActions>
            </Card>

        </div >
    )
}
