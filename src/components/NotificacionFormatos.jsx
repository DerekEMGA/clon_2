const NotificacionFormatos = ({mensaje}) => {
  return (
    <div className="mt-10 w-3/4 mx-auto bg-slate-600 shadow-lg p-5 text-white">
      <p className="text-lg mb-4">{mensaje}</p>
      <div className="flex justify-between">
        <button className="bg-green-600  py-2 px-4 rounded hover:bg-green-700">
          Confirmar
        </button>
        <button className="bg-red-600  py-2 px-4 rounded hover:bg-red-700">
          Denegar
        </button>
      </div>
    </div>
  );
};

export default NotificacionFormatos;
