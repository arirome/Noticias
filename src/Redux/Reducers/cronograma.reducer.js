import {
    MOSTRAR_CRONOGRAMA,
    ERROR_CRONOGRAMA,
    LIMPIAR_CRONOGRAMA
  } from "../Types/types";

  const initialState = {
    cronograma: [],
    loadingCronograma: true,
    error: {},
  }

  export default function (state = initialState, action) {
    const { type, payload } = action
  
    switch (type) {
        case MOSTRAR_CRONOGRAMA:
            return {
              ...state,
              cronograma: payload,
              loadingCronograma: false,
              error: {},
            }
        case LIMPIAR_CRONOGRAMA:
            return {
              ...state,
              cronograma: [],
              loadingCronograma: true,
              error: {},
            }
        case ERROR_CRONOGRAMA:
            return {
              ...state,
              error: payload,
              loadingCronograma: false
            }
            
        default:
            return state
    }
  
  }