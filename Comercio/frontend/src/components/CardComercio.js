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
import swal from 'sweetalert';
import PersonIcon from '@material-ui/icons/Person';

import { useDispatch, useSelector } from 'react-redux';

// actions
import { obtenerComercio, comercioActivo,activarComercio } from '../actions/comercio';

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
    }

    const btnDetallesComercio = (id) => {
        //console.log('Detalles', id);
        dispatch( obtenerComercio({ id }) );

    }


    return (
        <div>

            <Card className={classes.root} variant="outlined">
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://miro.medium.com/max/3440/1*QfmtMDpR23DkpSBOEB50FA.png"
                    title="Contemplative Reptile"
                />
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
                        <DetailsIcon />
                    </Button>
                    <Button onClick={() => btnEliminarComercio(id)} size="small" right="right" color="secondary">
                        <DeleteIcon />
                    </Button>
                </CardActions>
            </Card>

        </div>
    )
}
