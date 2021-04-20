import axios from "axios";

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create({
    withCredentials: true,
    baseURL:  'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '7dd25fc3-92c1-4db7-9ab9-f56fd824d13e'
    }
})

export const usersAPI = {
     getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`${baseUrl}users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    getUsers2 (currentPage = 1, pageSize = 10) {
        return instance.get(`${baseUrl}follow?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    unfollow(id = 1) {
        return instance.delete(`${baseUrl}follow/${id}`)
    },
    follow(id = 1){
        return instance.post(`${baseUrl}follow/${id}`)
    },
    authMe(){
        return instance.get(`${baseUrl}auth/me`)
    },
    getUser(id) {
        return profileAPI.getProfile(id)
    }
}

export const profileAPI = {
    getProfile(id) {
        return instance.get(`${baseUrl}profile/${id}`)
    }, 
    getStatus(userId) {
        return instance.get(`${baseUrl}profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`${baseUrl}profile/status`, { status})

    }
}

export const authAPI = {
    login(email, password, rememberMe) {
        return instance.post(`${baseUrl}auth/login`, {email, password, rememberMe})
    },
    logout(email, password, rememberMe) {
        return instance.delete(`${baseUrl}auth/login`)
    }
}

export const newsAPI = {
    getNews() {
        return axios.get('https://newsapi.org/v2/everything?q=keyword&apiKey=cd44970689ac40d7a9e71d4ff5fa25dd')
        
    }
}




