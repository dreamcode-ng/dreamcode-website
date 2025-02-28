import React from "react";
import Link from 'next/link';


const RedefineFuture = () => {
  return (
    <div className="redefine position-relative text-center">
      <div className="d-flex flex-column align-items-center justify-content-center gap-3 ">
        <div className="redefine-text mb-3">
          <h2> <span className="fw-bold">Redefinimos </span>
            el futuro de los negocios a <br></br>través de la tecnología
          </h2>
        </div>
        <div className="">
            <p className="w_color fs-5"><Link href='/about' className='w_color'>Contáctanos →</Link></p>
        </div>
      </div>
    </div>
  );
};

export default RedefineFuture;
