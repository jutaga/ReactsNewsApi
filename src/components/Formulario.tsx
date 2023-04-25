import { useSelect } from '../hooks/useSelect'
import './Formulario.css'
import { Selects } from './Selects'

const OPCIONES = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Negocios' },
    { value: 'entertainment', label: 'Entretenimiento' },
    { value: 'science', label: 'Ciencia' },
    { value: 'sports', label: 'Deportes' },
    { value: 'technology', label: 'Tecnologia' },
]

export const Formulario = () => {

    const { noticiaSelect, onSelectChange } = useSelect();

    return (
        <>
            <div className="row buscador">
                <div className="col-12">
                    <form >
                        <h2 className="heading">Encuentra Noticias Por Categoria</h2>

                        <Selects onSelectChange={onSelectChange} opciones={OPCIONES} />

                        <button className="btn btn-warning w-100 p-2">Buscar</button>
                    </form>
                </div>
            </div>
        </>
    )
}
