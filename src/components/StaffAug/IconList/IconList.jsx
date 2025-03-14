import React from 'react';
import style from './iconList.module.css';
import ContainerSection from '../../UI/Containers/ContainerSection';
import { FaReact, FaAngular, FaJava, FaPython, FaNode, FaAws, FaPhp } from "react-icons/fa";
import { IoLogoJavascript, IoLogoIonic  } from "react-icons/io5";
import { DiGroovy  } from "react-icons/di";
import { TbBrandKotlin, TbBrandReactNative  } from "react-icons/tb";
import { SiCucumber, SiSelenium, SiApachekafka, SiFlutter } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

export default function CirculeList({ title }) {

    const icons = [
        FaReact, FaAngular, FaJava, FaPython, FaNode, FaAws, FaPhp,
        IoLogoJavascript, IoLogoIonic, DiGroovy, SiFlutter, VscAzure,
        TbBrandKotlin, TbBrandReactNative, SiCucumber, SiSelenium, SiApachekafka,
    ];        

    return (
        <ContainerSection>
            <div className={`${style.circuleList}`}>
                <div className='mb-5'>
                    <h2 className='text-center f-lg-40 w_color'>{title}</h2>
                </div>
                <div className="container my-2">
                    <div className='row justify-content-center gap-5'>     
                        {
                            icons.map((Icon, i) => (
                                <CirculeListItem 
                                    key={i}
                                    icon={<Icon color="#999" size={60}/>} />
                            ))
                        }                  
                    </div>
                </div>
            </div>
        </ContainerSection>
    );
}

function CirculeListItem({ icon }) {
    return (  
        <div className='col-lg-auto col'>
                {icon}
        </div>
    );
}
