import Image from "next/image";

export interface CollegeBlockProps{
    school: string; 
    degree: string; 
    image: string; 
}

export default function CollegeBlock({school, degree, image}: {school: string, degree: string, image: string}): JSX.Element {

    return (
        <div className = "flex flex-row mr-3 mb-4 mt-4 items-center relative pb-0 fade md:overflow-auto scroll-pr-6 md:relative mr-3"> 
            <div> 
                <Image src={image} alt="" width={42} height={42}className = "flex relative mr-1 ml-1" />
            </div>
            <div className = "">
                <p className="prose prose-neutral dark:prose-invert text-lg ">{school} </p>
                <p className="prose prose-neutral dark:prose-invert text-md">{degree}</p>
            </div>

        </div> 
    ); 
}
