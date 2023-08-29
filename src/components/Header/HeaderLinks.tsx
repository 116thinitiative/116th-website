import './HeaderLinks.css'
import { navLinkItem } from '../../shared/globals';
import Dropdown from '../Dropdown/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Button from '../Button/Button';

type HeaderLinksProps = {
    links: navLinkItem[],
    margin?: string,
};

function HeaderLinks(props: HeaderLinksProps) {
    
    return (
        <div className='header-links'>
            <ul>
                {props.links.map((link) =>{
                    return (link.type === "default" ? 
                    <li 
                    key={link.link.text}
                    className='default-item'>
                        <a href={link.link.src}>
                            {link.link.text}
                        </a>
                    </li> :
                    <li 
                    key={link.header}
                    className='dropdown-item'>
                        <Dropdown 
                        header={link.header}
                        links={link.dropdownLinks} />
                    </li>);
                })}
                <li key="instagram">
                    <a 
                    href="https://www.instagram.com/the116thinitiative"
                    target="_blank">
                        <FontAwesomeIcon 
                        icon={faInstagram} 
                        style={{color: "#000000",}}
                        className='instagram-icon' />
                    </a>
                </li>
                <li>
                    <Button text="Donate" 
                    onClick={() => 
                    window.open("https://account.venmo.com/u/the116thinitiative")}
                    />
                </li>
            </ul>
        </div>
    );
}

export default HeaderLinks;