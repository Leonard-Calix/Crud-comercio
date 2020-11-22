import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

// Componentes
import { NavBar } from '../components/NavBar';
import { NuevoComercio } from '../components/NuevoComercio';
import { EditarComercio } from '../components/EditarComercio';
import { ListaComercios } from '../components/ListaComercios';

export const AppRoute = () => {
    return (
        <Router>
           <NavBar/>
            <Switch>
                <Route exact path="/" component={ListaComercios} />
                <Route exact path="/nuevo-comercio" component={NuevoComercio} />
                <Route exact path="/editar-comercio/:idComercio" component={EditarComercio} />
                <Redirect to="/" />
            </Switch>
        </Router>
    )
}
