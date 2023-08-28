import { Link } from '../../shared/globals';
import './Dropdown.css'

type DropdownProps = {
    header: string,
    links: Link[],
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
                            <a 
                            href={link.src}
                            style={{
                                fontSize: props.linksFontSize,
                            }}>
                                {link.text}
                            </a>
                        </li>)
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Dropdown;