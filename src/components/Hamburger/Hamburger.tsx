import { useState } from 'react';
import { Link } from 'react-router-dom'
import './Hamburger.css';
import '../Sidebar/Sidebar';
import { navLinkItem } from '../../shared/globals';
import Sidebar from '../Sidebar/Sidebar';

type HamLinksProps = {
    links: navLinkItem[],
    margin?: string,
};

function Hamburger(props: HamLinksProps) {
    const [isOpen, setOpen] = useState(false);
    const hamOnClick = () => {
        setOpen(!isOpen)
    }
    return (
        <>
        <div onClick={hamOnClick} className={`hamburger ${isOpen ? 'active' : 'inactive'}`}></div>        
        <div className={`hamLinks ${isOpen ? 'active' : 'inactive'}`}>
            {props.links.map((link) => {
                return (
                    <div className='hamheadertext'>
                    <Link to={link.link.src}>
                    {link.link.text}
                    </Link>
                    </div>);
                })}
            {isOpen && <Sidebar/>}
        </div>

        </>
    )
}

export default Hamburger;