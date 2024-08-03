import Image from "next/image";
import utilStyles from '../styles/utils.module.css';
import blocks from '../styles/blocks.module.css'




export default function MainGif(){
    return(
        <div className={`${blocks.boxRows} ${utilStyles.relative}`}>
            <Image className={`${blocks.banner} ${utilStyles.relative} ${utilStyles.objectCover}`}
            src='/images/scout-gif.gif'
            // onError={handleImgError}
            width={0}
            height={0}
            unoptimized={true}
            /> 
        </div>
                
    
    )
}