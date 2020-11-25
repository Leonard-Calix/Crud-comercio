import React from 'react';
import { AppRoute } from '../routers/AppRoute';

import { Provider } from 'react-redux';
import { store } from '../store/store';


export const App = () => {
    return (
        <div className="container-fluid bg-ligth" >
            <Provider store={store} >
                    <AppRoute />
            </Provider>
        </div>
    )
}
