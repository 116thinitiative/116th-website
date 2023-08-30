import './HeaderLinks.css'
import { navLinkItem } from '../../shared/globals';
import Dropdown from '../Dropdown/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Button from '../Button/Button';
import { Link } from 'react-router-dom'

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
                        <Link to={link.link.src}>
                            {link.link.text}
                        </Link>
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
                    <Link 
                    to="https://www.instagram.com/the116thinitiative"
                    target="_blank">
                        <FontAwesomeIcon 
                        icon={faInstagram} 
                        style={{color: "#000000",}}
                        className='instagram-icon' />
                    </Link>
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