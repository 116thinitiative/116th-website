import './HomeScreen.css'
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import index1 from '../assets/images/index1.png';
import index2 from '../assets/images/index2.png';
//import descriptionImage from '../assets/images/description-image.jpeg'
//import tuitionImage from '../assets/images/tuition-assistance.jpg'
//import galleryImage1 from '../assets/images/galleryimage1.jpg'
//import communityClosetImage from '../assets/images/Community Closet.jpg'
//import galleryImage2 from '../assets/images/galleryimage2.jpeg'
//import galleryImage3 from '../assets/images/galleryimage3.jpg'
//import galleryImage4 from '../assets/images/galleryimage4.jpg'
//import galleryImage5 from '../assets/images/galleryimage5.jpeg'

function HomeScreen() {
    return (
        <>
            <Header />
            <div className='blurb'>
            <p>Who we are:</p>
            <br></br>
            <p>
            The 116<sup>th</sup> Initiative is a grassroots mutual aid collective comprised of students from Barnard College and Columbia University. 
            We utilize creative organizing strategies to redistribute wealth and resources to financially struggling and 
            underserved students across our campuses.  
            </p></div>
            <img className='img1' src={index1}/>
            <div className='blurb'>
            <p>What we do:</p><br></br>
            <p>
            We provides tuition assistance to students at Columbia University and Barnard College in the form of direct payments via 
            Venmo. Please fill out our <a href="https://docs.google.com/forms/d/e/1FAIpQLSc8Cs8eqjovbJHfVpDcl0RySdQ107vwaNiYMNR64IyZ1BY3IQ/viewform">
            form</a> if you are a student in need!
            </p></div>
            <img className='img2' src={index2}/>
            <Footer />
        </>
    );
}

export default HomeScreen;
