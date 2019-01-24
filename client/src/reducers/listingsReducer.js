const initialState = {
  categories: [],
  currentCategory: {
    category: {},
    listings:[]
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'GET_CATEGORIES':
      return {...state, categories: action.payload}
    case 'GET_CATEGORY':
      return {...state, currentCategory: {
        category: categories.find(category => category.id === payload.id),
        listings: payload.listings
      }}
    default:
      return state
  }
}