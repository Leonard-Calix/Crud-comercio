import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch } from 'react-redux';
import { tiposComercios, opcionesComercios } from '../types/tiposComercios';
import { modalStyle } from '../styles/modal';
import { useForm } from '../hooks/useForm';
import { useFormCheckbox } from '../hooks/useFormCheckbox';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import swal from 'sweetalert';
import Snackbar from '@material-ui/core/Snackbar';
import { Alert } from '@material-ui/lab';

import {
    DatePicker,
    TimePicker,
    DateTimePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';


// actions
import { agregarComercio } from '../actions/comercio';
import { caracteristicas, state } from '../types/estados';


const useStyles = makeStyles(modalStyle);

export const ModalNuevo = ({ handleOpen, handleClose, show, setShow, handleClick }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [alertRemove, setAlertRemove] = React.useState(false);

    const [values, handelImputChanche, resetState] = useForm(state);
    const [selectedDate, handleDateChange] = useState(new Date());
    const { nombreComercio, propietario, direccion, fecha, tipoComercio } = values;
    const [valuesCheck, handelImputChancheCheck] = useFormCheckbox(caracteristicas);
    const { cafeterias, restaurantes, heladeria, muebles, electrodomesticos, ferreterias, ventasConstruccion, materialesElectrico, bombas, otros } = valuesCheck;
    const { otro } = values;

    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setAlertRemove(false);
    };

    const handleSubmit = () => {
        nombreTipoComercio();
        values.fecha = selectedDate;
        values.opciones = JSON.stringify(valuesCheck);
        //console.log(values);

        if (validarFomulario()) {
            dispatch((agregarComercio(values)));
            setShow(false);
            resetState(state);
            handleClick();
            //resetState({});
        } else {
            //console.log('Error');
            setAlertRemove(true);


        }

    };

    const nombreTipoComercio = () => {
        if (tipoComercio == 0) values.nombreTipoComercio = 'Comida/Restaurantes';
        if (tipoComercio == 1) values.nombreTipoComercio = 'Hogar';
        if (tipoComercio == 2) values.nombreTipoComercio = 'Construccion';
    }

    const validarFomulario = () => {

        if (nombreComercio.trim().length === 0) return false;
        if (propietario.trim().length === 0) return false;
        if (direccion.trim().length === 0) return false;

        return true;
    }

    return (
        <div className="fuente">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="animate__animated animate__zoomIn" >Nuevo comercio</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Grid container>
                        <Grid item xs={12} sm={6}>
                            <div className={classes.imput} noValidate autoComplete="off">
                                <TextField className="fuente" name="nombreComercio" value={nombreComercio} onChange={handelImputChanche} label="Nombre del comercio" />
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <div className={classes.imput} noValidate autoComplete="off">
                                <TextField name="propietario" value={propietario} onChange={handelImputChanche} label="Propietario del comercio" />
                            </div>
                        </Grid>

                        <Grid item xs={12}>

                            <div className={classes.imput} noValidate autoComplete="off">
                                <TextField name="direccion" value={direccion} onChange={handelImputChanche} label="Direccion del comercio" />
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={12}>
                            <div className={classes.imput} noValidate autoComplete="off">
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <DatePicker name="fecha" value={selectedDate} onChange={handleDateChange} />
                                </MuiPickersUtilsProvider>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={12}>
                            <div className={classes.select} noValidate autoComplete="off">
                                <TextField
                                    select
                                    name="tipoComercio"
                                    label="Tipo de comercio"
                                    value={tipoComercio}
                                    onChange={handelImputChanche}
                                    helperText="Selecione un tipo de comercio"
                                >
                                    {
                                        tiposComercios.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))
                                    }
                                </TextField>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormLabel component="legend">Eliga uno o varias</FormLabel>
                                <FormGroup>
                                    {
                                        opcionesComercios[tipoComercio].opciones.map(opcion => (
                                            <FormControlLabel key={opcion.value}
                                                control={<Checkbox onChange={handelImputChancheCheck} name={opcion.value} />} label={opcion.label}
                                            />
                                        ))
                                    }
                                </FormGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} >
                            {otros &&
                                <div className="custom-control custom-checkbox m-2 p-2">
                                    <div className={classes.imput} noValidate autoComplete="off">
                                        <TextField name="otro" value={otro} onChange={handelImputChanche} label="Tipo del comercio" />
                                    </div>
                                </div>}
                        </Grid>
                    </Grid>
                </Modal.Body>
                <Modal.Footer >
                    <div className={classes.btn}>
                        <Button variant="contained" className="btn bg-light text-dark" onClick={handleClose}>
                            Cerrar
                        </Button>
                        <Button variant="contained" className="btn bg-primario text-white" onClick={handleSubmit}>
                            Guardar
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>

            <Snackbar open={alertRemove} autoHideDuration={2000} onClose={handleCloseAlert}>
                <Alert onClose={handleCloseAlert} className="bg-warning text-white text-uppercase" severity="warning">
                    Formulario Invalido
                </Alert>
            </Snackbar>

        </div>
    )
}
