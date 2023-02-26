import { Link, useLocation } from "react-router-dom"

const LinkMenu = ({opcionMenu,open,setTitle}) => {
    const {title,src,path}=opcionMenu
    const location=useLocation()
    //hacemos el title dinamico con este hook de setTitle
    const titleChanger=()=>{
        if(location.pathname===path){
            setTitle(title)
        }
    }
    titleChanger()
    const focusOptionFormatos=()=>{
        if(location.pathname.includes('/formatos') && title==="Formatos"){
            return true
        }
        return false
    }
    const focusOpcionesEmpleados=()=>{
        if(location.pathname.includes('/empleados') && title==="Empleados"){
            return true
        }
        return false
    }
  return (
    <>
        {open===true ?(   
            <Link to={path} className={`${location.pathname===path || focusOptionFormatos()||focusOpcionesEmpleados() ? 'bg-slate-900 transition-transform duration-500 rounded-md my-3 flex space-x-4 text-white font-semibold text-lg p-2' : 'transition-transform duration-500 rounded-md my-3 flex space-x-4 text-white font-semibold text-lg p-2 hover:bg-slate-900'}`}>
                <img className="h-10 w-10 " src={src}/>
                <p className="mt-2">{title}</p>
            </Link>  
        ):(
            <Link to={path}>
                <img className={`${location.pathname===path || focusOptionFormatos()||focusOpcionesEmpleados() ? 'h-12 w-12 rounded-md p-1  mt-5 cursor-pointer bg-slate-900 ' : 'h-12 w-12 rounded-md p-1 mt-5 cursor-pointer hover:duration-500 hover:bg-slate-900 hover:transition-transform duration-500'} ml-2`} src={src}/>
            </Link>
        )}
    </>
  )
}

export default LinkMenu