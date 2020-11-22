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

import { tiposComercios, opcionesComercios } from '../types/tiposComercios';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    btn: {
        '& > *': {
            margin: theme.spacing(1)
        }
    },
    imput: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
        },
    },
    select: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '100%',
        },
    }
}));

export const ModalNuevo = () => {
    const classes = useStyles();
    const [show, setShow] = React.useState(false);
    const [currency, setCurrency] = React.useState(0);
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));


    const [state, setState] = React.useState({
        Muebles:false, 
        Camas:false,
        DecoraciónElectrodomésticos: false,
        Cafeterías: false, 
        Restaurantes: false, 
        Heladería: false,
        Otro: false,
    });
    const { gilad, jason, antoine } = state;

    const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        console.log( state );
    };

    const handleOpen = () => {
        setShow(true);
        console.log('Hola');
    };

    const handleClose = () => {
        setShow(false);
    };

    const handleChangeSelect = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <div>
            <Button variant="contained" onClick={handleOpen}>
                Nuevo
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Nuevo comercio</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6}>
                            <div className={classes.imput} noValidate autoComplete="off">
                                <TextField label="Nombre del comercio" />
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <div className={classes.imput} noValidate autoComplete="off">
                                <TextField label="Propietario del comercio" />
                            </div>
                        </Grid>

                        <Grid item xs={12}>

                            <div className={classes.imput} noValidate autoComplete="off">
                                <TextField label="Direccion del comercio" />
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={12}>
                            <div className={classes.imput} noValidate autoComplete="off">
                                <TextField label="Fecha" />
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={12}>
                            <div className={classes.select} noValidate autoComplete="off">
                                <TextField
                                    select
                                    label="Tipo de comercio"
                                    value={currency}
                                    onChange={handleChangeSelect}
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
                                        opcionesComercios[currency].nombre.map( opcion => (
                                            <FormControlLabel
                                                control={<Checkbox onChange={handleChange} name={opcion} />} label={opcion}
                                            />
                                        ))
                                    }                                    
                                </FormGroup>
                                <FormHelperText>Be careful</FormHelperText>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Modal.Body>
                <Modal.Footer >
                    <div className={classes.btn}>
                        <Button variant="contained" onClick={handleClose}>
                            Cerrar
                        </Button>
                        <Button variant="contained" color="secondary" onClick={handleClose}>
                            Guardar
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
