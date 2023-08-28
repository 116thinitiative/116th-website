import { navLinks } from '../../shared/globals';
import Logo from '../Logo/Logo';
import './Header.css'
import HeaderLinks from './HeaderLinks';

type HeaderProps = {
    
};

function Header(props: HeaderProps){

    return (
        <div className="header">
            <Logo height="150px"/>
            <HeaderLinks links={navLinks}/>
        </div>
    );
}

export default Header;