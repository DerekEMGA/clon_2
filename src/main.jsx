import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout.jsx'
import Login from './components/pages/Login'
import { Home } from './components/pages/Home'
import { Notificaciones } from './components/pages/Notificaciones'
import { Formatos } from './components/pages/Formatos'
import { Incidencias } from './components/pages/Incidencias'
import { Error } from './components/pages/Error'
import { Perfil } from './components/pages/Perfil'
import { Empleados } from './components/pages/Empleados'
import PaseDeSalida from './components/formularios/PaseDeSalida'
import Compensado from './components/formularios/Compensado'
import Convenio from './components/formularios/Convenio'
import Economico from './components/formularios/Economico'
import Licencia from './components/formularios/Licencia'
import Renuncia from './components/formularios/Renuncia'
import Vacaciones from './components/formularios/Vacaciones'
import {loader as loaderPases} from './components/pages/Notificaciones'
import {action as registrarPaseAction} from './components/formularios/PaseDeSalida'
const router= createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Home/>,
        loader:loaderPases
      },
      {
        path:'/notificaciones',
        element:<Notificaciones/>,
        loader:loaderPases
      },
      {
        path:'/perfil',
        element:<Perfil/>
      },
      {
        path:'/empleados',
        element:<Empleados/>,
        children:[
          {
            path:'/empleados/registro',
            element:<h1>REGISTRO</h1>
          },
          {
            path:'/empleados/modificacion',
            element:<h1>Modificación</h1>
          },
          {
            path:'/empleados/renuncia',
            element:<Renuncia/>
          },
        ]
      },
      {
        path:'/formatos',
        element:<Formatos/>,
        children:[
          {
            path:'/formatos/pases',
            element:<PaseDeSalida/>,
            action: registrarPaseAction
          },
          {
            path:'/formatos/compensado',
            element: <Compensado/>
          },
          {
            path:'/formatos/convenio',
            element: <Convenio/>
          },
          {
            path:'/formatos/economico',
            element: <Economico/>
          },
          {
            path:'/formatos/licencia',
            element: <Licencia/>
          },
          {
            path:'/formatos/vacaciones',
            element: <Vacaciones/>
          }
        ]
      },
      {
        path:'/incidencias',
        element:<Incidencias/>
      }
    ]
  },
  {
    path:'/login',
    element:<Login/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
