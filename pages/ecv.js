import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import indexStyles from '../styles/index.module.css'
import blocks from '../styles/blocks.module.css'
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import RecentUploads from '../components/recentuploads';
import EcvBoxes from '../components/ecv-boxes';

export async function getStaticProps() { //async function means that this is ran before / alongside everything else since other elements on the page depend on info brought by staticprops
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function ecv({ allPostsData }) {
  return (
    <Layout ecv>
      <Head>
        <title>{siteTitle}</title>
      </Head>

     <section>
    <div className={`${utilStyles.flexRow} ${utilStyles.width100}`}>
        <EcvBoxes></EcvBoxes>
    </div>
     </section>
     
     
    </Layout>
  );
}

{/* <a href="https://www.flaticon.com/free-icons/down-arrow" title="down arrow icons">Down arrow icons created by Icon mania - Flaticon</a> */}
