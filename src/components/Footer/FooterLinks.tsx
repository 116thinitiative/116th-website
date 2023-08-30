import './FooterLinks.css'
import { navLinkItem } from '../../shared/globals';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

type FooterLinksProps = {
    links: navLinkItem[],
    margin?: string,
};

function FooterLinks(props: FooterLinksProps) {
    
    return (
        <div className='footer-links'>
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
                    //all dropdown hyperlinks in footer direct to first item
                    <li 
                    key={link.header}
                    className='default-item' >
                        <Link 
                        to={link.dropdownLinks[0].src}>
                            {link.header}
                        </Link>
                    </li>);
                })}
                <li key="instagram">
                    <Link 
                    to="https://www.instagram.com/the116thinitiative"
                    target="_blank">
                        <FontAwesomeIcon 
                        icon={faInstagram} 
                        style={{color: "#FFFFFF",}}
                        className='instagram-icon' />
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default FooterLinks;