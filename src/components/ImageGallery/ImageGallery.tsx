import Image from './Image.tsx';

type ImageProps = {
    imgLink: string[]
}

function ImageGallery (props: ImageProps){
    return (   
        <div className='imgFeedContainer'>
        {props.imgLink.map((link) => {
            return (
                <Image imgLinks={link}/>
            )
        }
        )}
        </div>
    )
}

export default ImageGallery;