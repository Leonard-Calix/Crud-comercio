import { state } from '../types/estados';
import { types } from '../types/types';

const initialState = {
    comercios: [],
    comercioActivo: state
}

export const comercioReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.cargarComercios:
            return {
                ...state,
                comercios: [...action.payload]
            }
        case types.activarComercio:
            return {
                ...state,
                comercioActivo: action.payload
            }
        case types.desactivarComercio:
            return {
                ...state,
                comercioActivo: action.payload
            }

        default:
            return state;
    }

}