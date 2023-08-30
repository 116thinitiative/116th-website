import './FooterLinks.css'
import { navLinkItem } from '../../shared/globals';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

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
                        <a href={link.link.src}>
                            {link.link.text}
                        </a>
                    </li> :
                    //all dropdown hyperlinks in footer direct to first item
                    <li 
                    key={link.header}
                    className='default-item' >
                        <a 
                        href={link.dropdownLinks[0].src}>
                            {link.header}
                        </a>
                    </li>);
                })}
                <li key="instagram">
                    <a 
                    href="https://www.instagram.com/the116thinitiative"
                    target="_blank">
                        <FontAwesomeIcon 
                        icon={faInstagram} 
                        style={{color: "#FFFFFF",}}
                        className='instagram-icon' />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default FooterLinks;