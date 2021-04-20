import axios from 'axios'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { newsAPI } from '../../api/api'
import { setNews, getNewsCreator } from '../../redux/newsReducer'
import NewsItem from './newsItem'
import './news.css'

const News =  (props) => {
    useEffect(() => {
        props.getNewsCreator()
    }, [])
    const showNews = props.news.map(item => {
        return <NewsItem title={item.title} description={item.description} urlToImage={item.urlToImage}/>
    })
    return (
        <ul className='news'>
           {showNews}
           
        </ul>
    )
}

const mapStateToProps = (state) => {
   return {news: state.news.news}
}

export default connect(mapStateToProps, {getNewsCreator, setNews})(News) 