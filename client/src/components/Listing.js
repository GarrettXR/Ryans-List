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
            <div id="listingBody">
                 <p>{this.props.current.img}</p>
                 <p>{this.props.current.listing_name}</p>
                 <p>{this.props.current.description}</p>
            </div>
        )
    }
    
}

function mapStateToProps(appState) {
    console.log(appState)
    return {
        current: appState.listingsReducer.currentListing
    }
  }

export default connect(mapStateToProps)(Listing)