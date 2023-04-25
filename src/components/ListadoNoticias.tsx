import { Article } from "../interface/Noticias.type"
import { Noticia } from "./Noticia"

interface ListadoProps {
    noticias: Article[]
}

export const ListadoNoticias = ({ noticias }: ListadoProps) => {
    return (
        <div className="row">
            {
                noticias.map(noticia => (                   
                    <Noticia key={noticia.url} noticia={noticia} />
                ))
            }
        </div>
    )
}
