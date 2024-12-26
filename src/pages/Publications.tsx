import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import './Publications.css'
import PublicationsCard from '../components/PublicationsCard/PublicationsCard';
import { publications } from '../shared/globals';
import about1 from '../assets/images/publicationsimg.jpg';

function Publications(){
    
    return(
        <>
            <Header />
            <Sidebar />
            <div className='blurb'><p className='heading'>Press:</p></div>
            <img src={about1} className='pubs-image'></img>
            <div className='blurb'>
            <div className="publications-container">{
                publications.map((publication) => {
                    return (
                    <PublicationsCard 
                    title={publication.title}
                    publishedWhere={publication.publishedWhere}
                    date={publication.date}
                    preview={publication.preview}
                    to={publication.to}/>
                    );
                })
            }</div></div>
            <Footer/>
        </>
    );
}

export default Publications;