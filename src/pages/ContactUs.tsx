import './ContactUs.css'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import contact from '../assets/images/contact.jpg'

function ContactUs(){
    return (
        <>
            <Header />
            <div className="blurb">
                <p className="contacttext">Contact us:</p>
                <p className="contacttext">You can email us at <a href="mailto:116thinitiative@gmail.com">
                116thinitiative@gmail.com</a>.</p> 
                <p className="contacttext">Or, click here to join our mailing list for occasional updates.</p>
                <p className="contacttext">For tuition assistance or other funding requests, please fill out our <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSc8Cs8eqjovbJHfVpDcl0RySdQ107vwaNiYMNR64IyZ1BY3IQ/viewform">
                form</a>.</p>
            </div>
            <img className="contactimg" src={contact}></img>
            <Footer />
        </>
    );
}

export default ContactUs;