import './Button.css'

type ButtonProps = {
    text: string,
    color?: string,
    textColor?: string,
    height?: string,
    width?: string,
    onClick: any,
};

function Button(props: ButtonProps) {
    
    return (
        <button 
        className="button"
        id={props.text}
        style={{
            backgroundColor: props.color,
            color: props.textColor,
            height: props.height,
            width: props.width,
        }}
        onClick={props.onClick}>
            {props.text}
        </button>
    );
}

export default Button;