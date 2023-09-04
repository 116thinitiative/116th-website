import './ImageTitle.css'

type ImageTitleProps = {
    title: string,
    image: string,
}

function ImageTitle(props: ImageTitleProps){

    return (
        <div
        className='image-title-container'
        style={{
            backgroundImage: `url("${props.image}")`,
        }}>
            <h1>{props.title}</h1>
        </div>
    );
}

export default ImageTitle;