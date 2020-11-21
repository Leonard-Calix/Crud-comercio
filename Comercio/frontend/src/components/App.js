import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { AppRoute } from '../routers/AppRoute';

import { Provider } from 'react-redux';
import { store } from '../store/store';


export const App = () => {
    return (
        <Provider store= { store } >
            <Container maxWidth="lg">
                <AppRoute />
            </Container>
        </Provider>
    )
}
