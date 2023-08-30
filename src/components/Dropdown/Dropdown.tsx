import { LinkType } from '../../shared/globals';
import { Link } from 'react-router-dom'
import './Dropdown.css'

type DropdownProps = {
    header: string,
    links: LinkType[],
    headerFontSize?: string,
    linksFontSize?: string,
};

function Dropdown(props: DropdownProps){

    return(
        <div className="dropdown">
            <div 
            className='title'
            style={{
                fontSize: props.headerFontSize,
            }}>{props.header}
            </div>
            <div className='dropdown-content'>
                <ul>
                    {props.links.map((link) => {
                        return (
                        <li key={link.text}>
                            <Link 
                            to={link.src}
                            style={{
                                fontSize: props.linksFontSize,
                            }}>
                                {link.text}
                            </Link>
                        </li>)
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Dropdown;