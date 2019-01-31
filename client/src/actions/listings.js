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
   return axios.post('/listings', post)
}

export function getCategory(slug) {
    if(store.getState().listingsReducer.categories.length === 0) {
        getCategories().then(() => getCat(slug))
    } else {
        getCat(slug)
    }
} 

export function getListing(id) {
    axios.get('/listing/' + id).then(resp => {
        console.log('listing',resp.data[0])
        store.dispatch({
            type: 'GET_LISTING',
            payload: resp.data[0]
        })
    })
}

    function getCat(slug) {
    axios.get('/listings/'+ slug).then(resp => {
        store.dispatch({
            type: 'GET_CATEGORY',
            payload: {
                slug: slug,
                listings: resp.data
            }
        })
    })
}