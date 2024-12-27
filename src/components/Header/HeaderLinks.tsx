import './HeaderLinks.css'
import { navLinkItem } from '../../shared/globals';
/*import Dropdown from '../Dropdown/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Button from '../Button/Button';*/
import { Link } from 'react-router-dom'

type HeaderLinksProps = {
    links: navLinkItem[],
    margin?: string,
};

function HeaderLinks(props: HeaderLinksProps) {
    
    return (
        <div className='header-links'>
            {props.links.map((link) => {
                return (
                    <div className='headertext'>
                    <Link to={link.link.src}>
                    {link.link.text}
                    </Link>
                    </div>);
                })}
        </div>
    );
}

export default HeaderLinks;