import React from 'react';
import './index.scss';

const Alert = (props) => {
    return(
        <div className={`alert-container ${props.error ? 'error' : 'success'}`}>
            <div className="alert">{ props.msg }</div>
        </div>
    );
};

export default Alert;