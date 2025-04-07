import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { URL_WHATSAPP } from '@/assets/Constants';

function Flotantes() {

    return (            
        <div className="flotante">
            <a href={URL_WHATSAPP}>
                <FaWhatsapp size={30}/>
            </a>
        </div>
    );
}

export default Flotantes;