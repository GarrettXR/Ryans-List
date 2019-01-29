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
        category: state.categories.find(category => category.slug === action.payload.slug),
        listings: action.payload.listings
      }}
    default:
      return state
  }
}