// import Form from "app/admin/form";
import { PanelLargeContainer, PanelContainer, GroupHeaderWithImage, GroupContainer, FormattedLogo, PanelDivider } from "./containers/panelContainer";

export default function TechBlock(): JSX.Element {
    const javaSources: string[] = ["/languages/java.png", "/languages/springboot.png"];
    const jsSources: string[] = ["/languages/javascript.png", "/languages/nodejs.png", "/languages/expressjs.png"];
    const pythonSources: string[] = ["/languages/python.png", "/languages/django.png"];
    const frontEndSources: string[] = ["/languages/react.png", "/languages/html5.svg", "/languages/css.png", "/languages/tailwind.png"];
    const mobileSources: string[] = ["/languages/swift.png", "/languages/swiftui.png"];
    const databasesSources: string[] = ["/languages/mongodb.png", "/languages/mysql.png", "/languages/postgresql.png"];
    const bigDataSources: string[] = ["/languages/hive.png", "/languages/pig.png", "/languages/azkaban.jpeg", 
            "/languages/airflow.png"];
    const dataSources: string[] = ["/languages/numpy.png", "/languages/pandas.png", "/languages/scikitlearn.png", 
            "/languages/tableau.png", 
            "/languages/mode.png"];
    const cloudSources: string[] = ["/languages/aws.png", "/languages/googlecloud.jpg"];
    
    return (
        <div>
            <PanelLargeContainer> 
                <GroupHeaderWithImage imgSrc="/languages/backend.png" header="Backend"/>
                <GroupContainer>
                    <PanelContainer> {javaSources.map((src, index) => <FormattedLogo key={index} src={src}/>)} </PanelContainer>
                    <PanelContainer> <FormattedLogo src="/languages/csharp.png"/> </PanelContainer>            
                    <PanelContainer> {jsSources.map((src, index) => <FormattedLogo key={index} src={src}/>)} </PanelContainer>      
                    <PanelContainer> {pythonSources.map((src, index) => <FormattedLogo key={index} src={src}/>)} </PanelContainer>       
                </GroupContainer>            

                <PanelDivider/>

                <GroupHeaderWithImage imgSrc="/languages/frontend.png" header="Frontend"/>
                <GroupContainer>
                    <PanelContainer> {frontEndSources.map((src, index) => <FormattedLogo key={index} src={src}/>)} </PanelContainer>
                </GroupContainer>

                <PanelDivider/>

                <GroupHeaderWithImage imgSrc="/languages/mobile.png" header="Mobile"/>
                <GroupContainer>
                    <PanelContainer > {mobileSources.map((src, index) => <FormattedLogo key={index} src={src}/>)} </PanelContainer>
                </GroupContainer>
                
                <PanelDivider/>

                <GroupHeaderWithImage imgSrc="/languages/databases.png" header="Databases"/>
                <GroupContainer>
                    <PanelContainer> {databasesSources.map((src, index) => <FormattedLogo key={index} src={src}/>)} </PanelContainer>
                </GroupContainer>
             
                <PanelDivider/>

                <GroupHeaderWithImage imgSrc="/languages/bigData.png" header="Big Data"/>
                <GroupContainer>
                    <PanelContainer> {bigDataSources.map((src, index) => <FormattedLogo key={index} src={src}/>)} </PanelContainer>
                </GroupContainer>
             
                <PanelDivider/>

                <GroupHeaderWithImage imgSrc="/languages/gaming.png" header="Gaming"/>
                <GroupContainer>
                    <PanelContainer> {<FormattedLogo src="/languages/unity.png"/> } </PanelContainer>
                </GroupContainer>
             
                <PanelDivider/>

                <GroupHeaderWithImage imgSrc="/languages/cloud.png" header="Cloud"/>
                <GroupContainer>
                    <PanelContainer> {cloudSources.map((src, index) => <FormattedLogo key={index} src={src}/>)} </PanelContainer>
                </GroupContainer>
             
                <PanelDivider/>

                <GroupHeaderWithImage imgSrc="/languages/data.png" header="Data"/>
                <GroupContainer>
                    <PanelContainer> {dataSources.map((src, index) => <FormattedLogo key={index} src={src}/>)} </PanelContainer>
                </GroupContainer>

            </PanelLargeContainer>
        </div>
    ); 
}

