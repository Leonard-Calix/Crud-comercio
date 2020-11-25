import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Caracteristicas } from './Caracteristicas';
// actions
import { obtenerComercios, comercioActivo } from '../actions/comercio';
// Reducer
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    imput: {
        '& > *': {
            margin: theme.spacing(3),
            width: '100%',
        },
    },
}));

export const NuevoComercio = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const { comercioActivo } = useSelector(state => state.comercio);
    const { nombreComercio, propietario, fecha, direccion, nombreTipoComercio, opciones, tipoComercio } = comercioActivo;

    useEffect(() => {
        dispatch(obtenerComercios())
    }, [dispatch]);


    return (
        <div className={classes.root}>
            <div className="card m-5 animate__animated animate__fadeIn">
                <div className="card-header">
                    <h4 className="card-title text-center text-uppercase">{nombreComercio}</h4>
                </div>
                <div className="card-body">
                    <div className="row m-4 P-5">
                        <div className="col-md-6">
                            <h5 className="card-title">PROPIETARIO</h5>
                            <p className="card-text">{propietario}</p>
                        </div>
                        <div className="col-md-6">
                            <h5 className="card-title">DIRECION</h5>
                            <p className="card-text">{direccion}</p>
                        </div>
                    </div>

                    <div className="row m-4 P-5">
                        <div className="col-md-6">
                            <h5 className="card-title">FECHA</h5>
                            <p className="card-text">{fecha}</p>
                        </div>
                        <div className="col-md-6">
                            <h5 className="card-title">Caracteristicas</h5>
                            <Caracteristicas  comercioActivo={comercioActivo}/>

                        </div>
                    </div>
                    <div className="row m-4 P-5">
                        <div className="col-md-6">
                            <h5 className="card-title">TIPO DE COMERCIO</h5>
                            <p className="card-text">{nombreTipoComercio}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
