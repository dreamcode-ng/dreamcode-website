"use client";
import React from 'react';
import style from './iconList.module.css';
import ContainerSection from '../../UI/Containers/ContainerSection';
import { FaReact, FaAngular, FaJava, FaPython, FaNode, FaAws, FaPhp } from "react-icons/fa";
import { IoLogoJavascript, IoLogoIonic  } from "react-icons/io5";
import { DiGroovy  } from "react-icons/di";
import { TbBrandKotlin, TbBrandReactNative  } from "react-icons/tb";
import { SiCucumber, SiSelenium, SiApachekafka, SiFlutter, SiTypescript } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

export default function IconList ({ title }) {

    const icons = [
        FaReact, FaAngular, FaJava, FaPython, FaNode, FaAws, FaPhp,
        IoLogoJavascript, IoLogoIonic, DiGroovy, SiFlutter, VscAzure, SiTypescript, 
        TbBrandKotlin, TbBrandReactNative, SiCucumber, SiSelenium, SiApachekafka,
    ];        

    return (
        <ContainerSection>
            <div className={`${style.IconList}`}>
                <div className='mb-5'>
                    <h2 className='text-center f-lg-40 f-sm-30 w_color'>{title}</h2>
                </div>
                <div className="container my-2">
                    <div className='row justify-content-center gap-5'>     
                        {
                            icons.map((Icon, i) => (
                                <div key={i} className='col-lg-auto col'>
                                    <Icon size={60}/>
                                </div>
                            ))
                        }                  
                    </div>
                </div>
            </div>
        </ContainerSection>
    );
}
