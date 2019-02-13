import React, { Component } from 'react';
import './index.scss';
import AddTodo from '../AddTodo';

class Listing extends Component {
    state = {};

    render() {
        return(
            <div className="listing">
                <AddTodo />
                Listing
            </div>
        )
    }
}

export default Listing;