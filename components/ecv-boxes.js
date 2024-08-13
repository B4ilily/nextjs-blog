import utilStyles from '../styles/utils.module.css';
import Qualifications from './qualifications';
import blocks from '../styles/blocks.module.css'
import BioList from './bioblock';
import Sidebar from './sidebar';
import Experience from './experience';
import Skills from './skills';

export default function EcvBoxes(){
    return(
    <section>
        <div className={blocks.ecvboxRows}>
          <Qualifications></Qualifications>
          <Experience></Experience>
          <Skills></Skills>
          
        </div>
      </section>
    );
}
