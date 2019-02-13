import React, { Component } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { addTodo, editTodo } from '../../store/actions/todoActions';

class AddTodo extends Component {
    state = {
        content: ''
    };

    changeState = (field, value) => {
        this.setState({
            ...this.state,
            [field]: value
        });
    };
    
    handleSubmit = (e) => {
        e.preventDefault();
        const { content } = this.state;

        if (content.length) {
            const { todoToEdit, addTodo, editTodo, finishEditing } = this.props;

            if (typeof(todoToEdit) === "object" && Object.values(todoToEdit).length) {
                editTodo({ id: todoToEdit.id, content: content, done: todoToEdit.done });
                finishEditing();
            } else {
                addTodo(this.state);
                this.changeState('content', '');
            }
        }
    };

    componentDidMount = () => {
        const { todoToEdit } = this.props;
        if (typeof(todoToEdit) === "object" && Object.values(todoToEdit).length) {
            this.changeState('content', todoToEdit.content);
        }
    };

    render() {
        return(
            <div className="add-todo">
                <form className="add-todo-form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder={`Add a new todo`}
                        value={this.state.content}
                        onChange={(e) => this.changeState('content', e.target.value)}
                    />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => dispatch(addTodo(todo)),
        editTodo: (todo) => dispatch(editTodo(todo))
    }
};

export default connect(null, mapDispatchToProps)(AddTodo);