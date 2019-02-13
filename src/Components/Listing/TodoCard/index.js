import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { ReactComponent as Check } from '../../../assets/images/icons/tick.svg';
import { markTodoDone } from '../../../store/actions/todoActions';

const TodoCard = (props) => {
    return(
        <div className="todo-card">
            { props.content }
            <Check onClick={() => props.markTodoDone(props.id)} />
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        markTodoDone: (id) => dispatch(markTodoDone(id))
    };
};

export default connect(null, mapDispatchToProps)(TodoCard);