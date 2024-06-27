import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './page/Main/Main'
import {Provider} from "react-redux"
import './app.css'
import { store } from './services'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>,
)
