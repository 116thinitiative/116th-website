import './AboutUs.css'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ImageTitle from '../components/ImageTitle/ImageTitle';
import aboutUsImage from '../assets/images/aboutUsImage.jpg'
import impactImage from '../assets/images/impact.jpg'
import servicesImage from '../assets/images/services.jpg'
import needImage from '../assets/images/need.jpg'
import { Link } from 'react-router-dom';

function AboutUs (){
    return (
        <>
            <Header/>
            <ImageTitle 
            title="What is the 116th"
            image={aboutUsImage}/>
            <div className='about-us-description'>
                <div className='description-container'>
                    <p id="intro">
                    The 116th Initiative is a two year old grassroots mutual aid collective of BIPOC, allies, first-generation and low income students from Barnard College and Columbia University. We utilize creative organizing strategies to redistribute wealth and resources amongst financially struggling and underserved students across our campuses in efforts to combat historical socioeconomic barriers that limit equitable access to higher education– we assist with tuition payment, rent, medical care/bills, psychiatric care, groceries and transportation. 
                    </p>
                    <h1 id="need-title">Need for Our Work</h1>
                    <div className='about-us-body'>
                        <p id="need-body">
                        <img id='need-image'src={needImage}/>
                        First-generation and low income (FGLI) students are incredibly underserved at Columbia University and Barnard College, and are often overlooked by institutional measures meant to address these inequalities. Despite the university’s financial aid policies, there are a variety of costs beyond tuition that the university is unwilling to support students with, leaving them to fend for themselves without access to basic needs. Some of these basic needs include groceries, transportation, mental health care, and medical prescriptions. These financial burdens cause unnecessary stress on students, who attempt to address these challenges with multiple part-time jobs on top of their rigorous coursework. In addition to the cost of education, New York City has continually increased the cost of living. Columbia University and Barnard College approaches to assist their students only treat them as investments, and not people who should be cared for.

                        <br/><br/>The 116th Initiative emphasizes how powerful individuals can be when they are given a space to prioritize genuinely caring for one another above schoolwork and career aspirations. Unlike the university, we are able to swiftly and sympathetically address the problems faced by students while also creating trusting, person-to-person connections. 

                        </p>
                    </div>
                    <h1 id="services-title">Our Services</h1>
                    <div className='about-us-body'>
                        <img id='services-image'src={servicesImage}/>
                        <p id="services-body">
                        The 116th Initiative specifically serves first generation and low income students that are looking for non-judgemental support from the surrounding student community. The 116th Initiative prioritizes students’ wellbeing, and also has the ability to see where students are struggling and meet them there. 

                        <br/><br/>Since 2021, The 116th Initiative frequently organizes the Community Closet Pop-Up. Hosted alongside the Columbia First-Generation Low Income Network and the Columbia Housing Equity Project, students– specifically those that face financial burdens– are invited to bring in their clothes and exchange them with others. This event provides a welcoming and non-judgemental way for them to get assistance, while encouraging cyclicality on campus. Many students are able to find stylish and unique pieces that reaffirm their identities and help them make friends in the process! 

                        <br/><br/>We also facilitate the 116th Art Fair, a fundraiser for the Mutual Aid Fund where we invite local artists, designers and performers to sell their goods all in one place and donate a portion of their proceeds to the initiative. This April we hosted our most recent fair, which included a guerilla gardening workshop, clothing exchange, a bake sale, and various students selling their art. At the workshop participants created seed bombs — small balls of dirt and seeds that, historically, have been thrown into empty lots to create green spaces — to be used to promote sustainability in their own backyards. This year, we also sold copies of the first edition of the 116th Zine, which included our history, our impact, student and local art and writings about grassroots organizing and community advocacy.

                        </p>
                    </div>
                    <h1 id="impact-title">Impact</h1>
                    <div className='about-us-body'>
                        <img id='impact-image'src={impactImage}/>
                        <p id="impact-body">
                        The 116th Initiative specifically serves first generation and low income students that are looking for non-judgemental support from the surrounding student community. The 116th Initiative prioritizes students’ wellbeing, and also has the ability to see where students are struggling and meet them there. 

                        <br/><br/>Since 2021, The 116th Initiative frequently organizes the Community Closet Pop-Up. Hosted alongside the Columbia First-Generation Low Income Network and the Columbia Housing Equity Project, students– specifically those that face financial burdens– are invited to bring in their clothes and exchange them with others. This event provides a welcoming and non-judgemental way for them to get assistance, while encouraging cyclicality on campus. Many students are able to find stylish and unique pieces that reaffirm their identities and help them make friends in the process! 

                        <br/><br/>We also facilitate the 116th Art Fair, a fundraiser for the Mutual Aid Fund where we invite local artists, designers and performers to sell their goods all in one place and donate a portion of their proceeds to the initiative. This April we hosted our most recent fair, which included a guerilla gardening workshop, clothing exchange, a bake sale, and various students selling their art. At the workshop participants created seed bombs — small balls of dirt and seeds that, historically, have been thrown into empty lots to create green spaces — to be used to promote sustainability in their own backyards. This year, we also sold copies of the first edition of the 116th Zine, which included our history, our impact, student and local art and writings about grassroots organizing and community advocacy.

                        </p>
                    </div>
                </div>
            </div>
            <div className="video-section">
                <h1>Watch us in action!</h1>
                <video 
                src="https://drive.google.com/uc?id=1TSeBbPpcW0LZl8mHXtYUJaky0gply3So"
                controls>
                </video>
                    <p>Video by <Link to="https://www.linkedin.com/in/vanessa-weingrad/" target="_blank">Vanessa Weingrad</Link></p>
            </div>
            <Footer/>
        </>
    );
}

export default AboutUs;