import utilStyles from '../styles/utils.module.css';
import Qualifications from './qualifications';
import blocks from '../styles/blocks.module.css'
import BioList from './bioblock';
import Sidebar from './sidebar';

export default function EcvBoxes(){
    return(
    <section>
        <div className={blocks.boxRows}>
          <Qualifications></Qualifications>
          <BioList></BioList>
          <Sidebar></Sidebar>
          
        </div>
      </section>
    );
}
