import { navLinks } from '../../shared/globals';
import Logo from '../Logo/Logo';
import './Header.css'
import HeaderLinks from './HeaderLinks';

function Header(){

    return (
        <div className="header">
            <Logo height="150px"/>
            <HeaderLinks links={navLinks}/>
        </div>
    );
}

export default Header;