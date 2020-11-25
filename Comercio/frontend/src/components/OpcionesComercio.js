import React, { useState, useEffect } from 'react';
import { caracteristicas } from '../types/estados';
import { useParams } from 'react-router-dom';

export const OpcionesComercio = ({ opciones, tipoComercio, otro }) => {

    const [values, setValues] = useState(caracteristicas);
    const { idComercio } = useParams();


    useEffect(() => {
        obtenerComercioFetch();
    }, []);

    const { cafeterias, restaurantes, heladeria, muebles, electrodomesticos, ferreterias, ventasConstruccion, materialesElectrico, bombas, otros } = values;


    const obtenerComercioFetch = async () => {

        const resp = await fetch(`http://localhost:8888/comercios/${idComercio}`);
        const body = await resp.json();

        //console.log(body);
        setValues(JSON.parse(body.opciones));
    }



    return (

        <ul className="list-group list-group-flush">
            { (tipoComercio == 0 && cafeterias) && <li className="list-group-item">Cafeteria</li>}
            { (tipoComercio == 0 && restaurantes) && <li className="list-group-item">Restaurantes</li>}
            { (tipoComercio == 0 && heladeria) && <li className="list-group-item">Heladeria</li>}
            { (tipoComercio == 1 && muebles) && <li className="list-group-item">Muebles, Camas, Decoración</li>}
            { (tipoComercio == 1 && electrodomesticos) && <li className="list-group-item">Electrodomésticos</li>}
            { (tipoComercio == 2 && ferreterias) && <li className="list-group-item">Ferreterias</li>}
            { (tipoComercio == 2 && ventasConstruccion) && <li className="list-group-item">Ferreterias</li>}
            { (tipoComercio == 2 && materialesElectrico) && <li className="list-group-item">Ferreterias</li>}
            { (tipoComercio == 2 && bombas) && <li className="list-group-item">Bombas</li>}
            { otros && <li className="list-group-item">{otro}</li>}

        </ul>
    )
}
