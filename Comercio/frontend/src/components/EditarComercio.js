import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

// actions
import { obtenerComercios } from '../actions/comercio';

// Reducer
import { useDispatch, useSelector } from 'react-redux';
import { useFormCheckbox } from '../hooks/useFormCheckbox';
import { useForm } from '../hooks/useForm';
import { modalStyle } from '../styles/modal';


export const EditarComercio = () => {
    const useStyles = makeStyles(modalStyle);

    const classes = useStyles();
    const dispatch = useDispatch();
    const { comercioActivo } = useSelector(state => state.comercio);
    const opciones = JSON.parse(comercioActivo.opciones);

    //console.log( JSON.parse(comercioActivo.opciones) );

    const [valuesCheck, handelImputChancheCheck] = useFormCheckbox(opciones);

    const [values, handelImputChanche] = useForm(comercioActivo);

    const { cafeterias, restaurantes, heladeria, muebles, electrodomesticos, ferreterias, ventasConstruccion, materialesElectrico, bombas, otros } = valuesCheck;

    const { nombreComercio, propietario, direccion, fecha, tipoComercio, otro } = values;


    useEffect(() => {
        dispatch(obtenerComercios())
    }, [dispatch]);

    const btnActualizarComercio = () => {

        values.opciones = JSON.stringify(valuesCheck);

        console.log('Actulizando el comercio', values);
    }

    return (


        <div className="card">
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
                                <TextField value={fecha} onChange={handelImputChanche} label="Nombre del comercio" />
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

                        <div className="form-row" >
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

                    {(otros && tipoComercio == 0 )  && 
                    <div className="custom-control custom-checkbox m-2 p-2">
                        <div className={classes.imput} noValidate autoComplete="off">
                                <TextField name="otro" value={otro} onChange={handelImputChanche} label="Tipo del comercio" />
                            </div>
                    </div>}

                    {tipoComercio == 1 &&

                        <div className="form-row" >
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
                    {(otros && tipoComercio == 1 ) && 
                    <div className="custom-control custom-checkbox m-2 p-2">
                        <div className={classes.imput} noValidate autoComplete="off">
                                <TextField name="otro" value={otro} onChange={handelImputChanche} label="Tipo del comercio" />
                            </div>
                    </div>}


                    {tipoComercio == 2 &&

                        <div className="form-row" >
                            <div className="custom-control custom-checkbox m-2 p-2">
                                <FormControlLabel
                                    control={<Checkbox name="ferreterias" value={ferreterias} checked={cafeterias} onChange={handelImputChancheCheck} />} label="Ferreterias"
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
                    {(otros && tipoComercio == 2 )  && 
                    <div className="custom-control custom-checkbox m-2 p-2">
                        <div className={classes.imput} noValidate autoComplete="off">
                                <TextField name="otro" value={otro} onChange={handelImputChanche}  label="Tipo del comercio" />
                            </div>
                    </div>}



                    <div className="form-row" >
                        <Button onClick={btnActualizarComercio} variant="contained" color="secondary">
                            Actualizar
                        </Button>
                    </div>
                    
                </div>
            </div>
        </div>

    )
}
