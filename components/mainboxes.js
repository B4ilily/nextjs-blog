import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import blocks from '../styles/blocks.module.css'

export default function Mainboxes(){
    return(
    <section>
        <div className={blocks.boxRows}>
          <div className={`${blocks.nav} ${utilStyles.reducedSpacing}`}>
              <ul>
                Explore
              </ul>
              <ul>
                E-CV
              </ul>
              <ul>
                Work Showcase
              </ul>

          </div>
          <div className={blocks.bio}>
            <p className={`${utilStyles.headingXl} ${utilStyles.reducedSpacing}`}> Bailey Yardley </p>
            <p className={utilStyles.headingMd}> Bro ipsum dolor sit amet gondy ollie Whistler titanium, 
              schwag epic cornice flow rigid jib 360. Frozen chicken heads brain bucket Whistler yard sale couloir. 
              Brain bucket bomb hole ride, hot dogging moguls chain suck line sketching ollie. Corduroy rail butter drop stomp, 
              park bro bro bonk roadie huck DH rigid flow japan air. Berm air laps skid lid. Crunchy titanium butter, schraeder lid glades poaching 
              free ride corduroy gondy park. Dope DH reverse camber pipe grunt, apres deck piste laps.
            </p>
            
          </div>
          <div className={blocks.sidebar}>
            
          </div>
        </div>
      </section>
    );
}
