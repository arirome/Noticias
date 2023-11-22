import {
    MOSTRAR_PRODUCTOS,
    LIMPIAR_PRODUCTOS,
    ERROR_PRODUCTO,
    MOSTRAR_PRODUCTO_UNICO
  } from "../Types/types";

  const initialState = {
    productos: [],
    producto: null,
    loadingProductos: true,
    error: {},
  }

  export default function (state = initialState, action) {
    const { type, payload } = action
  
    switch (type) {
        case MOSTRAR_PRODUCTOS:
            return {
              productos: payload,
              producto: null,
              loadingProductos: false,
              error: {},
            }
        case MOSTRAR_PRODUCTO_UNICO:
            return {
              producto: payload,
              loadingProductos: false,
              error: {}
            }
        case LIMPIAR_PRODUCTOS:
            return {
              ...state,
              productos: [],
              loadingProductos: false,
              error: {},
            }
        case ERROR_PRODUCTO:
            return {
              productos: [],
              producto: null,
              error: payload,
              loadingProductos: false
            }
            
        default:
            return state
    }
  
  }