import { Form } from "react-router-dom"

const Licencia = () => {
  return (
    <div className="h-96 bg-slate-200 overflow-auto rounded-sm">
      <Form>
        <div className="flex mt-10 mx-4">
            <label className=" text-lg font-semibold">
              Nombre del solicitante:{" "}
            </label>
            <input
              className="indent-5 text-2xl font-semibold w-full bg-slate-500 text-white border-2 border-slate-700"
              type={"text"}
              placeholder={"Nombre del Empleado"}
            />
          </div>
        <div className="p-5 flex justify-between">
          <div className="mx-3 my-2">
            <label className="text-lg font-semibold">Fecha: </label>
            <input className="p-2 rounded bg-slate-500 text-white border-2 border-slate-700" type={'date'}/>
          </div>
          <div className="mx-3 my-2">
            <label className="text-lg font-semibold">Licencia con Goce de Sueldo por: </label>
            <input className="text-center p-2 rounded bg-slate-500 text-white border-2 border-slate-700" type={'number'}/>
            <label className="text-lg font-semibold"> Dias</label>
          </div>         
        </div>

        <div className="p-3 flex font-bold">
          <div className=" my-2">
            <label className="text-lg font-semibold">Del Dia: </label>
            <input className="p-2 rounded bg-slate-500 text-white border-2 border-slate-700 text-center" type={'number'}/>
            <label className="text-lg font-semibold"> de: </label>
            <input className="text-center p-2 rounded bg-slate-500 text-white border-2 border-slate-700" type={'month'}/>
            <label className="text-lg font-semibold "> Al: </label>
            <input className="text-center p-2 rounded bg-slate-500 text-white border-2 border-slate-700" type={'number'}/>
            <label className="text-lg font-semibold"> de: </label>
            <input className="text-center p-2 rounded bg-slate-500 text-white border-2 border-slate-700" type={'month'}/>
          </div>         
        </div>
        
        <div className="flex flex-col items-center mt-4">
          <input
              type={"submit"}
              className="bg-slate-600 w-1/2 p-3 text-white uppercase font-bold
                    hover:bg-slate-900 cursor-pointer transition-opacity duration-300 rounded-md"
              value={"Hacer Petición"}
            />
        </div>
      </Form>
      
    </div>
  )
}

export default Licencia