import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { AppRoute } from '../routers/AppRoute';



export const App = () => {
    return (
        <Container maxWidth="lg">
            <AppRoute />
        </Container>
    )
}
