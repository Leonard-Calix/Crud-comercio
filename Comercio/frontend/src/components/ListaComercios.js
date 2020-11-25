import React, { useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { CardComercio } from './CardComercio';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { ModalNuevo } from './ModalNuevo';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import { Alert } from '@material-ui/lab';

// actions
import { obtenerComercios, comercioActivo } from '../actions/comercio';
// Reducer
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        background: '#073b4c',
    },
}));

export const ListaComercios = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const [show, setShow] = React.useState(false);
    const [alert, setAlert] = React.useState(false);
    const [alertRemove, setAlertRemove] = React.useState(false);
    const { comercios } = useSelector(state => state.comercio);

    useEffect(() => {
        dispatch(obtenerComercios());
    }, []);

    const handleOpen = () => {
        setShow(true);
        //console.log('Hola');
    };

    const handleClose = () => {
        setShow(false);
    };

    const handleClick = () => {
        setAlert(true);
      };

      const handleClickRemove = () => {
        setAlertRemove(true);
      };
    
      const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setAlert(false);
        setAlertRemove(false);
      };

    return (
        <div className="container-fluid" >

            <div className="row" >
                <div className="col-12 m-4 " >
                    <h2 className="card-title text-center animate__animated animate__zoomIn" >Lista de comercios</h2>
                </div>
            </div>
            <div className="row" >
                {
                    comercios.map(comercio => (
                        <CardComercio handleClickRemove={handleClickRemove} key={comercio.id} {...comercio} />
                    ))
                }
                <Fab onClick={handleOpen} className={classes.fab}>
                    <AddIcon className="text-white" />
                </Fab>
            </div>

            <ModalNuevo handleOpen={handleOpen} handleClick={handleClick} handleClose={handleClose}  show={show} setShow={setShow} />
           
            <Snackbar open={alert} autoHideDuration={2000} onClose={handleCloseAlert}>
                <Alert onClose={handleCloseAlert} className="bg-success text-white text-uppercase" severity="success">
                    Comercio agregado con exito
                </Alert>
            </Snackbar>
            <Snackbar open={alertRemove} autoHideDuration={2000} onClose={handleCloseAlert}>
                <Alert onClose={handleCloseAlert} className="bg-danger text-white text-uppercase" severity="error">
                    Comercio eliminado con exito
                </Alert>
            </Snackbar>
        </div>
    )
}
