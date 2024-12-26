import { Link } from 'react-router-dom';
import { PublicationsCardProps } from '../../shared/globals';
import './PublicationsCard.css'

function PublicationsCard(props: PublicationsCardProps){
    return (
        <div className='publications-card'>
            <Link 
            to={props.to}
            target="_blank">
            <table>
            <tr>
                <td className='where'>{props.publishedWhere}</td>
                <td><p className='title'>{props.title}</p>
                <p>{props.date}</p>
                <p className='preview'>{props.preview}</p></td>
            </tr>
                </table>
            </Link>
        </div>
    );
}

export default PublicationsCard;