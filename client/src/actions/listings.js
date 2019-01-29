import axios from 'axios'
import store from '../store'


axios.defaults.baseURL = '/api'

export function getCategories() {
var promise = new Promise((resolve, reject) => {
    axios.get('/categories').then(resp => {
        store.dispatch({
            type: 'GET_CATEGORIES',
            payload: resp.data.categories
        })
        resolve()
        })
    })
    return promise 
}

export function createPost(post) {
   return axios.post('/listings', post).then(resp => {
    })
}

export function getCategory(slug) {
    if(store.getState().listingsReducer.categories.length === 0) {
        getCategories().then(() => getCat(slug))
    } else {
        getCat(slug)
    }
} 

    function getCat(slug) {
    axios.get('/category/'+ slug).then(resp => {
        store.dispatch({
            type: 'GET_CATEGORY',
            payload: {
                listings: resp.data
            }
        })
    })
}