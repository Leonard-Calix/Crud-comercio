
const urlBackend = 'http://localhost:8888';

const fetch = ( ruta ,data, method) => {

    switch (method) {
        case 'GET':
            return fetch(`${urlBackend}/comercios`);    
        break;
    
        default:
            break;
    }


}