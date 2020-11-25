import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


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

export const CardComercio = ({ id, nombreComercio, propietario, nombreTipoComercio, direccion, tipoComercio, handleClickRemove }) => {

    const dispatch = useDispatch();

    const btnEliminarComercio = (id) => {
        //console.log('Eliminar', id);
        dispatch(EliminarComercio({ id }));
        handleClickRemove();
    }

    const btnDetallesComercio = (idComercio) => {
        //console.log('Detalles', id);
        dispatch(obtenerComercio({ id: idComercio }));
    }


    return (
        <div className="col-lg-4 col-md-4 col-sm-6 col-12 p-1 animate__animated animate__fadeIn" >
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{nombreComercio}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{propietario}</h6>
                    <p className="card-text">{nombreTipoComercio}</p>
                    <hr></hr>
                    <nav className="nav nav-pills nav-justified">
                        <Link onClick={() => btnDetallesComercio(id)} to="/detalle-comercio" className="btn nav-item nav-link">Detalles</Link>
                        <Link onClick={() => btnDetallesComercio(id)} to={`/editar-comercio/${id}`} className="btn nav-item nav-link">Editar</Link>
                        <Link onClick={() => btnEliminarComercio(id)} to="/" className="btn nav-item nav-link">Eliminar</Link>
                    </nav>

                </div>
            </div>
        </div>
    )
}
