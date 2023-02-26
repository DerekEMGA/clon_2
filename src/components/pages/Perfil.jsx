export const Perfil = ({ user }) => {
  document.title=`HGS | Perfil`
  return (
    <div className="flex items-center justify-center h-full text-white">
      <div className="w-full mx-4 my-8 bg-slate-500 rounded-md shadow-md overflow-hidden">
        <div className="p-4">
          <h2 className="text-3xl font-semibold mb-2 text-center">{'Perfil del Usuario'}</h2>
          <div className="flex">
            <h2 className="p-2 text-xl font-semibold mb-2">{'Nombre completo:'}</h2>
            <label className="p-2 text-xl  mb-2">{'Alvaro Yahir Ramos Alvarado'}</label>
          </div>
          
          <div className="flex">
            <h2 className="p-2 text-xl font-semibold mb-2">{'Nomina:'}</h2>
            <label className="p-2 text-xl  mb-2">{'Eventual'}</label>
          </div>

          <div className="flex">
            <h2 className="p-2 text-xl font-semibold mb-2">{'Departamento:'}</h2>
            <label className="p-2 text-xl  mb-2">{'Recursos Humanos'}</label>
          </div>
          
          <div className="flex">
            <h2 className="p-2 text-xl font-semibold mb-2">{'Turno:'}</h2>
            <label className="p-2 text-xl  mb-2">{'Fin de Semana'}</label>
          </div>

          <div className="flex">
            <h2 className="p-2 text-xl font-semibold mb-2">{'Telefono:'}</h2>
            <label className="p-2 text-xl  mb-2">{'844123456'}</label>
          </div>

          <div className="flex">
            <h2 className="p-2 text-xl font-semibold mb-2">{'Dirección'}</h2>
            <label className="p-2 text-xl  mb-2">{'calle 1 y 2'}</label>
          </div>
        </div>
      </div>
    </div>
  )
}
