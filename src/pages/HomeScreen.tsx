import './HomeScreen.css'
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { HashLink as ScrollLink } from 'react-router-hash-link';
import descriptionImage from '../assets/images/description-image.jpeg'
import tuitionImage from '../assets/images/tuition-assistance.jpg'
import Button from '../components/Button/Button';
import QuoteCard from '../components/QuoteCard/QuoteCard';
function HomeScreen() {
    
    return (
        <>
            <Header />
            <div 
            className="landing-picture">
                <div 
                className='landing-image'>
                    <ul>
                        <li><ScrollLink smooth to="#description-section">
                            <h1>What We Do</h1>
                        </ScrollLink></li>
                        <li><ScrollLink smooth to="#tuition-section">
                            <h1>Tuition Assistance</h1>
                        </ScrollLink></li>
                        <li><ScrollLink smooth to="#impact-section">
                            <h1>How We Help</h1>
                        </ScrollLink></li>
                        <li><ScrollLink smooth to="#posts-section">
                            <h1>Latest Posts</h1>
                        </ScrollLink></li>
                    </ul>
                </div>
            </div>
            <div className='section-divider' 
            id='description-section'>
                <div className='description-container'>
                    <img 
                    src={descriptionImage}
                    />
                    <div 
                    className='img-description'
                    id='description'>
                        <h1>What is the 116th?</h1>
                        <p>The 116th Initiative is a grassroots mutual aid collective of students from Barnard College and Columbia University. We utilize creative organizing strategies to redistribute wealth and resources to financially struggling and underserved students across our campuses.  
                        </p>
                        <Button 
                        text="Learn More"
                        onClick={()=>{}}
                        />
                    </div>
                </div>
            </div>
            <div className='section-divider' 
            id='tuition-section'>
                <div className='tuition-container'>
                    <div 
                    className='img-description'
                    id='tuition'>
                        <h1>Tuition Assistance</h1>
                        <p>The 116th provides tuition assistance to students at Columia University and Barnard College in the form of direct payments via Venmo. Please fill out our interest form if you are a student in need!
                        </p>
                        <Button 
                        text="Request Funds"
                        onClick={()=>{
                            window.open("https://docs.google.com/forms/d/e/1FAIpQLSc8Cs8eqjovbJHfVpDcl0RySdQ107vwaNiYMNR64IyZ1BY3IQ/viewform")
                        }}
                        />
                    </div>
                    <img 
                    src={tuitionImage}
                    />
                </div>
            </div>
            <div className='section-divider'
            id='impact-section'>
                <h1>Our Impact</h1>
                <h3>Exercepts from requests we've fufilled</h3>
                <div className='quote-section'>
                    <QuoteCard 
                    title='$700'
                    text='"Hello, my family does not currently have enough to pay my next tuition installment and pay for my flight home, as we have had to suddenly spend on my sisters medical treatment as she has fallen very ill. This amount would help me meet that amount in time to avoid falling behind on payments even though I am working jobs to try and make up the amount. Thank you."'/>
                    <QuoteCard 
                    title='$150'
                    text='"I currently have very little money as in my current total in checking and savings is around $1100, which for NYC is not a lot. Because I pay for all of my expenses independently from my parents (including all bills/my Barnard bill, travel to or from home on breaks, etc), I do not have the means to be able to buy groceries right now…I would really appreciate even just a small amount of money to get groceries in the city. Groceries here are very, very expensive and I don`t have the ability to buy them for myself right now."'/>
                    <QuoteCard 
                    title='$160'
                    text='"Basically I`m a low income student (pell grant eligible) and my dad is sick with stage 4 cancer. Recently we learned my dad`s cancer has metastasized to his brain…and he is unable to do a lot of daily tasks on his own, and so my household really needs extra support from me right now. I will be going home for four weekends in the next month and a half to be with him and to help out my family. Unfortunately, this means that I have to pay for round trip train tickets every time I go home and it costs $40 each time I go home. $160 could pay for 4 trips home for me and it would be really helpful to have a little extra money to finance this transportation over the next month and a half so I don`t have to worry about this expense on top of everything else I`ve been going through mentally because of my dad`s illness. I would be eternally grateful for the financial support for this!"'/>
                </div>
            </div>
            <div className='section-divider'
            id='posts-section'>

            </div>
            <Footer />
        </>
    );
}

export default HomeScreen;