import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import DetailsIcon from '@material-ui/icons/Details';
//import swal from 'sweetalert';
import PersonIcon from '@material-ui/icons/Person';
import MenuIcon from '@material-ui/icons/Menu';


import { useDispatch, useSelector } from 'react-redux';

// actions
import { obtenerComercio, EliminarComercio } from '../actions/comercio';

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
    }
});

export const CardComercio = ({ id, nombreComercio, propietario, direccion, tipoComercio }) => {

    const dispatch = useDispatch();
    const classes = useStyles();

    const btnEliminarComercio = (id) => {
        console.log('Eliminar', id);
        dispatch( EliminarComercio({ id }) );
    }

    const btnDetallesComercio = (id) => {
        console.log('Detalles', id);
        //dispatch( EliminarComercio({ id }) );
    }


    return (
        <div>

            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {nombreComercio}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <PersonIcon /> {propietario}
                    </Typography>
                </CardContent>
                
                <CardActions>
                    <Button onClick={() => btnDetallesComercio(id)} size="small" color="primary">
                        <MenuIcon />
                    </Button>
                    <Button onClick={() => btnEliminarComercio(id)} size="small" right="right" color="secondary">
                        <DeleteIcon />
                    </Button>
                </CardActions>
            </Card>

        </div>
    )
}
