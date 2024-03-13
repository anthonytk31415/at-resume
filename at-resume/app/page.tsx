import { PageHeaderH1 } from "./components/containers/panelContainer";

export default function Home() {

  return (
    <section>
      <PageHeaderH1 header={"Oh, hi!"}/>
      <p className="prose prose-neutral dark:prose-invert">
      Welcome! My name is Anthony Trankiem, and I am so happy you came here! This site is created to showcase some of my work and accomplishments. This is a work in progress so bear with me!
      </p>
    </section>
  );
}
