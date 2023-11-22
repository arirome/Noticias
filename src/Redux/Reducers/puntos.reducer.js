import {
    MOSTRAR_PUNTOS,
    MOSTRAR_PUNTO_UNICO,
    ERROR_PUNTO,
    LIMPIAR_PUNTOS
  } from "../Types/types";

  const initialState = {
    puntos: [],
    punto: null,
    loadingPuntos: true,
    error: {},
  }

  export default function (state = initialState, action) {
    const { type, payload } = action
  
    switch (type) {
        case MOSTRAR_PUNTOS:
            return {
              ...state,
              puntos: payload,
              loadingPuntos: false,
              error: {},
            }
        case MOSTRAR_PUNTO_UNICO:
            return {
              ...state,
              punto: payload,
              loadingPuntos: false,
              error: {}
            }
        case LIMPIAR_PUNTOS:
            return {
              ...state,
              puntos: [],
              punto: null,
              loadingPuntos: true,
              error: {},
            }
        case ERROR_PUNTO:
            return {
              ...state,
              error: payload,
              loadingPuntos: false
            }
            
        default:
            return state
    }
  
  }