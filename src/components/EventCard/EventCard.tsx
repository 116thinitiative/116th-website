import { EventCardType } from '../../shared/globals';
import './EventCard.css'
import eventimg from '../../assets/images/events/event1.jpg';

function EventCard(props: EventCardType){
    
    return (
        <div className='event-card'>
            <img className='event-img' src={eventimg}></img>
            <div className='event-desc'>
                <p className='event-title'>{props.title}</p> 
                <p>{props.date}</p>
                <p className='event-desc-text'>{props.description}</p>
                <p className='event-desc-text'><a href={props.rsvp}>RSVP</a></p>
            </div>
        </div>

        
    );
}
 
export default EventCard;