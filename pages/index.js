import Head from "next/head";
import Navbar from "./components/Navbar";
import Page_1 from "./screens/page_1";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Ujjwal's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Page_1 />
    </div>
  );
}
