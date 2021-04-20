import { newsAPI } from "../api/api"

const SET_NEWS = 'SET_NEWS'
const initialState = {
    news: []
}



export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS: {
            
            return {
                ...state,
                news: action.news
            }
        }
        default: return state
    }
}

export const setNews = (news = []) => {
    return {type: SET_NEWS, news}
}


export const getNewsCreator = () => (dispatch) => {
    
    newsAPI.getNews()
    .then(res => {
        console.log(res);
        dispatch(setNews(res.data.articles))
    
    })
}

