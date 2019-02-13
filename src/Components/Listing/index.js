import React, { Component } from 'react';
import './index.scss';
import AddTodo from '../AddTodo';
import { connect } from 'react-redux';
import TodoCard from './TodoCard';
import { setFilter } from '../../store/actions/todoActions';

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
        const { todoToEdit } = this.state;
        const { todos, filterBy, setFilter } = this.props;

        console.log(filterBy, todos, new Date());
        return(
            <div className="listing">
                Welcome to Todo Land

                Incomplete todos: { Object.values(todos).filter(todo => !todo.done).length }

                Filter: <select value={filterBy.done} onChange={e => setFilter(e.target.value)}>
                    <option value="">All Todos</option>
                    <option value="true">Completed Todos</option>
                    <option value="false">Active Todos</option>
                </select>

                <AddTodo />
                
                {
                    Object.keys(todos).length > 0
                    ? Object.values(todos).reverse()
                        .filter(todo => filterBy.done.length ? filterBy.done === ""+todo.done : true)
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
    const { todos, error, errorMsg, filterBy } = state.todos;

    return {
        todos,
        error,
        errorMsg,
        filterBy
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (value) => {console.log(value); return dispatch(setFilter({ done: value}))}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listing);