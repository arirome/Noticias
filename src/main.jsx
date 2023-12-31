import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import Rutas from './Routes/Rutas'
import { Provider } from 'react-redux'
import store from './Redux/Store/Store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <Rutas/>
      </BrowserRouter>
   </Provider>
  </React.StrictMode>,
)
