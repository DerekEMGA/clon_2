import { useLoaderData } from "react-router-dom";
import { getPases } from "../../../api/paseDeSalida";
import NotificacionFormatos from "../NotificacionFormatos";

export const loader = () => {
  const pases = getPases();
  return pases;
};

export const Notificaciones = () => {
  const pases = useLoaderData();
  return (
    <div className="overflow-auto">
      <h1 className="font-bold text-4xl text-center">Notificaciones</h1>
      <div>
        {pases.length ? (
          pases.map((pase) => (
            <NotificacionFormatos
              mensaje={`El usuario ${pase.nombre} ha tramitado un pase de salida`}
            />
          ))
        ) : (
          <h1 className="text-center text-2xl font-bold">
            No hay notificaciones aún
          </h1>
        )}
      </div>
    </div>
  );
};
