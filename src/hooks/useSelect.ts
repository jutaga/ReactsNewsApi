import { useState } from "react"

export const useSelect = () => {

    const [noticiaSelect, setNoticiaSelect] = useState('general');

    const onSelectChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = target;

        setNoticiaSelect(value);
    }
    

    return {
        noticiaSelect,
        onSelectChange
    }
}
