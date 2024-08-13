import utilStyles from '../styles/utils.module.css';
import blocks from '../styles/blocks.module.css'
import Image from 'next/image';

export default function Experience(){
    return(
        <div className={blocks.experience}>
            <div className={`${utilStyles.list} ${blocks.ecvText}`}>
                <h3 className={utilStyles.headingXl}>Experience</h3>
                <ul>
                    
                April 2021 - July 2024: Graphic Designer @ 
                The Energy Desk
                     
                </ul>
                <ul>
                    
                October 2020 - January 2021: Warehouse
                Operative @ Studio
                  
                    
                </ul>
                <ul>
                  
                April 2018 - August 2018: Marshal @ 
                Jumpworks
                   
                </ul>
            </div>
            <div className={blocks.experienceImage}>
            <Image className={`${utilStyles.width100} ${utilStyles.relative} ${utilStyles.objectCover} ${utilStyles.height15em}`}
                src="/images/oliver-cloud-cover.jpg"
                width={300}
                height={100}
                unoptimized="true"
                alt="Example of work"   
            />           
            </div>

            </div>
           
                    
             
                
);
}