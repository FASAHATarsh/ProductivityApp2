import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        note: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.note);
        this.setState({ note: '' });
    }

    onChange = (e) => this.setState({ note: e.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input 
                    type="text" 
                    name="note"
                    style={{flex: '10', padding: '5px'}}
                    placeholder="Add Todo..." 
                    value={this.state.note}
                    onChange={this.onChange}
                />
                <input 
                    type="submit"
                    value="Submit"
                    className="btn"
                    style= {{flex: '1'}}
                />
            </form>
        )
    }
}

// PropTypes
AddTodo.PropTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo;
