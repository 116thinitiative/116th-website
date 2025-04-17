import { EventCardType } from '../../shared/globals';
import './EventCard.css'

type EventImg = {
    eventImg: string
} 

type EventType = {
    eventImgArr: string
} & EventCardType



function EventImgs(props: EventImg){
   return (
        <img className='event-img' src={props.eventImg}></img>
   )
}

function EventCard(props: EventType){
    
    return (
        <div className='event-card'>
            <div className='img-container'>
                    <EventImgs eventImg={props.eventImgArr}/>
            </div>
            <div className='event-desc'>
                <p className='event-title'>{props.title}</p> 
                <p>{props.date}</p>
                <p className='event-desc-text'>{props.description}</p>
            </div>
        </div>

        
    );
}
 
export default EventCard;