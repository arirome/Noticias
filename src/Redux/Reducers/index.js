import { combineReducers } from "redux";

import productosReducer from "./productos.reducer";
import noticiasReducer from "./noticias.reducer";
import puntosReducer from "./puntos.reducer"
import cronogramaReducer from "./cronograma.reducer"
export default combineReducers({
    productosReducer,
    noticiasReducer,
    puntosReducer,
    cronogramaReducer
});