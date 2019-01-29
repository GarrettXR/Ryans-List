import { createStore, combineReducers } from 'redux'

import listingsReducer from './reducers/listingsReducer'

const rootReducer = combineReducers({
  listingsReducer
})

const store = createStore(rootReducer)

export default store