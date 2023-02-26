import { useEffect,useState } from "react";
import { Outlet,Link,useLocation } from "react-router-dom";
import { opcionesMenu } from "../data/opcionesMenu.js";
import LinkMenu from "./LinkMenu.jsx";
import imagenArrow from '../../src/assets/control.png'
import imagenUser from '../assets/perfil.svg'
const Layout = () => {
  const [title,setTitle]=useState('')
  const location=useLocation()
  //cada que cambien de url se va a actualizar el title
  useEffect(()=>{
    document.title='HGS | '+ title
  },[title])
  const [open, setOpen] = useState(true);
  return (
    <div className="flex bg-gray-500 h-screen overflow-hidden">
      <div
        className={` ${
          open ? "w-64" : "w-20 "
        } bg-gray-700 h-screen p-2 pt-8 duration-300`}
      >
        <Link to={'/perfil'} className={`${location.pathname==='/perfil' ? 'bg-slate-900 transition-transform duration-500 rounded-md my-3 flex space-x-4 text-white font-semibold text-lg p-2' : 'transition-transform duration-500 rounded-md my-3 flex space-x-4 text-white font-semibold text-lg p-2 hover:bg-slate-900'} duration-300`}>
          <img
            src={imagenUser}
            className={`object-cover  h-12 w-12 cursor-pointer duration-300 ${
              open && "object-fil rotate-[360deg] h-12 w-12"
            }`}
          />
          <h1
            className={`text-white font-medium text-xl duration-300 mt-2 ${
              !open && "hidden"
            }`}
          >
            Perfil
          </h1>
        </Link>
        <div className="pt-6 duration-500">
          {opcionesMenu?.length &&
            opcionesMenu.map((opcionMenu) => (
              <LinkMenu 
                opcionMenu={opcionMenu} 
                open={open} 
                setTitle={setTitle}
                key={opcionMenu.id}
              />
            ))}
            {!open ?(
              <img
              src={imagenArrow}
              className={`p-3 hover:bg-slate-900 cursor-pointer mt-5
                rounded-full duration-500 ${!open && "rotate-180"}`}
              onClick={() => setOpen(!open)}
            />
            ):(
              <div onClick={() => setOpen(!open)} className={`flex text-white hover:text-black hover:bg-white cursor-pointer rounded-md duration-500 mt-16`}>
                  <img
                    src={imagenArrow}
                    className={`p-3 duration-500 
                      rounded-full brightness-50 ${!open && "rotate-180"}`}
                  />
                  <p className="mt-4 text-lg font-bold">Ocultar Menú</p>
              </div>
            )}
            
        </div>
      </div>
      <div className={`w-full bg-gray-400 overflow-auto`}>
        <Outlet/>
      </div>
    </div>
  );
};
export default Layout;
