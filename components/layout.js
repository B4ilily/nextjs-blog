import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import MainGif from './mainGif';
import blocks from '../styles/blocks.module.css';
import Mainboxes from './mainboxes';

const name = 'Bailey Y';
export const siteTitle = 'Digital Portfolio';

export default function Layout({ children, home }) {
  return (
    <div className={blocks.pageWrap}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={blocks.headerBanner}>
        {/* THIS IS FOR THE HEADER THINGS THAT IS PRESENT WHEREVER LAYOUT IS CALLED, THE IMAGE CHANGES SIZES BASED ON PAGE e.g. <Layout home> ETC */}
        {home ? (
          <>
          <section>
             <div className={blocks.boxColumns}>

             <MainGif></MainGif>
             <Link href="/">
             <h1 className={`${utilStyles.heading2Xl} ${utilStyles.uppercase} ${utilStyles.semibold} ${utilStyles.margin0}`}>Digital Portfolio</h1>
             </Link>
             <Mainboxes></Mainboxes>

             </div>
          </section>
          
          </>
        ) : (
          <>
          <section>
            <Link href="/">
              <h1 className={`${utilStyles.headingXl} ${utilStyles.uppercase} ${utilStyles.semibold}`}>Digital Portfolio</h1>
            </Link>
            <Mainboxes></Mainboxes>
          </section>
          </>
        )}
      </header>
      {/* THIS IS WHERE ALL OTHER CONTENT GOES WHEN LAYOUT IS CALLED ONTO OTHER PAGES */}
      <main>{children}</main>
      {/* THIS IS WHERE CONTENT INTENDED FOR THE BOTTOM OF THE PAGE GOES */}
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}