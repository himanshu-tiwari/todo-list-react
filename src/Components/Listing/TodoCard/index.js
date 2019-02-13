import React from 'react';
import './index.scss';

const TodoCard = (props) => {
    return(
        <div className="todo-card">
            { props.content }
        </div>
    )
};

export default TodoCard;