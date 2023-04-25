import React from 'react'

interface SelectProps {
    opciones: {
        value: string;
        label: string;
    }[],
    onSelectChange: ({ target }: React.ChangeEvent<HTMLSelectElement>) => void
}

export const Selects = ({ opciones, onSelectChange }: SelectProps) => {
    return (
        <select onChange={onSelectChange} defaultValue={'general'} className='form-select my-2'>

            <option value="general">General</option>
            {
                opciones.map((opcion) => (
                    <option key={opcion.value} value={opcion.value} >{opcion.label}</option>
                ))
            }

        </select>
    )
}
