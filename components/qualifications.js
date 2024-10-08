import utilStyles from '../styles/utils.module.css';
import blocks from '../styles/blocks.module.css'
import Image from 'next/image';

export default function Qualifications(){
    return(
        <div className={blocks.qualifications}>
            <div className={`${utilStyles.list} ${blocks.ecvText}`}>
                <h3 className={utilStyles.headingXl}>Qualifications</h3>
                <ul>
                    
                Creative Media Technology - BSc(Hons)
                     
                </ul>
                <ul>
                    
                        Level 3 Ext. Diploma Interactive Media & Software Design
                  
                    
                </ul>
                <ul>
                  
                        11 A* - GCSEs
                   
                </ul>
            </div>
            <div className={blocks.qualificationsImage}>
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