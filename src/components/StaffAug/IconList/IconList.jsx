"use client";
import React from 'react';
import style from './iconList.module.css';
import ContainerSection from '../../UI/Containers/ContainerSection';
import { FaReact, FaAngular, FaJava, FaPython, FaNode, FaAws, FaPhp } from "react-icons/fa";
import { IoLogoJavascript, IoLogoIonic  } from "react-icons/io5";
import { DiGroovy  } from "react-icons/di";
import { TbBrandKotlin, TbBrandReactNative  } from "react-icons/tb";
import { SiCucumber, SiSelenium, SiApachekafka, SiFlutter, SiTypescript, SiKubernetes, SiAzuredevops } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { useTranslation } from 'next-i18next';

export default function IconList ({ title }) {
    const { t } = useTranslation('staff');

    const icons = [
        { Icon: FaReact, key: "react" },
        { Icon: FaAngular, key: "angular" },
        { Icon: FaJava, key: "java" },
        { Icon: FaPython, key: "python" },
        { Icon: FaNode, key: "node" },
        { Icon: FaAws, key: "aws" },
        { Icon: FaPhp, key: "php" },
        { Icon: IoLogoJavascript, key: "javascript" },
        { Icon: IoLogoIonic, key: "ionic" },
        { Icon: DiGroovy, key: "groovy" },
        { Icon: SiFlutter, key: "flutter" },
        { Icon: VscAzure, key: "azure" },
        { Icon: SiTypescript, key: "typescript" }, 
        { Icon: TbBrandKotlin, key: "kotlin" },
        { Icon: TbBrandReactNative, key: "react_native" },
        { Icon: SiCucumber, key: "cucumber" },
        { Icon: SiSelenium, key: "selenium" },
        { Icon: SiApachekafka, key: "kafka" },
        { Icon: SiKubernetes, key: "microservices" },
        { Icon: SiAzuredevops, key: "devops" },
    ];        

    return (
        <ContainerSection>
            <div className={`${style.IconList}`}>
                <div className='mb-5'>
                    <h2 className='text-center f-lg-40 f-sm-30 w_color'>{title}</h2>
                </div>
                <div className="container my-2">
                    <div className='row justify-content-center gap-5 gap-lg-3'>     
                        {
                            icons.map(({ Icon, key }, i) => {
                                const name = t(`icon_names.${key}`);
                                return (
                                    <div key={i} className='col-lg-auto col' title={name}>
                                        <Icon size={60} title={name}/>
                                    </div>
                                );
                            })
                        }                  
                    </div>
                </div>
            </div>
        </ContainerSection>
    );
}
