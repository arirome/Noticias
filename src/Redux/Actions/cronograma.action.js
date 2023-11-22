import { 
    MOSTRAR_CRONOGRAMA,
    ERROR_CRONOGRAMA,
    LIMPIAR_CRONOGRAMA
   } from "../Types/types";


import { URL } from "../../Components/Helpers/peticiones";

//GET Cronograma
export const mostrarCronograma = () => async dispatch => {
    

    /* const config = {headers : {"Content-type": "application/json"}} */
  try {
      let res = await fetch(`${URL}/ver-cronograma`)
    /*  console.log(res) */
      const body = await res.json()
  /*    console.log(body) */
   
      
      dispatch({
          type: MOSTRAR_CRONOGRAMA,
          payload: body
      })
      
  } catch (err) { 
      /* console.log(err) */
      dispatch({
          type: ERROR_CRONOGRAMA,
          payload: { 
              msg: err
          }
      })
  }
}