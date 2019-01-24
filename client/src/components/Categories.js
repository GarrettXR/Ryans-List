import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link} from 'react-router-dom'
import { getCategories } from '../actions/listings';
import '../styles/App.css'

class Categories extends Component {
 
  componentDidMount() {
    getCategories()
  }
  
  render() {
    return (
      <div id="main">
        {this.props.categories.map(category => (
            <div className="parentCat" key={'category' + category.id}>
              <h3><Link to={"/" + category.slug}>{category.name}</Link></h3>
              <ul>
                {category.subcats.map(subcat => (
                  <li key={'category' + subcat.id}><Link to={"/" + subcat.slug}>{subcat.name}</Link></li>
                ))}
              </ul>
            </div>
         ))}
      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
    categories: appState.listingsReducer.categories
  }
}

export default connect(mapStateToProps)(Categories)