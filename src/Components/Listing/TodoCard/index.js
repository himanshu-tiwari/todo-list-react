import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { ReactComponent as Check } from '../../../assets/images/icons/tick.svg';
import { toggleTodoDone, deleteTodo } from '../../../store/actions/todoActions';
import { ReactComponent as Cross } from '../../../assets/images/icons/close.svg';

const TodoCard = (props) => {
    const { done, content, toggleTodoDone, id, deleteTodo } = props;

    return(
        <div className={`todo-card ${done && 'done'}`}>
            { content }
            <Check onClick={() => toggleTodoDone(id)} className="check" />
            <Cross onClick={() => deleteTodo(id)} className="check" />
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTodoDone: (id) => dispatch(toggleTodoDone(id)),
        deleteTodo: (id) => dispatch(deleteTodo(id))
    };
};

export default connect(null, mapDispatchToProps)(TodoCard);