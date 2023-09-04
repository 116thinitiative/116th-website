import { navLinks } from '../../shared/globals';
import Logo from '../Logo/Logo';
import './Header.css'
import HeaderLinks from './HeaderLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

function Header(){
    const [isHidden, setIsHidden] = useState(true);

    return (
        <div className="header">
            <div className="logo-and-menu">
                <Logo height="15vh"/>
                <div 
                className='icon-holder'
                style={{
                    width: "wrap-content",
                    height: "wrap-content"
                }}>
                    <FontAwesomeIcon 
                    icon={faChevronUp}
                    size='xl'
                    style={{
                        transform:"rotate(180deg)",
                    }}
                    onClick={() => {
                        const header = document.querySelector(".header");
                        header?.setAttribute("style", 
                        isHidden ? "height: fit-content;" : "height: 20vh;");
                        
                        const icon = document.querySelector(".icon-holder");
                        icon?.setAttribute("style", 
                        isHidden ? "transform: rotate(180deg);" : "transform: rotate(0deg);");

                        setIsHidden(!isHidden);
                    }}/>
                </div>
            </div>
            
            <HeaderLinks links={navLinks}/>
        </div>
    );
}

export default Header;