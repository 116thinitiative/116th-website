import './Events.css'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import EventCard from '../components/EventCard/EventCard';
import { eventCards } from '../shared/globals';
import img1 from '../assets/images/events/event1.jpg';
import img2 from '../assets/images/events/event2.jpg';
import img3 from '../assets/images/events/event3.jpg';
import img4 from '../assets/images/events/event4.jpg';

let images: string[] = [img4, img3, img2, img1];

function Events(){
    return (
        <>
            <Header />
            <div className='blurb'>  
            <div className='future-events-container'>
                <p>Future events:</p>
                <p>*** Check back for more updates! ***</p>
            </div>     
            <div className="past-events-container">
                <p>Past events:</p>
                {eventCards.map((card, index) => {
                    return (
                        <EventCard 
                        eventImgArr={images[index]}
                        title={card.title}
                        date={card.date}
                        description={card.description}
                        rsvp={card.rsvp}/>
                    )
                })}
            </div>
            </div>
            <div><Footer /></div>
        </>
    );
}

export default Events;