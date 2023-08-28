import logo from '../../assets/logo.svg'

type LogoProps = {
    height?: string,
    width?: string,
    margin?: string,
};

function Logo(props: LogoProps) {
    return (
        <>
            <img 
            src={logo} 
            className="logo" 
            style={{
                height: props.height, 
                width: props.width,
                margin: props.margin,
            }}/>
        </>
    );
}

export default Logo;