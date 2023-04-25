import { useEffect, useState } from "react";
import { Formulario } from "./components/Formulario";
import { Header } from "./components/Header"
import { Article, Noticias } from './interface/Noticias.type';
import { ListadoNoticias } from "./components/ListadoNoticias";

const titulo: string = 'Search Engine For News';

export const App = () => {

  const [categoria, setCategoria] = useState('');
  const [noticias, setNoticias] = useState<Article[]>([])

  useEffect(() => {

    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=d150926938db49839cd5b7b67b88d7b7`;

      const respuesta = await fetch(url);
      const noticias: Noticias = await respuesta.json();

      setNoticias(noticias.articles);
    }

    consultarApi();

  }, [categoria])

  return (
    <>
      <Header titulo={titulo} />

      <div className="container">
        <Formulario setCategoria={setCategoria} />

        <ListadoNoticias noticias={noticias} />
      </div>
    </>
  )
}
