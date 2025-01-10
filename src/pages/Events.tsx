import './Events.css'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
/*import ImageTitle from '../components/ImageTitle/ImageTitle';
import eventsImage from '../assets/images/events.jpg'
import EventCard from '../components/EventCard/EventCard';
import { eventCards } from '../shared/globals';*/

function Events(){
    return (
        <>
            <Header />
            <div className='blurb'><p>Events</p>
            <br></br>
            <p>Page under construction—check back soon...</p>
            </div>
            {/*
            <ImageTitle 
            title="Events"
            image={eventsImage}/>
            <div className='recurring-events-container'>
                <h1>Recurring Meetings</h1>
                <ul>
                    <li>Starting September 25th General Body meetings are <strong>Mondays 6:30 to 7:30. (Locations TBD)</strong></li>
                    <li>Since 2021, The 116th Initiative frequently organizes the Community Closet Pop-Up (see below). This academic year, the Community Closet Pop-up will take place once a month, with any remaining clothing being donated to TBD</li>
                    <li>We also facilitate the 116th Art Fair (see below). This April we hosted our most recent fair, which included a guerilla gardening workshop, clothing exchange, a bake sale, and various students selling their art. At the workshop participants created seed bombs — small balls of dirt and seeds that, historically, have been thrown into empty lots to create green spaces — to be used to promote sustainability in their own backyards. This year, we also sold copies of the first edition of the 116th Zine, which included our history, our impact, student and local art and writings about grassroots organizing and community advocacy.</li>
                </ul>
            </div>
            <div className="future-events-container">
                <h1>Future Events</h1>
                {eventCards.map((card) => {
                    return (
                        <EventCard 
                        title={card.title}
                        startDate={card.startDate}
                        endDate={card.endDate}
                        description={card.description}
                        location={card.location}/>
                    )
                })}
            </div> */}
            <div className="frooter"><Footer /></div>
        </>
    );
}

export default Events;