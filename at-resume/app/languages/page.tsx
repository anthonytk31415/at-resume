// import { PageHeaderH1 } from "app/components/containers/panelContainer";
// import TechBlock from "app/components/techBlock";

import { PageHeaderH1 } from "../components/containers/panelContainer";
import TechBlock from "../components/techBlock";

export const metadata = {
  title: 'Languages',
  description: 'Lanuages I have programmed in.',
};

export default function LanguagesPage(): JSX.Element {
  return (
    <section key={"languagesPage"}>
        <PageHeaderH1 header={"Languages"}/>
        <TechBlock />
    </section>
  );
}
