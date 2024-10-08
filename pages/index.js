import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import indexStyles from '../styles/index.module.css'
import blocks from '../styles/blocks.module.css'
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';


export async function getStaticProps() { //async function means that this is ran before / alongside everything else since other elements on the page depend on info brought by staticprops
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <section className={utilStyles.headingMd}>
        <p>I'm Bailey! I'm currently trying to improve upon my web development skills to push further forward in my career.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
      {/* <MainGif></MainGif> */}
     <section>

      <div className={indexStyles.buttonContainer}>
        <Link href="/page2">
          <button className={`${indexStyles.button} ${indexStyles.buttonContainer} `} >
            {/* ADD BUTTON FUNCTIONALITY */}
            <Image className={utilStyles.imageToWhite}
                    src='/images/down-arrow.png'
                    width={20}
                    height={20}

            /> 
          </button>
          </Link>
       </div>
     </section>
     
     
    </Layout>
  );
}

{/* <a href="https://www.flaticon.com/free-icons/down-arrow" title="down arrow icons">Down arrow icons created by Icon mania - Flaticon</a> */}
