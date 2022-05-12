import Head from "next/head";
import Contact from "../components/Contact";
import Page_1 from "../screens/page_1";
import Page_2 from "../screens/Page_2";
import Page_3 from "../screens/Page_3";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Ujjwal's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Page_1 />
      <Page_2 />
      <Page_3 />
      <Contact />
    </div>
  );
}
