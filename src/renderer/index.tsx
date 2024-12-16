import ReactDom from 'react-dom/client'
import React from 'react'

import { WindowStoreProvider } from './store'
import { AppRoutes } from './routes'
import { ToastContainer } from 'react-toastify';

// import 'resources/styles/globals.sass'
import './assets/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/styles.min.css'

ReactDom.createRoot(document.querySelector('app') as HTMLElement).render(
  <React.StrictMode>
    <WindowStoreProvider>
      <AppRoutes />
      <ToastContainer />
    </WindowStoreProvider>
  </React.StrictMode>
)
