import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export class AddTodo extends Component {

  state = {
    title: ''
  }

  onSubmit = (e) => {
    // Because we are using submit. In order to stop sending the information into server used e.prevent.default
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }

  onChange = e => this.setState({[e.target.name]: e.target.value });
    render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input 
          type="text" 
          name="title" 
          style={{ flex: '10', padding: '5px' }}
          placeholder="Add Todo ..."
          value={this.state.title}
          onChange = {this.onChange} 

        />
        <input 
          type="submit" 
          value="Submit" 
          className="btn"
          style={{flex: '1'}}
        />
      </form>
    )
  }
}

export default AddTodo;
