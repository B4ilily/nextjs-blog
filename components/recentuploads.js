import utilStyles from '../styles/utils.module.css';
import blocks from '../styles/blocks.module.css';
import masonryStyle from '../styles/masonry.module.css';
import Image from 'next/image';




export default function RecentUploads(){
    return(
        <section>
        <div className={masonryStyle.masonryColumns}>
          <div className={masonryStyle.parent}>
            <div className={masonryStyle.div1}>
              <Image className={`${utilStyles.width100} ${utilStyles.relative} ${utilStyles.objectCover} ${utilStyles.height15em}`}
                src="/images/oliver-cloud-cover.jpg"
                width={300}
                height={100}
                unoptimized="true"
                alt="Example of work"   
            />           
            </div>

          <div className={masonryStyle.div2}> 
          <Image className={`${utilStyles.width100} ${utilStyles.relative} ${utilStyles.objectCover} ${utilStyles.height15em}`}
            src="/images/rfcr-rebrand.png"
            width={60}
            height={50}
            unoptimized="true"
            alt="custom icon linking to a github profile"   
        />         

          </div>
          <div className={masonryStyle.div3}> 
          <Image className={`${utilStyles.width100} ${utilStyles.relative} ${utilStyles.objectCover} ${utilStyles.height15em}`}
            src="/images/SM-cover.png"
            width={60}
            height={50}
            unoptimized="true"
            alt="custom icon linking to a github profile"  
        />         

          </div>

          
          <div className={masonryStyle.div4}> 
          <h2 className={`${utilStyles.pageTitle} ${utilStyles.margin0}`}> RECENT UPLOADS </h2>     

          </div>

          <div className={masonryStyle.div5}> 
          <Image className={`${utilStyles.width100} ${utilStyles.relative} ${utilStyles.objectCover} ${utilStyles.height15em}`}
            src="/images/animaltime1.png"
            width={60}
            height={50}
            unoptimized="true"
            alt="custom icon linking to a github profile"  
        />         

          </div>
          
          <div className={masonryStyle.div6}> 
          <Image className={`${utilStyles.width100} ${utilStyles.relative} ${utilStyles.objectCover} ${utilStyles.height15em}`}
            src="/images/ted-companyprofile.jpg"
            width={60}
            height={50}
            unoptimized="true"
            alt="custom icon linking to a github profile"  
        />         

          </div>
          </div>
            
        
    
         </div>
      </section>
    );
}