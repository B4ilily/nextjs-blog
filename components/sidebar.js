import utilStyles from '../styles/utils.module.css';
import blocks from '../styles/blocks.module.css'
import Image from 'next/image'

export default function Sidebar(){
    return(
        <div className={blocks.sidebar}>
        <Image className={utilStyles.imageToWhite}
            src="/images/github-character.png"
            width={40}
            height={30}
            alt="custom icon linking to a github profile"   
        />         
        <hr className={utilStyles.seperationLine}></hr>
        <Image className={utilStyles.imageToWhite}
            src="/images/paper-plane.png"
            width={40}
            height={30}
            alt="custom icon linking to a github profile"   
        />  
        <hr className={utilStyles.seperationLine}></hr>
        <Image className={utilStyles.imageToWhite}
            src="/images/rain.png"
            width={40}
            height={30}
            alt="custom icon linking to a github profile"   
        />  
        </div>
    );
}

/* 
    <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Dave Gandy - Flaticon</a>
    <a href="https://www.flaticon.com/free-icons/send" title="send icons">Send icons created by Pixel perfect - Flaticon</a>
    <a href="https://www.flaticon.com/free-icons/rain" title="rain icons">Rain icons created by meaicon - Flaticon</a>



*/