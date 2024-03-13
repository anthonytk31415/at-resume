import CollegeBlock, { CollegeBlockProps } from '../components/containers/collegeBlock';
import { GroupHeaderWithImage, PageHeaderH1, PanelDivider, PanelLargeContainer } from '../components/containers/panelContainer';

export const metadata = {
  title: 'Education',
  description: 'School is cool.',
};

export default function EducationPage(): JSX.Element {

    const schools: string[] = ["University of California, Berkeley", "University of Southern California"];
    const degrees: string[] = ["Bachelor of Arts, Applied Mathematics", "Master of Business Administration"];
    const degreeImages: string[] = ["/colleges/ucb.jpeg", "/colleges/usc.jpeg"];
    const collegeBlockInput: CollegeBlockProps[] = [];
    for (let i = 0; i < schools.length; i ++ ){
        collegeBlockInput.push({school: schools[i], degree: degrees[i], image: degreeImages[i]});
    }
    
    const certs: string[] = ["App Academy", "University of Helsinki", "Stony Brook University"];
    const desc: string[] = ["Web Development Full Stack Bootcamp", "Object-Oriented Programming with Java", "Data Structures and Algorithms"];
    const certsImages: string[] = ["/colleges/appAcademy.jpeg","/colleges/uhelsinki_logo.jpeg", "/colleges/Stony_Brook_University_seal.png"];
    const certsBlockInput: CollegeBlockProps[] = [];
    for (let i = 0; i < certs.length; i ++ ){
        certsBlockInput.push({school: certs[i], degree: desc[i], image: certsImages[i]});
    }

    return (
        <section key={"EducationPage"}>
            <PageHeaderH1 header={"Education"}/>
            <PanelLargeContainer>
                <GroupHeaderWithImage imgSrc={""} header={"Universities"} />
                <div className = "tracking-tighter ">
                    {collegeBlockInput.map((item, index) => (
                        <div key={index}>
                            {CollegeBlock(item)}
                        </div>
                    ))}                    
                </div>
                
                <PanelDivider/> 

                <GroupHeaderWithImage imgSrc={""} header={"Certifications and Coursework"} />
                <div className = "tracking-tighter ">
                    {certsBlockInput.map((item, index) => (
                        <div key={index}>
                            {CollegeBlock(item)}
                        </div>
                    ))}
                </div>
            </PanelLargeContainer>
        </section>
    );
}
