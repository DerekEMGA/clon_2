import home from '../assets/home.svg'
import notifications from '../assets/notifications.svg'
import formatos from '../assets/formatos.svg'
import incidencias from '../assets/incidencias.svg'
import empleados from '../assets/empleados.svg'
//import salir from '../assets/exit.svg'
//para cambiar el relleno de una imagen svg style="fill:#fff"
export const opcionesMenu = [
    { id:1,title: "Inicio", src: home,path:'/' },
    { id:2,title: "Notificaciones", src: notifications,path:'/notificaciones' },
    { id:3,title: "Formatos", src: formatos, path:'/formatos' },
    { id:4,title: "Incidencias", src: incidencias,path:'/incidencias'},
    {id:5,title:'Empleados',src:empleados,path:'/empleados'},
  ];