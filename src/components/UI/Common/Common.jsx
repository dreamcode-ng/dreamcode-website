import style from './common.module.css';

// Usado para Nuestro Talent y Proceso de Consultoria
export const BoxContainer = ({ children, className = "" }) => {
    return (
      <div className={`${style.container_box} d-flex justify-center row w-100 ${className}`}>
        {children}
      </div>
    );
  };

export const BoxChild = ({ children, className = "" }) => {
    return (
        <div className={`h-100 col-sm-12 col-lg col-md-6 px-4 ${className}`}>
        {children}
        </div>
    );
};


export const ImageBox = ({}) => {
  return (
    <></>
  )
}


