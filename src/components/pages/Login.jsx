import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import imagen from '../../assets/logo_transparent_2.png'

const Login = () => {
    document.title='HGS | Iniciar Sesión'
    const [tarjeta,setTarjeta]=useState('')
    const [password,setPassword]=useState('')
    const navigation=useNavigate()

    const handleSubmit=e=>{
        e.preventDefault()
        if([tarjeta,password].includes('' && 0)){
            alert('Todos los campos son Obligatorios')
            return
        }else if(tarjeta < 1){
            console.log('Ingrese un numero de Tarjeta Válido')
            return
        }
        navigation('/')
    }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full overflow-hidden bg-gradient-to-r from-gray-300 to-gray-500'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover sm:object-fill' src={imagen} alt="" />
        </div>

        <div className=' flex flex-col justify-center sm:pr-3'>
            <form onSubmit={handleSubmit} className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-600 p-8 px-8'>
                <h2 className='text-4xl dark:text-white font-bold text-center'>INICIAR SESIÓN</h2>
                <div className='flex flex-col text-gray-200 py-2'>
                    <label>Numero de Tarjeta</label>
                    <input onChange={e=>setTarjeta(e.target.value)} value={tarjeta} className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-600 focus:bg-gray-600 focus:outline-none  focus:text-white text-gray-900' type="number" />
                </div>
                <div className='flex flex-col text-gray-200 py-2'>
                    <label>Contraseña</label>
                    <input onChange={e=>setPassword(e.target.value)} value={password} className='p-2 rounded-lg bg-gray-200 mt-2 focus:border-blue-600 focus:bg-gray-600 focus:outline-none focus:text-white text-gray-900' type="password" />
                </div>
                <div className='flex justify-between text-gray-200 py-2'>
                    <p className='flex items-center'><input className='mr-2 acent' type="checkbox" />Recordar datos</p>
                    <p>Olvide mi contraseña</p>
                </div>
                <button type='submit' className='w-full my-5 py-2
                 bg-gray-800 shadow-lg shadow-slate-200/60 hover:bg-slate-200
                  hover:text-slate-900 hover:shadow-slate-300/30
                  hover:transition-colors duration-500
                   text-white font-semibold rounded-lg'>ENTRAR</button>
                
            </form>
        </div>
    </div>
  )
}

export default Login