import React from 'react';
import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch, useSelector } from 'react-redux';


import { tiposComercios, opcionesComercios } from '../types/tiposComercios';
import { comidaState, hogarState, construccionState, caracteristicas, state } from '../types/estados';
import { modalStyle } from '../styles/modal';
import { useForm } from '../hooks/useForm';
import { useFormCheckbox } from '../hooks/useFormCheckbox';

// actions
import { agregarComercio } from '../actions/comercio';



const useStyles = makeStyles(modalStyle);

export const ModalNuevo = ({ handleOpen, handleClose, show }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    //const [show, setShow] = React.useState(false);

    const [values, handelImputChanche] = useForm(state);
    const { nombre, propietario, direccion, fecha, tipoComercio } = values;
    const [valuesCheck, handelImputChancheCheck] = useFormCheckbox(caracteristicas);
    const { cafeterias, restaurantes, heladeria, muebles, electrodomesticos, ferreterias, ventasConstruccion, materialesElectrico, bombas, otro } = valuesCheck;

    const handleChange = (event) => {
        // setState({ ...state, [event.target.name]: event.target.checked });
        console.log(state);
    };

    const handleSubmit = () => {

        values.opciones = JSON.stringify(valuesCheck);
        console.log(values);

        dispatch((agregarComercio(values)));
    };

    return (
        <div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Nuevo comercio</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Grid container>
                        <Grid item xs={12} sm={6}>
                            <div className={classes.imput} noValidate autoComplete="off">
                                <TextField name="nombre" value={nombre} onChange={handelImputChanche} label="Nombre del comercio" />
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
                                <TextField name="fecha" value={fecha} onChange={handelImputChanche} label="Fecha" />
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
                                        opcionesComercios[tipoComercio].caracteristicas.map(opcion => (
                                            <FormControlLabel
                                                control={<Checkbox onChange={handelImputChancheCheck} name={opcion.value} />} label={opcion.label}
                                            />
                                        ))
                                    }
                                </FormGroup>

                            </FormControl>
                        </Grid>
                    </Grid>
                </Modal.Body>
                <Modal.Footer >
                    <div className={classes.btn}>
                        <Button variant="contained" onClick={handleClose}>
                            Cerrar
                        </Button>
                        <Button variant="contained" color="secondary" onClick={handleSubmit}>
                            Guardar
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
