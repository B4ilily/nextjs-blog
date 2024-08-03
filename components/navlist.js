import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import blocks from '../styles/blocks.module.css'

export default function NavList(){
    return(
        <div className={`${blocks.nav} ${utilStyles.reducedSpacing}`}>
            <p className={`${utilStyles.headingXl} ${utilStyles.reducedSpacing}`}>
                Explore
            </p>
            <div class={`${utilStyles.uppercase} ${utilStyles.list}`}>
                <ul>
                    E-CV
                </ul>
                <ul>
                    Work Showcase
                </ul>
                <ul>
                    Interests & Hobbies
                </ul>
                <ul>
                    Contact
                </ul>
            </div>
        </div>
    )
}
