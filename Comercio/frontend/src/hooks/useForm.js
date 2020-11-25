import { useState } from 'react';

export const useForm = (initialState = {}) => {

    const [values, setvalues] = useState(initialState);

    const handelImputChanche = ({ target }) => {
        setvalues({
            ...values,
            [target.name]: target.value
        });
    }

    const resetState = (state) => {
        setvalues(state);
    }

    return [values, handelImputChanche, resetState]
}