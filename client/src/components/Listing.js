import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getListing } from '../actions/listings'

class Listing extends Component {

    componentDidMount() {
        getListing(this.props.match.params.id)
    }

    componentWillReceiveProps(newProps) {
        if (newProps.match.params.id !== this.props.match.params.id) {
            getListing(newProps.match.params.id)
        }
    }

    render() {
        return (
            <div>
             <p>{this.props.img}</p>
             <p>{this.props.listing_name}</p>
             <p>{this.props.description}</p>
            </div>
        )
    }
    
}

function mapStateToProps(appState) {
    console.log(appState)
    return {
      img: appState.listingsReducer.currentListing.img,
      listing_name: appState.listingsReducer.currentListing.listing_name,
      description: appState.listingReducer.currentListing.description

    }
  }

export default connect(mapStateToProps)(Listing)