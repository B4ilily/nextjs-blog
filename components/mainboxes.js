import utilStyles from '../styles/utils.module.css';
import NavList from './navlist';
import blocks from '../styles/blocks.module.css'
import BioList from './bioblock';
import Sidebar from './sidebar';

export default function Mainboxes(){
    return(
    <section>
        <div className={blocks.boxRows}>
          <NavList></NavList>
          <BioList></BioList>
          <Sidebar></Sidebar>
          
        </div>
      </section>
    );
}
