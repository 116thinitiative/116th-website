import { useState } from 'react';
import './Image.css';

type ImageProps = {
    imgLinks: string
}

function ImageGallery (props: ImageProps){
    const [isOpen, setOpen] = useState(false);
    const imgOnClick = () => {
        setOpen(!isOpen)
    }
    return (
        <>
        <img onClick={imgOnClick} className={`images ${isOpen ? 'big' : 'little'}`} src={props.imgLinks}></img>  
    </>)
}

export default ImageGallery;