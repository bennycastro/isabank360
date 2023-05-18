import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import { Soluciones, Producto, Clientes, Contenido,
        Crea, Explora, Terminos, How, Cac, Partners,  Faq,
        Blog,  Boletin,  Forma, Que_hacemos, } from './routes';



const router = createBrowserRouter([
  {
  path: "/",
  element : <App />,
  errorElement: <App />,
  },
  {
  path: "/Soluciones",
  element : <Soluciones />,
  },
  {
  path: "/How",
    element : <How />,
    },
  {
  path: "/Producto",
  element : <Producto />,
  },
  {
  path: "/Clientes",
  element : <Clientes />,  
  },
  {
  path: "/Contenido",
  element : <Contenido />,  
  },
  {
  path: "/Crea",
  element : <Crea />,  
  },
  {
  path: "/Explora",
  element : <Explora />,  
  },
  {
  path: "/Terminos",
  element : <Terminos />,  
  },
  {
    path: "/Cac",
    element : <Cac />,  
    },
    {
    path: "/Partners",
    element : <Partners />,  
    },
    {
    path: "/Faq",
    element : <Faq />,  
    },
    {
    path: "/Blog",
    element : <Blog />,  
    },
    {
    path: "/Boletin",
    element : <Boletin />,  
    },
    {
      path: "/Forma",
      element : <Forma />,  
      },
      {
        path: "/Que_hacemos",
        element : <Que_hacemos />,  
        },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App />*/}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
