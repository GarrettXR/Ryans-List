import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategory } from '../actions/listings'
import { Link} from 'react-router-dom'

class Category extends Component {

    componentDidMount() {
        getCategory(this.props.match.params.slug)
    }

    componentWillReceiveProps(newProps) {
        if (newProps.match.params.slug !== this.props.match.params.slug) {
            getCategory(newProps.match.params.slug)
        }
    }

    render() {
        return (
            <div>
              <h1 id="category">{this.props.match.params.slug}</h1>
              <div><Link to={"/create/" + this.props.match.params.slug}>Create Listing</Link></div>
              <div>
                  <ul>
                      {this.props.listings.map(listing => (
                          <li key={"listing" + listing.id}><Link to={"/listing/" + listing.id}><div>{listing.img}</div><div>{listing.listing_name}</div></Link></li>
                      ))}
                  </ul>
              </div>
            </div>
        )
    }
}

function mapStateToProps(appState) {
    console.log(appState)
    return {
      categoryName: appState.listingsReducer.currentCategory,
      listings: appState.listingsReducer.currentCategory.listings,
      slug: appState.listingsReducer.currentCategory.slug
    }
  }

export default connect(mapStateToProps)(Category)