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


const btnEliminarComercio = () => {
    //console.log('Eliminar');

    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((response) => {
            if (response) {
                console.log(response);
                swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                });
            } else {
                swal("Your imaginary file is safe!");
            }
        });
}

const btnDetallesComercio = () => {
    console.log('Detalles');
}

export const CardComercio = () => {

    const classes = useStyles();

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
                        Nombre comercio
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <PersonIcon /> Propietario
                    </Typography>
                </CardContent>
                <CardActions>

                    <Button onClick={btnDetallesComercio} size="small" color="primary">
                        <DetailsIcon />
                    </Button>
                    <Button onClick={btnEliminarComercio} size="small" right="right" color="secondary">
                        <DeleteIcon />
                    </Button>
                </CardActions>
            </Card>

        </div>
    )
}
