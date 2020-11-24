import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

// Componentes
import { NavBar } from '../components/NavBar';
import { NuevoComercio } from '../components/NuevoComercio';
import { EditarComercio } from '../components/EditarComercio';
import { ListaComercios } from '../components/ListaComercios';
import { ComerciosHogar } from '../components/ComerciosHogar';
import { ComerciosConstruccion } from '../components/ComerciosConstruccion';


export const AppRoute = () => {
    return (
        <Router>
           <NavBar/>
            <Switch>
                <Route exact path="/" component={ListaComercios} />
                <Route exact path="/detalle-comercio" component={NuevoComercio} />
                <Route exact path="/editar-comercio" component={EditarComercio} />
                <Route exact path="/hogar" component={ComerciosHogar} />
                <Route exact path="/construccion" component={ComerciosConstruccion} />
                <Redirect to="/" />
            </Switch>
        </Router>
    )
}
