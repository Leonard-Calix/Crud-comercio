import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(0),
    },
    title: {
        flexGrow: 1,
    },
}));


export const NavBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <Link color="inherit" to="/nuevo-comercio" > Nuevo comercio </Link>
                        <Link color="inherit" to="/" > Listado </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
