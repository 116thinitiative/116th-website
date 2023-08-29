import logo from '../../assets/logo.svg'
import './Logo.css'

type LogoProps = {
    height?: string,
    width?: string,
    margin?: string,
};

function Logo(props: LogoProps) {
    //for now to have home link use a element, change later
    return (
        <>
        <a
        href='/'>
            <img 
            src={logo} 
            className="logo" 
            style={{
                height: props.height, 
                width: props.width,
                margin: props.margin,
            }}/>
        </a>
        </>
    );
}

export default Logo;