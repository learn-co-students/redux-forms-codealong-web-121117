import React, { Component } from 'react'

class CreateTodo extends Component {

  state = {
    text: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  submitTodo = (e) => {
    e.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_TODO',
      payload: this.state
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.submitTodo}>
          <div>
            <label>add todo</label>
            <input type="text" name="text" onChange={this.handleChange}/>
          </div>
            <input type="submit"/>
        </form>
        {this.state.text}
      </div>
    )
  }
}

export default CreateTodo;

// making a form to add todos

//we want to dispatch an 'ADD_TODO' action
//with a payload of the todo

// then when the user clicks the submit button
// we can grab that state
// and call store.dispatch with the todo
