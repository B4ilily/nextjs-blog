import utilStyles from '../styles/utils.module.css';
import blocks from '../styles/blocks.module.css';
import masonryStyle from '../styles/masonry.module.css';
import Image from 'next/image';




export default function RecentUploads(){
    return(
        <section>
        <div className={masonryStyle.masonryColumns}>
            <div className={masonryStyle.itemsLeft}>
          <div className={masonryStyle.item}>
          <Image className={utilStyles.imageToWhite}
            src="/images/github-character.png"
            width={60}
            height={50}
            alt="custom icon linking to a github profile"   
        />         
          </div>
          
          <div className={masonryStyle.item}>
          <Image className={utilStyles.imageToWhite}
            src="/images/github-character.png"
            width={60}
            height={50}
            alt="custom icon linking to a github profile"   
        />   
          </div>
         </div>
         <div className={masonryStyle.itemsRight}>
          <div className={masonryStyle.item}>
          <Image className={utilStyles.imageToWhite}
            src="/images/github-character.png"
            width={60}
            height={50}
            alt="custom icon linking to a github profile"   
        />         
          </div>
          <div className={masonryStyle.item}>
          <h1> RECENT UPLOADS </h1>       
          </div>
          <div className={masonryStyle.item}>
          <Image className={utilStyles.imageToWhite}
            src="/images/github-character.png"
            width={60}
            height={50}
            alt="custom icon linking to a github profile"   
        />   
          </div>
         </div>
        </div>
      </section>
    );
}