import GraficaCircular from "../GraficaCircular";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
export const Home = () => {
  const pases = useLoaderData()
  const [cantidadPasesSolicitados,setCantidadPasesSolicitados]=useState()
  const [cantidadPasesAceptados,setCantidadPasesAceptados]=useState()
  const [cantidadPasesRechazados,setCantidadPasesRechazados]=useState()
  useEffect(()=>{
    setCantidadPasesSolicitados(pases.length)
    setCantidadPasesAceptados(pases.filter(pase=> pase.confirmado === "true" && pase).length)
    setCantidadPasesRechazados(pases.filter(pase=> pase.confirmado === "false" && pase).length)
  
  },[pases.length])
  return (
    <div className="flex align-baseline">
      <div>
        <h1 className="text-4xl font-semibold text-center">
          Cantidad de Pases de Salida solicitados : {cantidadPasesSolicitados}
        </h1>
        <h1 className="text-4xl font-semibold text-center">
          Cantidad de Pases de Salida aceptados : {cantidadPasesAceptados}
        </h1>
        <h1 className="text-4xl font-semibold text-center">
          Cantidad de Pases de Salida rechazados : {cantidadPasesRechazados}
        </h1>
        <GraficaCircular
          valorMaximo={cantidadPasesSolicitados}
          valorActual={cantidadPasesAceptados}
        />
      </div>
    </div>
  );
};
