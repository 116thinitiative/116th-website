import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import './Gallery.css';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import img1 from '../assets/images/gallery/1.jpg';
import img2 from '../assets/images/gallery/2.jpg';
import img3 from '../assets/images/gallery/3.jpg';
import img4 from '../assets/images/gallery/4.png';
import img5 from '../assets/images/gallery/5.jpg';
import img6 from '../assets/images/gallery/6.jpg';
import img7 from '../assets/images/gallery/7.jpg';
import img8 from '../assets/images/gallery/8.jpg';
import img9 from '../assets/images/gallery/9.jpg';
import img10 from '../assets/images/gallery/10.png';
import img11 from '../assets/images/gallery/11.jpg';
import img12 from '../assets/images/gallery/12.jpg';
import img13 from '../assets/images/gallery/13.jpg';
import img14 from '../assets/images/gallery/14.jpg';
import img15 from '../assets/images/gallery/15.jpg';
import img16 from '../assets/images/gallery/16.jpg';
import img17 from '../assets/images/gallery/17.jpg';
import img18 from '../assets/images/gallery/18.jpg';
import img19 from '../assets/images/gallery/19.jpg';
import img20 from '../assets/images/gallery/20.jpg';

let images: string[] = [img1, img2, img3, img4, img5, img6, img7, img8, img9, 
                        img10, img11, img12, img13, img14, img15, img16, img17,
                        img18, img19, img20];

function Gallery(){
    return (
        <>
            <Header />
            <div className='blurb'>Photo gallery:</div>
            <div className='galleryContainer'>
            <ImageGallery imgLink={images}/>
            </div>
            <Footer />
        </>
    );
}

export default Gallery;