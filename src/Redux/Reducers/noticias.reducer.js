import {
    ERROR_NOTICIA,
    LIMPIAR_NOTICIAS,
    MOSTRAR_NOTICIAS,
    MOSTRAR_NOTICIA_UNICA
  } from "../Types/types";

  const initialState = {
    noticias: [],
    noticia: null,
    loadingNoticias: true,
    error: {},
  }

  export default function (state = initialState, action) {
    const { type, payload } = action
  
    switch (type) {
        case MOSTRAR_NOTICIAS:
            return {
              ...state,
              noticias: payload,
              loadingNoticias: false,
              error: {},
            }
        case MOSTRAR_NOTICIA_UNICA:
            return {
              ...state,
              noticia: payload,
              loadingNoticias: false,
              error: {}
            }
        case LIMPIAR_NOTICIAS:
            return {
              ...state,
              noticias: [],
              noticia: null,
              loadingNoticias: true,
              error: {},
            }
        case ERROR_NOTICIA:
            return {
              noticias: [],
              noticia: null,
              error: payload,
              loadingNoticias: false
            }
            
        default:
            return state
    }
  
  }