export const getEmpleado=async(numeroTarjeta)=>{
    const res = await fetch(`${import.meta.env.VITE_API_URL}/empleados/${numeroTarjeta}`)
    const empleado = await res.json()
    return empleado
  }