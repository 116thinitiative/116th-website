import './AboutUs.css'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Accordion from '../components/Accordion/Accordion';
import about1 from '../assets/images/about1.png';
import about2 from '../assets/images/about2.png';
import about3 from '../assets/images/about3.png';
/*import { Link } from 'react-router-dom';*/

function AboutUs (){
    const accordionItems = [
        {
          title: 'Need for our work:',
          content: (
            <div><p className='desc'>
            First-generation and low income (FGLI) students are incredibly underserved at Columbia and Barnard, and often overlooked by institutional 
            measures meant to address these inequalities. Despite the university's financial aid policies, there are a variety of costs beyond tuition that 
            the university is unwilling to support students with. These financial burdens cause unnecessary stress on students, who must address 
            these challenges on their own, often by taking on multiple part-time jobs on top of their coursework.  
            </p>
            <p className='desc'>
            The 116th Initiative emphasizes how powerful individuals can be when they are given a space to prioritize genuinely caring for one another above 
            schoolwork and career aspirations. Unlike the university, we are able to swiftly and sympathetically address the problems faced by students while 
            also creating trusting, person-to-person connections.
            </p>
            <img className='aboutimg2' src={about2}></img>
            </div>
          ),
        },
        {
          title: 'Our services:',
          content: (
            <div>
            <p className='desc'>
            The 116th Initiative specifically serves first generation and low income students that are looking for non-judgemental support from the 
            surrounding student community. The 116th Initiative prioritizes students' wellbeing, and also has the ability to see where students are 
            struggling and meet them there. 
            </p>
            <p className='desc'>
            In addition to the mutual aid fund, The 116th Initiative also organizes the Community Closet Pop-Up, the 116th Art Fair, and other 
            fundraising/educational events. Visit our <a href="/events">Events</a> page to learn more!
            </p>
            <img className='aboutimg3' src={about3}></img>
            </div>
          ),
        },
        {
          title: 'Our impact:',
          content: (
            <table>
            <tr>
            <td className='td-dollar'> <p className='dollar'>$150</p></td>
            <td> <p className='quotes'>
            "I currently have very little money as in my current total in checking and savings is around $1100, which for NYC is not a lot. 
            Because I pay for all of my expenses independently from my parents (including all bills/my Barnard bill, travel to or from home 
            on breaks, etc), I do not have the means to be able to buy groceries right now…I would really appreciate even just a small amount 
            of money to get groceries in the city. Groceries here are very, very expensive and I don't have the ability to buy them for 
            myself right now."
            </p>
            </td>
            </tr>
            <tr>
            <td className='td-dollar'> <p className='dollar'>$700</p></td>
            <td> <p className='quotes'>
            "Hello, my family does not currently have enough to pay my next tuition installment and pay for my flight home, as we have had to 
            suddenly spend on my sisters medical treatment as she has fallen very ill. This amount would help me meet that amount in time to avoid 
            falling behind on payments even though I am working jobs to try and make up the amount. Thank you."
            </p></td>
            </tr>
            <td className='td-dollar'> <p className='dollar'>$160</p></td>
            <td><p className='quotes'>
            "Basically I'm a low income student (pell grant eligible) and my dad is sick with stage 4 cancer. Recently we learned my dad's cancer 
            has metastasized to his brain…and he is unable to do a lot of daily tasks on his own, and so my household really needs extra support 
            from me right now. I will be going home for four weekends in the next month and a half to be with him and to help out my family. 
            Unfortunately, this means that I have to pay for round trip train tickets every time I go home and it costs $40 each time I go home. 
            $160 could pay for 4 trips home for me and it would be really helpful to have a little extra money to finance this transportation over 
            the next month and a half so I don't have to worry about this expense on top of everything else I've been going through mentally because 
            of my dad's illness. I would be eternally grateful for the financial support for this!"
            </p></td>
            </table>
          ),
        },
      ];
    return (
        <>
            <Header/>
            <div className='blurb'>
            <p className='aboutheading'>About us:</p>
            <p className='aboutus'>
            The 116th Initiative is a three-year-old grassroots mutual aid collective of BIPOC, allies, first-generation and low income students from 
            Barnard College and Columbia University. We utilize creative organizing strategies to redistribute wealth and resources amongst financially 
            struggling and underserved students across our campuses in efforts to combat historical socioeconomic barriers that limit equitable access 
            to higher education. We assist with tuition payment, rent, medical care/bills, psychiatric care, groceries and transportation.
            </p>
            </div>
            <img className='aboutimg1' src={about1}></img>
            <div className="blurb">
            <Accordion items={accordionItems} />
            </div>
            <Footer/>
        </>
    );
}

export default AboutUs;