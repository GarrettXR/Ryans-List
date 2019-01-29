import React, { Component } from 'react'
import { createPost } from '../actions/listings'
import { connect } from 'react-redux'

class Create extends Component {
    
    state = {
        image: '',
        listingName: '',
        description: ''
    }
    
  handleSubmit = (e) => {
    e.preventDefault()
    createPost({
        image: this.state.image,
        listingName: this.state.listingName,
        description: this.state.description,
        slug: this.props.match.params.slug
    }).then(()=> {
        this.props.history.goBack()
    })
  }

  handleChange =(e) => {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
            <div>
                <input type="text" name="image" onChange={this.handleChange} placeholder="Picture URL" value={this.state.image} />
            </div>
            <div>
                <input type="text" name="listingName" onChange={this.handleChange} placeholder="Listing Name" value={this.state.name} />
            </div>
            <div>
                <textarea name="description" onChange={this.handleChange} placeholder="Enter Listing Description" value={this.state.description}></textarea>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
            </form>
        </div>
    )
  }
}

function mapStateToProps(appState) {
    return {
      
    }
  }
  
  export default connect(mapStateToProps)(Create)