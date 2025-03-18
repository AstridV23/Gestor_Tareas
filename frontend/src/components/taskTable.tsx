import React from 'react';
import IUser from '../interfaces/IUser';


const ListaDeUsuarios: React.FC = () => {
  // Datos de ejemplo de usuarios
  const usuarios: IUser[] = [
    { nombre: 'Juan', apellido: 'Pérez', correo: 'juan@example.com', cuil: '20-12345678-9', fechaRealizacion: '2025-03-01' },
    { nombre: 'Ana', apellido: 'Gómez', correo: 'ana@example.com', cuil: '20-23456789-0', fechaRealizacion: '2025-02-15' },
    { nombre: 'Carlos', apellido: 'Lopez', correo: 'carlos@example.com', cuil: '20-34567890-1', fechaRealizacion: '2025-03-05' },
  ];

  return (
    <div className='p-16 h-screen bg-gray-100'>
      <h1 className='text-xl font-bold text-center mb-4'>Lista de Peticiones</h1>
      
      <div className='overflow-auto rounded-lg shadow'>
        <table className="w-full">
          <thead className='bg-gray-50 border-b-2 border-gray-200'>
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Nombre</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Apellido</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Correo</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">CUIL</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Fecha de Realización</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Resultados</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-100'>
            {usuarios.map((usuario, index) => (
              <tr key={index}>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{usuario.nombre}</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{usuario.apellido}</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{usuario.correo}</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{usuario.cuil}</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{usuario.fechaRealizacion}</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <button className="bg-blue-400 text-sm font-semibold tracking-wide text-left-white p-3 textd rounded-lg bg-opacity-50 cursor-pointer">Descargar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
    </div>
  );
};

export default ListaDeUsuarios;
