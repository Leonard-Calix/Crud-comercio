import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { modalStyle } from '../styles/modal';


export const CheckboxComida = ({ caracteristicas, handleChange }) => {
    
    const useStyles = makeStyles(modalStyle);
    return (
        <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Eliga uno o varias</FormLabel>
            <FormGroup>
                {
                    caracteristicas.map(opcion => (
                        <FormControlLabel
                            control={<Checkbox onChange={handleChange} name={opcion.value} />} label={opcion.label}
                        />
                    ))
                }
            </FormGroup>
            <FormHelperText>Be careful</FormHelperText>
        </FormControl>
    )
}
