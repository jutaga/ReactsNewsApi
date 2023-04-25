import React from 'react'

interface SelectProps {
    opciones: {
        value: string;
        label: string;
    }[]
}

export const Selects = ({ opciones }: SelectProps) => {
    return (
        <select defaultValue={'general'} className='form-select my-2'>

            <option value="general">General</option>
            {
                opciones.map((opcion) => (
                    <option key={opcion.value} value={opcion.value} >{opcion.label}</option>
                ))
            }

        </select>
    )
}
