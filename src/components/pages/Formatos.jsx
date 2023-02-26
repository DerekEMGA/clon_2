import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { tiposDeFormatos } from '../../data/tiposDeFormatos'


export const Formatos = () => { 
  const [numeroTarjeta,setNumeroTarjeta]=useState("")
  const navigate=useNavigate()

  const handleNavigate=(link)=>{
    if(link.length>0){
      navigate(`/formatos/${link}`)
      document.title=`HGS | Formatos | ${link[0].toUpperCase()}${link.substring(1)}`
    }else{
      navigate('/formatos')
      document.title=`HGS | Formatos`
    }
  }
  
  return (
    <div className=''>
      <h1 className='text-center text-4xl font-semibold'>Seleccione el formato que quiera registrar</h1>
      <div>
        <div className='mx-10 my-10 justify-between flex'>
          <select onChange={e=>handleNavigate(e.target.value)} className='text-center p-3 rounded text-lg font-semibold border-solid border-slate-600 border'>
            <option value={''}> -- Seleccione un Formato-- </option>
            {tiposDeFormatos?.length && 
              tiposDeFormatos.map(formato=>{
                return <option key={formato.id} value={formato.value}>{formato.title}</option>
                }
              )
            }
          </select>
          <div>
            <label className='text-lg font-semibold'>Numero de tarjeta del empleado: </label>
            <input onChange={e=>setNumeroTarjeta(e.target.value)}  value={numeroTarjeta ||" "} type={'number'} className='shadow-md border-solid border-slate-600 border rounded p-3 text-center text-lg font-bold'/>
          </div>
        </div>
        <div className='mx-5'>
          <Outlet
            numeroTarjeta={numeroTarjeta}
          />
        </div>
      </div>
    </div>
  )
}
