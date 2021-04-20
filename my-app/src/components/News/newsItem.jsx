import './newItem.css'

const NewsItem = ({ title, description, urlToImage }) => {
    // props.author props.urlToImage props.title props.description
    return (
        <div className='newsItem'>
            <h5 className='title'>{title}</h5>
            <h6 className='description'>{description}</h6>
            <div className='newsItemImageContainer'>
                <img src={urlToImage} alt=""   className='newsItemImage'/>
            </div>

        </div>
    )
}

export default NewsItem