import { EventCardType } from '../../shared/globals';
import './EventCard.css'

function EventCard(props: EventCardType){
    
    return (
        <div className='event-card'>
            <h1>{props.title}</h1>
            <p>{props.date.toDateString()}</p>
            <p>{props.location ? `Location ${props.location}` : 'Location: TBD'}</p>
            <p>{props.description}</p>
        </div>
    );
}

export default EventCard;