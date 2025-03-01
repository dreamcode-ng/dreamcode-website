// Boton.jsx
import React from "react";

const Boton = ({ children, onClick, className }) => {
  return (
    <button
      className={`px-4 py-2 rounded bg-blue-500 text-white ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};




// Exportación de varios botones
const ButonUno = ({ className, ...props }) => ( <Boton {...props} className={className} />);
const ButonDos = ({ className, ...props }) => ( <Boton {...props} className={className} />);


export { BotonPrimario, BotonSecundario, BotonPeligro, ButonUno };
