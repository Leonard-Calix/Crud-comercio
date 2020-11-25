import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import { Alert } from '@material-ui/lab';

import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';


// actions
import { obtenerComercios, actualizarComercio, obtenerComercio } from '../actions/comercio';

// Reducer
import { useDispatch, useSelector } from 'react-redux';
//import { useFormCheckbox } from '../hooks/useFormCheckbox';
//import { useForm } from '../hooks/useForm';
import { modalStyle } from '../styles/modal';
import { state, caracteristicas } from '../types/estados';



export const EditarComercio = () => {
    const useStyles = makeStyles(modalStyle);
    const classes = useStyles();
    const dispatch = useDispatch();
    const { idComercio } = useParams();
    const [alert, setAlert] = React.useState(false);
    //const { comercioActivo } = useSelector(state => state.comercio);
    //const opciones = JSON.parse(comercioActivo.opciones);

    const [values, setvalues] = useState(state);
    const [opciones, setOpciones] = useState(caracteristicas);
    const [selectedDate, handleDateChange] = useState(state.fecha);


    useEffect(() => {

        obtenerComercioFetch();

    }, [])

    const { cafeterias, restaurantes, heladeria, muebles, electrodomesticos, ferreterias, ventasConstruccion, materialesElectrico, bombas, otros } = opciones;

    const { id, nombreComercio, propietario, direccion, fecha, tipoComercio, otro } = values;

    const handleClick = () => {
        setAlert(true);
      };

      const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setAlert(false);
      };


    const btnActualizarComercio = () => {

        if (!otros) values.otro = '';

        values.fecha = selectedDate;
        values.opciones = JSON.stringify(opciones);
        console.log('Actulizando el comercio', values);
        dispatch(actualizarComercio(values));
        dispatch(obtenerComercio({ id }));
        handleClick();

    }

    const handelImputChanche = (e) => {
        setvalues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    const obtenerComercioFetch = async () => {

        const resp = await fetch(`http://localhost:8888/comercios/${idComercio}`);
        const body = await resp.json();

        const { opciones  } = body;

        setvalues(body);
        handleDateChange(body.fecha)

        setOpciones( JSON.parse(opciones) );

        //console.log(body);
         
    }

    const handelImputChancheCheck = (e) => {
        setOpciones(
            {
                ...opciones,
                [e.target.name]: e.target.checked
            }
        );
    }

    return (

        <div className="card animate__animated animate__fadeIn">
            <div className="card-body">
                <div className="container m-5" >
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <div className={classes.imput} noValidate autoComplete="off">
                                <TextField value={nombreComercio} name="nombreComercio" onChange={handelImputChanche} label="Nombre del comercio" />
                            </div>
                        </div>
                        <div className="form-group col-md-6">
                            <div className={classes.imput} noValidate autoComplete="off">
                                <TextField value={propietario} name="propietario" onChange={handelImputChanche} label="Nombre del comercio" />
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">

                            <div className={classes.imput} noValidate autoComplete="off">
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <DatePicker name="fecha" value={selectedDate} onChange={handleDateChange}  />
                                </MuiPickersUtilsProvider>
                            </div>

                        </div>
                        <div className="form-group col-md-6">
                            <div className="form-group">
                                <div className={classes.imput} noValidate autoComplete="off">
                                    <TextField value={direccion} onChange={handelImputChanche} name="direccion" label="Nombre del comercio" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {tipoComercio == 0 &&

                        <div className="form-row animate__animated animate__fadeIn" >
                            <div className="custom-control custom-checkbox m-2 p-2">
                                <FormControlLabel
                                    control={<Checkbox name="cafeterias" value={cafeterias} checked={cafeterias} onChange={handelImputChancheCheck} />} label="Cafeterias"
                                />
                            </div>
                            <div className="custom-control custom-checkbox m-2 p-2">
                                <FormControlLabel
                                    control={<Checkbox name="restaurantes" value={restaurantes} checked={restaurantes} onChange={handelImputChancheCheck} />} label="Restaurantes"
                                />
                            </div>

                            <div className="custom-control custom-checkbox m-2 p-2">
                                <FormControlLabel
                                    control={<Checkbox name="heladeria" value={heladeria} checked={heladeria} onChange={handelImputChancheCheck} />} label="heladeria"
                                />
                            </div>

                            <div className="custom-control custom-checkbox m-2 p-2">
                                <FormControlLabel
                                    control={<Checkbox name="otros" value={otros} checked={otros} onChange={handelImputChancheCheck} />} label="Otro"
                                />
                            </div>
                        </div>
                    }

                    {(otros && tipoComercio == 0) &&
                        <div className="custom-control custom-checkbox m-2 p-2 animate__animated animate__fadeIn">
                            <div className={classes.imput} noValidate autoComplete="off">
                                <TextField name="otro" value={otro} onChange={handelImputChanche} label="Tipo del comercio" />
                            </div>
                        </div>}

                    {tipoComercio == 1 &&

                        <div className="form-row animate__animated animate__fadeIn" >
                            <div className="custom-control custom-checkbox m-2 p-2">
                                <FormControlLabel
                                    control={<Checkbox name="muebles" value={muebles} checked={muebles} onChange={handelImputChancheCheck} />} label="Muebles"
                                />
                            </div>
                            <div className="custom-control custom-checkbox m-2 p-2">
                                <FormControlLabel
                                    control={<Checkbox name="electrodomesticos" value={electrodomesticos} checked={electrodomesticos} onChange={handelImputChancheCheck} />} label="Electrodomesticos"
                                />
                            </div>
                            <div className="custom-control custom-checkbox m-2 p-2">
                                <FormControlLabel
                                    control={<Checkbox name="otros" value={otros} checked={otros} onChange={handelImputChancheCheck} />} label="Otro"
                                />
                            </div>
                        </div>
                    }
                    {(otros && tipoComercio == 1) &&
                        <div className="custom-control custom-checkbox m-2 p-2 animate__animated animate__fadeIn">
                            <div className={classes.imput} noValidate autoComplete="off">
                                <TextField name="otro" value={otro} onChange={handelImputChanche} label="Tipo del comercio" />
                            </div>
                        </div>}


                    {tipoComercio == 2 &&

                        <div className="form-row" >
                            <div className="custom-control custom-checkbox m-2 p-2 animate__animated animate__fadeIn">
                                <FormControlLabel
                                    control={<Checkbox name="ferreterias" value={ferreterias} checked={ferreterias} onChange={handelImputChancheCheck} />} label="Ferreterias"
                                />
                            </div>
                            <div className="custom-control custom-checkbox m-2 p-2">
                                <FormControlLabel
                                    control={<Checkbox name="ventasConstruccion" value={ventasConstruccion} checked={ventasConstruccion} onChange={handelImputChancheCheck} />} label="Ventas de materiales de constrcccion"
                                />
                            </div>

                            <div className="custom-control custom-checkbox m-2 p-2">
                                <FormControlLabel
                                    control={<Checkbox name="materialesElectrico" value={materialesElectrico} checked={materialesElectrico} onChange={handelImputChancheCheck} />} label="Materiales electricos"
                                />
                            </div>

                            <div className="custom-control custom-checkbox m-2 p-2">
                                <FormControlLabel
                                    control={<Checkbox name="bombas" value={bombas} checked={bombas} onChange={handelImputChancheCheck} />} label="Bombas"
                                />
                            </div>

                            <div className="custom-control custom-checkbox m-2 p-2">
                                <FormControlLabel
                                    control={<Checkbox name="otros" value={otros} checked={otros} onChange={handelImputChancheCheck} />} label="Otro"
                                />
                            </div>
                        </div>
                    }
                    {(otros && tipoComercio == 2) &&
                        <div className="custom-control custom-checkbox m-2 p-2 animate__animated animate__fadeIn">
                            <div className={classes.imput} noValidate autoComplete="off">
                                <TextField name="otro" value={otro} onChange={handelImputChanche} label="Tipo del comercio" />
                            </div>
                        </div>}

                    <div className="form-row" >
                        <Button onClick={btnActualizarComercio} variant="contained" color="secondary">
                            Actualizar
                        </Button>
                    </div>

                </div>
            </div>
            <Snackbar open={alert} autoHideDuration={6000} onClose={handleCloseAlert}>
                <Alert onClose={handleCloseAlert} className="bg-warning text-white text-uppercase" severity="warning">
                    Comercio Actualizado con exito
                </Alert>
            </Snackbar>
        </div>

    )
}
