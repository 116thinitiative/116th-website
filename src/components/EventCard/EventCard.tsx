import { EventCardType } from '../../shared/globals';
import './EventCard.css'

function EventCard(props: EventCardType){
    
    return (
        <div className='event-card'>
            <h1>{props.title}</h1>
            <p>{props.startDate.getDate() === props.endDate.getDate() ? 
                props.startDate.toDateString() :
                props.startDate.toDateString() + " - " + props.endDate.toDateString()
            }</p>
            <p>{props.startDate.toLocaleTimeString() === "12:00:00 AM" ? "Time TBD" :
            props.startDate.toLocaleTimeString() + " to " + props.endDate.toLocaleTimeString()}</p>
            <p>{props.location ? `Location: ${props.location}` : 'Location: TBD'}</p>
            <p>{props.description}</p>
        </div>
    );
}

export default EventCard;