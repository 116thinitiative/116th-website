import './ContactUs.css'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ImageTitle from '../components/ImageTitle/ImageTitle';
import contactImage from '../assets/images/contact-us.jpeg'
import { Form } from 'react-router-dom';
import EmailForm from '../components/Footer/EmailForm';
import emailjs from '@emailjs/browser';
import { CSSProperties, useRef, useState } from 'react';
import { ClipLoader } from 'react-spinners';

function ContactUs(){
    
    const form: any = useRef();

     //css values for loader button on submit email
     const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
    };
    //state variables for form
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    //state variable to hide the form on submit
    const [isSubmitted, setIsSubmitted] = useState(false);
    //state variable to store if form is loading
    const [isLoading, setIsLoading] = useState(false);
    const[buttonText, setButtonText] = useState("Submit");

    const sendEmail = (e: { preventDefault: () => void; }) => {
        setIsLoading(true);
        setButtonText("");
        e.preventDefault(); // prevents the page from reloading when you hit “Send”

        emailjs.sendForm(import.meta.env.VITE_EMAIL_SERVICE_KEY, import.meta.env.VITE_EMAIL_TEMPLATE_KEY as string, form.current, import.meta.env.VITE_EMAIL_PUBLIC_KEY as string)
            .then((result) => {
                console.log(result);
            }, (error) => {
                setIsLoading(false);
                throw new Error(error.message);
            }).finally(() =>{
                setIsLoading(false);
                setButtonText("Submit");
                setIsSubmitted(true);
                
                setName("");
                setEmail('');
                setMessage('');

                setTimeout(() => {
                    setIsSubmitted(false);
                  }, 2000);
            });
    };


    return (
        <>
            <Header />
            <ImageTitle 
            title='Contact Us'
            image={contactImage}/>
            <div className='contact-us-container'>
                <EmailForm />
            <div className="form-submitted"
            id={isSubmitted ? "fadeIn" : 'fadeOut'}>
                <h1>Message Sent!</h1> 
            </div>
            <div className='send-email-container'>
                <Form id="send-email-form" ref={form} onSubmit={sendEmail}>
                    <h1>Send Us a Message!</h1>
                    <label>Name:</label>
                    <input 
                    type="text"
                    id="name" 
                    name="from_name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required/>
                    <label>Email:</label>
                    <input 
                    type="email"
                    id="email"
                    name='reply_to'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required/>
                    <label>Message:</label>
                    <textarea
                    id='message'
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required>
                    </textarea>
                    <button type="submit">{buttonText}
                    <ClipLoader
                    color={"#FFFFFF"}
                    loading={isLoading}
                    cssOverride={override}
                    size={20}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    speedMultiplier={1}/></button>
                </Form>
            </div>
            </div>
            <Footer />
        </>
    );
}

export default ContactUs;