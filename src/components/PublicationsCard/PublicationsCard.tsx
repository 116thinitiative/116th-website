import { Link } from 'react-router-dom';
import { PublicationsCardProps } from '../../shared/globals';
import './PublicationsCard.css'

function PublicationsCard(props: PublicationsCardProps){
    return (
        <div className='publications-card'>
            <Link 
            to={props.to}
            target="_blank">
                <div className='card-holder'>
                    <h1>{props.title}</h1>
                    <h2>{props.publishedWhere}</h2>
                    <p>{props.preview}</p>
                    <div className='fade-out'></div>
                </div>
            </Link>
        </div>
    );
}

export default PublicationsCard;