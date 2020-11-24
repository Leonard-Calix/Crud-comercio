import React from 'react';
import { Link } from 'react-router-dom';

export const menu = () => {
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className="nav-link" to="/">Comidas</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/">Comidas</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/">Comidas</Link>
            </li>
        </ul>
    )
}
