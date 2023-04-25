import { Article } from "../interface/Noticias.type"

interface NoticiaProp {
  noticia: Article
}

export const Noticia = ({ noticia }: NoticiaProp) => {

  const { urlToImage, url, title, description, source, content } = noticia;

  return (
    < div className="col-12 mb-4" >
      <div className="card" >
        {urlToImage && <img src={urlToImage} className="card-img-top img-fluid" alt={title} />}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <a href={url} target='_blank' className="btn btn-primary w-100">Ver Más</a>
        </div>
      </div>
    </ div>
  )
}


