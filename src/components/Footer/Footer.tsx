import { navLinks } from '../../shared/globals';
import './Footer.css'
import FooterLinks from './FooterLinks';

function Footer(){

    return (
        <div className='footer'>
            <FooterLinks links={navLinks}/>
        </div>
    );
}

export default Footer;