import { Routes, Route } from 'react-router-dom';
import Inicio from '../Pages/Inicio';
import Catalogo from '../Pages/Catalogo';
import Noticias from '../Pages/Noticias';
import Puntos from '../Pages/Puntos';
import Noticia_detalle from '../Pages/Noticia_detalle';


export default function Rutas() {

  return (
    
      <Routes>
            <Route path={"/"} exact element={<Inicio/>}/>
            <Route path={"/productos"} exact element={<Catalogo/>}/>
            <Route path={"/noticias"} exact element={<Noticias/>}/>
            <Route path={"/noticia/:idNoticia"} exact element={<Noticia_detalle/>}/>
            <Route path={"/mapa"} exact element={<Puntos/>}/>
            <Route path={"/*"} exact element={<Inicio/>}/>
      </Routes>

  )
}