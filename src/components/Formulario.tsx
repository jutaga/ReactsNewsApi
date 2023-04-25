import { useSelect } from '../hooks/useSelect'
import './Formulario.css'
import { Selects } from './Selects'

interface FormProp {
    setCategoria: React.Dispatch<React.SetStateAction<string>>
}

const OPCIONES = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Business' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'science', label: 'Science' },
    { value: 'sports', label: 'Sports' },
    { value: 'technology', label: 'Technology' },
]

export const Formulario = ({ setCategoria }: FormProp) => {

    const { noticiaSelect, onSelectChange } = useSelect('general');

    const buscarNoticias = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setCategoria(noticiaSelect);
    }

    return (
        <>
            <div className="row buscador">
                <div className="col-12">
                    <form onSubmit={buscarNoticias}>
                        <h2 className="heading">Find News By Categorie</h2>

                        <Selects onSelectChange={onSelectChange} opciones={OPCIONES} />

                        <button type='submit' className="btn btn-warning w-100 p-2">Search</button>
                    </form>
                </div>
            </div>
        </>
    )
}
