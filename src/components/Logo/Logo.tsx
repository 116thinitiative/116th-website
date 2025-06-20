import logo from '../../assets/logo.png'
import './Logo.css'
import { Link } from 'react-router-dom'

/*type LogoProps = {
    height?: string,
    width?: string,
    margin?: string,
};*/

function Logo(/*props: LogoProps*/) {
    //for now to have home link use a element, change later
    return (
        <>
        <Link
        to='/'>
            <img 
            src={logo} 
            className="logo" 
            /*style={{
                height: props.height, 
                width: props.width,
                margin: props.margin,
            }}*//>
        </Link>
        </>
    );
}

export default Logo;