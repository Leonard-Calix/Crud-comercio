import React from 'react';
import Container from '@material-ui/core/Container';
import { AppRoute } from '../routers/AppRoute';

import { Provider } from 'react-redux';
import { store } from '../store/store';


export const App = () => {
    return (
        <div className="bg-ligth" >
            <Provider store={store} >
                <Container maxWidth="lg">
                    <AppRoute />
                </Container>
            </Provider>
        </div>
    )
}
