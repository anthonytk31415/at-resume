import Image from 'next/image';
import React, { ReactNode } from 'react'; 

export function PageHeaderH1({header}: {header: string}): JSX.Element{
    return (
        <h1 className="font-medium text-2xl mb-2 tracking-tighter">{header}</h1>
    )
}


export function FormattedLogo({src}: {src: string}): JSX.Element{
    return (
        <img src={src} alt="" style={{ width: 'auto', height: '40px'}} className = "flex relative mr-1 ml-1" />
    )
}

export function GroupHeaderWithImage({imgSrc, header}: {imgSrc: string, header: string}): JSX.Element{
    return (
        <div className={"flex flex-row items-center mt-3 mb-2" }> 
            {imgSrc!="" && <img src={imgSrc} alt="" style={{ width: '40px', height: 'auto'}} className = "flex relative mr-1 ml-1" />}
            <h3 className={"font-medium text-xl "}> {header}</h3>
        </div>
    )
}

export function GroupContainer({children} : {children: ReactNode}): JSX.Element{
    return (
        <div className="flex flex-wrap items-center relative fade md:relative mr-3 mb-3">
            {children}
        </div> 
    )
}

export  function PanelLargeContainer({children} : {children: ReactNode}): JSX.Element{
    var panelLargeClassNameRoot = "flex flex-col items-start pt-1 pb-1 pl-2 pr-2 mb-1 mt-1 " ; 
    return (
        <div className = {panelLargeClassNameRoot} 
                style={{ borderRadius: '12px', backgroundColor: '#333333', height: 'auto', width:'100%' }}
                key = {panelLargeClassNameRoot}
                > 
            {children}
        </div> 
    )
}

export function PanelContainer({children} : {children: ReactNode}): JSX.Element{
    var panelClassNameRoot = "flex flex-wrap items-center relative fade justify-center pb-1 pt-1 pl-1 pr-1 mb-1 mt-1 ml-1 mr-1 ";
    return (
        <div className = {panelClassNameRoot} 
        style={{ borderRadius: '12px', backgroundColor: 'white', width: 'auto', height: 'auto' }}
        key={panelClassNameRoot}>
            {children}

        </div> 
    )
}

export function PanelDivider(): JSX.Element{
    return (
        <div className="flex-row items-center justify-center " 
            style={{ borderTop: '0.1rem solid #555', width: '99%', margin: 'auto' }}>
        </div>
    )
}