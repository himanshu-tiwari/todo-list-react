import React, { Component } from 'react';
import './index.scss';
import AddTodo from '../AddTodo';
import { connect } from 'react-redux';
import TodoCard from './TodoCard';

class Listing extends Component {
    state = {
        todoToEdit: ''
    };

    changeState = (field, value) => {
        this.setState({
            ...this.state,
            [field]: value
        });
    };

    render() {
        console.log(this.props.todos);
        const { todoToEdit } = this.state;
        const { todos } = this.props;

        return(
            <div className="listing">
                Welcome to Todo Land
                <AddTodo />
                
                {
                    Object.keys(todos).length > 0
                    ? Object.values(todos).reverse()
                        .map(todo => {
                            if (todoToEdit === todo.id) {
                                return <AddTodo
                                    todoToEdit={todo}
                                    key={todo.id}
                                    finishEditing={() => this.changeState("todoToEdit", "")}
                                />;
                            } else {
                                return <TodoCard
                                    {...todo}
                                    key={todo.id}
                                    editTodo={(id) => this.changeState("todoToEdit", id)}
                                />;
                            }
                        })
                    : 'All clear here. Have a nice day :)'
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { todos, error, errorMsg } = state.todos;

    return {
        todos,
        error,
        errorMsg
    };
};

export default connect(mapStateToProps)(Listing);