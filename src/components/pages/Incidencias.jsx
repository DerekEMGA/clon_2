import React from 'react'

export const Incidencias = () => {
  return (
    <div className='text-center mx-16 font-semibold text-2xl'>
      Aqui va aparecer una tabla con las incidencias que tenga el empleado,
      tendrá un input para ingresar el numero de tarjeta para buscar
      las incidencias. <span className='text-red-800'>posible cambio de nombre (reportes),
       para que funcione como un submenu que incluya: </span>

       <ul className='text-justify'>
          <li>- reportes trimestrales, anuales, etc</li>
          <li>- kardex libro</li>
          <li>- incidencias (del mes)</li>
       </ul>
    </div>
  )
}
