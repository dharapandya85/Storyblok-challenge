import Head from 'next/head';
import ResourceFinder from '../components/ResourceFinder.jsx';
export default function Home(){
  return(
    <>
    <Head>
      <title>AI Resource Finder</title>
      </Head>
      <main>
        <ResourceFinder/>
      </main>
    </>
  );
}