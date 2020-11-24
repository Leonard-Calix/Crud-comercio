import { types } from '../types/types';

export const obtenerComercios = () => {
    return async (dispatch) => {
        try {
            const resp = await fetch('http://localhost:8888/comercios');
            const body = await resp.json();

            dispatch(CargarComercios(body));

        } catch (error) {
            console.log(error);
        }
    }
}


export const obtenerComercio = (event) => {
    return async (dispatch) => {
        try {
            const resp = await fetch('http://localhost:8888/comercios/' + event.id)
            const body = await resp.json();

            dispatch(activarComercio(body));

        } catch (error) {
            console.log(error);
        }
    }
}

export const EliminarComercio = (event) => {
    return async (dispatch) => {
        try {
            const resp = await fetch('http://localhost:8888/comercios/' + event.id, { method: 'DELETE' });
            const body = await resp.json();

            //console.log(body);

            if (body == 1) {
                dispatch(obtenerComercios());
            }

        } catch (error) {
            console.log(error);
        }
    }
}

export const actualizarComercio = (event) => {
    return async (dispatch) => {
        try {
            const resp = await fetch(`http://localhost:8888/comercios/${event.id}`, {
                method: "PUT", 
                body: JSON.stringify(event)
            });

            const body = await resp.json();

            console.log(body);

            //dispatch(activarComercio(body));
        } catch (error) {
            console.log(error);
        }
    }
}

export const agregarComercio = (event) => {
    return async (dispatch) => {
        try {
            const resp = await fetch(`http://localhost:8888/comercios`, {
                method: "POST", 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(event),
            });
            
            const body = await resp.json();

            console.log(body);

            //dispatch(activarComercio(body));
        } catch (error) {
            console.log(error);
        }
    }
}







// ACIONES PARA EL REDUCER

export const CargarComercios = (event) => ({
    type: types.cargarComercios,
    payload: event
});

export const activarComercio = (event) => ({
    type: types.activarComercio,
    payload: event
});

