import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { OpcionesComercio } from './OpcionesComercio';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import { useParams } from 'react-router-dom';
import { state } from '../types/estados';

import { useDispatch} from 'react-redux';

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


export const DetalleComercio = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { idComercio } = useParams();

    const [comercioActivo, setComercioActivo] = useState(state);
    const { nombreComercio, propietario, fecha, direccion, nombreTipoComercio, opciones, tipoComercio, otro } = comercioActivo;
    const fechaRegistro = new Date(fecha);

    useEffect(() => {
        //dispatch(obtenerComercios());
        obtenerComercioFetch();
    }, [dispatch]);


    const obtenerComercioFetch = async () => {

        const resp = await fetch(`http://localhost:8888/comercios/${idComercio}`);
        const body = await resp.json();
            
        //console.log(body);   
        setComercioActivo(body);
    }
    

    return (
        <div className={classes.root}>
            <div className="card m-5 animate__animated animate__fadeIn fuente">
                <div className="card-header">
                    <div className="row" >
                        <div className="col-1 text-center" >
                            <Link to="/" className="enlace fuente"><HomeIcon className="text-primario" /> <br/> <span  className="text-primario" >Home</span> </Link>
                        </div>
                        <div className="col-9" >
                            <h4 className="card-title text-center"><b>{nombreComercio}</b></h4>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row m-4 P-5">
                        <div className="col-md-4" >
                            <img className="img-fluid animate__animated animate__fadeInDown" src="https://www.quimbiol.com.br/uploads/images/Contact%20Us/east-longmeadow-MA.png" />
                        </div>
                        <div className="col-md-4 mt-4">
                            <h5 className="card-title"><b>Propietario</b></h5>
                            <p className="card-text">{propietario}</p>
                            <h5 className="card-title"><b>Fecha de registro</b></h5>
                            <p className="card-text">{ fechaRegistro.getDate() } - { fechaRegistro.getMonth()+1 } - { fechaRegistro.getFullYear() } </p>
                            <h5 className="card-title"><b>Tipo de comercio</b></h5>
                            <p className="card-text">{nombreTipoComercio}</p>
                        </div>
                        <div className="col-md-4 mt-4">
                            <h5 className="card-title"><b>Direccion</b></h5>
                            <p className="card-text">{direccion}</p>
                            <h5 className="card-title"><b>Caracteristicas</b></h5>
                            <OpcionesComercio {...comercioActivo}  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
