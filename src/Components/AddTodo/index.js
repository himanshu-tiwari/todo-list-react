import React, { Component } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { addTodo } from '../../store/actions/todoActions';

class AddTodo extends Component {
    state = {
        content: ''
    };

    handleChange = (e) => {
        this.setState({
            ...this.state,
            content: e.target.value
        });
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        if (this.state.content.length) {
            this.props.addTodo(this.state);
        }
    };

    render() {
        return(
            <div className="add-todo">
                <form className="add-todo-form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Add a new todo"
                        value={this.state.content}
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => dispatch(addTodo(todo))
    }
};

export default connect(null, mapDispatchToProps)(AddTodo);