import './ImageTitle.css'

type ImageTitleProps = {
    title: string,
    image: string,
    backgroundPosition?: string
}

function ImageTitle(props: ImageTitleProps){

    return (
        <div
        className='image-title-container'
        style={{
            backgroundImage: `url("${props.image}")`,
            backgroundPosition: props.backgroundPosition,
        }}>
            <h1>{props.title}</h1>
        </div>
    );
}

export default ImageTitle;