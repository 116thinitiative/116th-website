import './FooterLinks.css'
import { footerLinkItem } from '../../shared/globals';
import { Link } from 'react-router-dom';

type FooterLinksProps = {
    links: footerLinkItem[],
    margin?: string,
};

function FooterLinks(props: FooterLinksProps) {
    
    return (
        <div className='footer-links'>
            <ul>
                {props.links.map((link) =>{
                    return (link.type == "default" ? 
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
            </ul>
        </div>
    );
}

export default FooterLinks;