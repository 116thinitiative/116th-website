import { footerLinks } from '../../shared/globals';
import './Footer.css'
import FooterLinks from './FooterLinks';

function Footer(){

    return (
        <div className='footer'>
            <FooterLinks links={footerLinks}/>
        </div>
    );
}

export default Footer;