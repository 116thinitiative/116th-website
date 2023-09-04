import './QuoteCard.css'

type QuoteCardProps = {
    title: string,
    text: string
};


function QuoteCard(props: QuoteCardProps){
    return (
        <div className='quote-card'>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    );
}

export default QuoteCard;