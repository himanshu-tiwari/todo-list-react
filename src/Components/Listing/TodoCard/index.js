import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { ReactComponent as Check } from '../../../assets/images/icons/tick.svg';
import { toggleTodoDone } from '../../../store/actions/todoActions';

const TodoCard = (props) => {
    const { done, content, toggleTodoDone, id } = props;

    return(
        <div className={`todo-card ${done && 'done'}`}>
            { content }
            <Check onClick={() => toggleTodoDone(id)} className="check" />
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTodoDone: (id) => dispatch(toggleTodoDone(id))
    };
};

export default connect(null, mapDispatchToProps)(TodoCard);