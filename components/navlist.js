import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import blocks from '../styles/blocks.module.css'

export default function NavList(){
    return(
        <div className={`${blocks.nav} ${utilStyles.reducedSpacing}`}>
            <h3 className={`${utilStyles.headingXl} ${utilStyles.reducedSpacing} `}>
                Explore
            </h3>
            <div className={`${utilStyles.uppercase} ${utilStyles.list}`}>
                <ul>
                    <Link href="/ecv">
                        E-CV
                    </Link> 
                </ul>
                <ul>
                    <Link href="/workshowcase">
                        Work Showcase
                    </Link> 
                    
                </ul>
                <ul>
                    <Link href="/interestsandhobbies">
                        Interests & Hobbies
                    </Link> 
                </ul>
                <ul>
                <Link href="/contact">
                        Contact
                    </Link>
                </ul>
            </div>
        </div>
    )
}
