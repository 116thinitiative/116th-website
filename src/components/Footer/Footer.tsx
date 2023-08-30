import { navLinks } from '../../shared/globals';
import EmailForm from './EmailForm';
import './Footer.css'
import FooterLinks from './FooterLinks';

function Footer(){

    return (
        <div className='footer'>
            <FooterLinks links={navLinks}/>
            <EmailForm />
        </div>
    );
}

export default Footer;