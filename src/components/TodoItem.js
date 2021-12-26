import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#fff',
            padding: '10px',
            border: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
        }
    };

    render() {
        const { id, note, completed } = this.props.todo;
        return (
            <div style={ this.getStyle() }>
                <p>
                    <span>
                        <input type="checkbox" onChange={ this.props.markComplete.bind(this, id ) } checked={ completed ? 'checked': '' }/>{' '}
                        {note}
                    </span>
                    <button onClick={this.props.delTodo.bind(this, id)} style={{ float: 'right' }}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.PropTypes = {
    todos: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default TodoItem;