import { useState } from 'react';

export const useFormCheckbox = (initialState = {}) => {

    const [valuesCheck, setvalues] = useState(initialState);

    const handelImputChancheCheck = ({ target }) => {

        setvalues(
            {
                ...valuesCheck,
                [target.name]: target.checked
            }
        );
    }
    return [valuesCheck, handelImputChancheCheck]
}