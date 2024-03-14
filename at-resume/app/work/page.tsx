import { PageHeaderH1 } from "../components/containers/panelContainer";

export default function Page() {
  return (
    <section>
      <PageHeaderH1 header={"Work"}/>
      <p className="prose prose-neutral dark:prose-invert">
        This is where your work experience goes.
      </p>
    </section>
  );
}
