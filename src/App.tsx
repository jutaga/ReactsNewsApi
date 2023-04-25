import { Formulario } from "./components/Formulario";
import { Header } from "./components/Header"

const titulo: string = 'Buscador de Noticias';

export const App = () => {
  return (
    <>
      <Header titulo={titulo} />

      <div className="container">
        <Formulario />
      </div>
    </>
  )
}
