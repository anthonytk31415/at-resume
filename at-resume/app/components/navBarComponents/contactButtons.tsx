import Image from 'next/image';
import React from 'react';

export function SocialMediaButton({link, src, target} : {link: string, src: string, target: string}): JSX.Element {
  return (
    <div> 
      <a href={link} target={target}> 
        <Image src={src} alt="" width={18} height={18} className = "flex relative mr-1 ml-1"/>
      </a>              
    </div> 
  )
}

export default function ContactButtons(){
  return (
    <div className = "flex flex-row space-x-2" >
        <SocialMediaButton link={"https://www.linkedin.com/in/anthony-trankiem-3902035/"} src={"/buttons/In-White-128.png"} target={"_blank"}/>
        <SocialMediaButton link={"https://github.com/anthonytk31415/"} src={"/buttons/github.png"} target={"_blank"}/>
        <SocialMediaButton link={"mailto:atrankiem@gmail.com"} src={"/buttons/mail.png"} target={""}/>        
    </div>
    
  );
};