import axios from 'axios'
import store from '../store'


axios.defaults.baseURL = '/api'

export function getCategories() {
    axios.get('/categories').then(resp => {
        console.log(resp.data.categories)

        store.dispatch({
            type: 'GET_CATEGORIES',
            payload: resp.data.categories
        })
    })
}

export function

export function getCategory() {
    axios.get('/:category/:id').then(resp => {
        store.dispatch({
            type: 'GET_CATEGORY',
            payload: {
                name: resp.data
            }
        })
    })
}