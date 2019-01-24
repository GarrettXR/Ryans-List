import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategory } from '../actions/listings'

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
                <h1>Category</h1>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Category)