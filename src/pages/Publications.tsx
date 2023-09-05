import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import publicationsImage from '../assets/images/publications.jpeg'
import './Publications.css'
import ImageTitle from '../components/ImageTitle/ImageTitle';
import PublicationsCard from '../components/PublicationsCard/PublicationsCard';
import { publications } from '../shared/globals';

function Publications(){
    
    return(
        <>
            <Header />
            <ImageTitle 
            title="Publications"
            image={publicationsImage}
            backgroundPosition="20% 60%" />
            <div className="publications-container">{
                publications.map((publication) => {
                    return (
                    <PublicationsCard 
                    title={publication.title}
                    publishedWhere={publication.publishedWhere}
                    preview={publication.preview}
                    to={publication.to}/>
                    );
                })
            }</div>
            <Footer/>
        </>
    );
}

export default Publications;