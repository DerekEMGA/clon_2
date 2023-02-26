import imagenError from '../../assets/error.svg'

export const Error = () => {
    document.title= 'HGS | Error'
  return (
    <div className='block h-screen '>
        <div className='h-1/4  bg-gradient-to-t from-slate-700 to-slate-800 w-full'>
            <p className='text-center text-2xl font-semibold text-white'>Hospital General Saltillo</p>
        </div>
        <div className='h-1/4 bg-gradient-to-t from-slate-600 to-slate-700  w-full'>
        <p className='font-bold text-center text-6xl text-white mx-'>Ups!! ha ocurrido un error, porfavor entra a una url válida</p>
        </div>
        <div className='h-1/4 bg-gradient-to-t from-slate-500 to-slate-600 w-full flex flex-col justify-center items-center'>
            <img className='h-40 w-40' src={imagenError}/>
        </div>
        <div className='h-1/4 bg-gradient-to-t from-slate-400 to-slate-500 w-full'>
            
        </div>
    </div>
  )
}
