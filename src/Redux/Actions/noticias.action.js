import { 
    ERROR_NOTICIA,
    LIMPIAR_NOTICIAS,
    MOSTRAR_NOTICIAS,
    MOSTRAR_NOTICIA_UNICA
   } from "../Types/types";

import { URL } from "../../Components/Helpers/peticiones";

//GET Noticias
export const mostrarNoticias = () => async dispatch => {
    dispatch({type: LIMPIAR_NOTICIAS})

    /* const config = {headers : {"Content-type": "application/json"}} */
  try {
      let res = await fetch(`${URL}/ver-noticias-publicas`)
     /*  console.log(res) */
      const body = await res.json()
     /*  console.log(body) */
      
      dispatch({
          type: MOSTRAR_NOTICIAS,
          payload: body
      })
      
  } catch (err) { 
      console.log(err)
      dispatch({
          type: ERROR_NOTICIA,
          payload: { 
              msg: err
          }
      })
  }
}

