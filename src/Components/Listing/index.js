import React, { Component } from 'react';
import './index.scss';
import AddTodo from '../AddTodo';
import { connect } from 'react-redux';
import TodoCard from './TodoCard';
import { setFilter, resetMsg } from '../../store/actions/todoActions';
import Alert from './Alert';
import { filterTodos } from '../../helpers/lsitingHelpers';

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

    componentDidUpdate() {
        setTimeout(this.props.resetMsg, this.props.error ? 4000 : 2000);
    }

    render() {
        const { todoToEdit } = this.state;
        const { todos, filterBy, setFilter, error, msg } = this.props;

        return(
            <div className="listing">
                {
                    msg.length
                    ? <Alert msg={msg} error={error} />
                    : ''
                }
                
                <h2 className="title">Stoic Todo</h2>
                <h3 className="subtitle">- Plan your way to success</h3>

                <div className="top-bar">
                    <p className="incomplete-todos">
                        Incomplete todos: { Object.values(todos).filter(todo => !todo.done).length }
                    </p>

                    <div className="filter-div">
                        Filter: <select value={filterBy.done} onChange={e => setFilter(e.target.value)}>
                            <option value="">All Todos</option>
                            <option value="true">Completed Todos</option>
                            <option value="false">Active Todos</option>
                        </select>
                    </div>
                </div>
                
                <div className="cards-container">
                    <AddTodo />

                    {
                        filterTodos(todos, filterBy).length > 0
                        ? filterTodos(todos, filterBy)
                            .reverse()
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
                        : ''
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { todos, error, msg, filterBy } = state.todos;

    return {
        todos,
        error,
        msg,
        filterBy
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (value) => dispatch(setFilter({ done: value})),
        resetMsg: () => dispatch(resetMsg()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listing);