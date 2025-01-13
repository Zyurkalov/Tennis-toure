import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux"
import { BrowserRouter } from 'react-router'
import { store } from './services'
import App from './page';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/Tennis-toure">
        <App />
      </BrowserRouter>
    </Provider>  
  </React.StrictMode>,
)
