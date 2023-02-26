import React from "react";
import { Form } from "react-router-dom";
const Compensado = () => {
  return (
    <div className="h-96 bg-slate-200 overflow-auto rounded-sm">
      <Form>
      <div className="flex mt-6 mx-4">
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
            <input
              className="p-2 rounded bg-slate-500 text-white border-2 border-slate-700"
              type={"date"}
            />
          </div>
          <div className="mx-3 my-2">
            <label className="text-lg font-semibold">Onomastico: </label>
            <input
              className="text-center p-2 rounded bg-slate-500 text-white border-2 border-slate-700"
              type={"text"}
            />
          </div>
          <div className="mx-3 my-2 w-full mt-7">
            <label className="text-lg font-semibold">
              Por haber laborado tiempo extraordinario los dias:{" "}
            </label>
            <input
              className="text-center p-2 rounded bg-slate-500 text-white border-2 border-slate-700"
              type={"text"}
            />
          </div>
        </div>

        <div className="font-bold">
          <div className="flex justify-around text-2xl font-bold">
            <p>INICIA</p>
            <p>REANUDA</p>
          </div>
          <div className="flex justify-evenly space-x-5 mt-2 px-4">
            <input
              className="w-full text-xl font-bold py-3 text-center rounded-md border-2 border-slate-700"
              type={"date"}
            />
            <input
              className="w-full text-xl font-bold py-3 text-center rounded-md border-2 border-slate-700"
              type={"date"}
            />
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
  );
};

export default Compensado;
