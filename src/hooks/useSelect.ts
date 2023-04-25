import { useState } from "react"

export const useSelect = (initialState : string = 'general') => {

    const [noticiaSelect, setNoticiaSelect] = useState(initialState);

    const onSelectChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = target;

        setNoticiaSelect(value);
    }
    

    return {
        noticiaSelect,
        onSelectChange
    }
}
