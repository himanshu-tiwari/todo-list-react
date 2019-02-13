import React, { Component } from 'react';
import './index.scss';
import AddTodo from '../AddTodo';
import { connect } from 'react-redux';
import TodoCard from './TodoCard';

class Listing extends Component {
    state = {};

    render() {
        console.log(this.props.todos);
        return(
            <div className="listing">
                Welcome to Todo Land
                <AddTodo />
                
                {
                    Object.keys(this.props.todos).length > 0
                    ? Object.values(this.props.todos).map(todo => (<TodoCard {...todo} key={todo.id} />))
                    : 'All clear here. Have a nice day :)'
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos.todos
    };
};

export default connect(mapStateToProps)(Listing);