import { useNavigate,Outlet } from 'react-router-dom'
import { opcionesEmpleados } from '../../data/opcionesEmpleados'
export const Empleados = () => {
  const navigate=useNavigate()
  return (
    <div>
        <h1 className='text-4xl font-bold text-center content-center grid '>Empleados</h1>


        <div className='content-center flex justify-evenly text-white text-center text-3xl font-semibold'>
        <div className='bg-slate-700 w-60 h-60 rounded-lg hover:bg-slate-900 content-center grid'><p>Registro de empleado</p></div>
        <div className='bg-slate-700 w-60 h-60 rounded-lg hover:bg-slate-900 content-center grid'><p>Modificación de Expediente</p></div>
        <div className='bg-slate-700 w-60 h-60 rounded-lg hover:bg-slate-900 content-center grid'><p>Renuncia</p></div>
        </div>  
    </div>
  )
}
