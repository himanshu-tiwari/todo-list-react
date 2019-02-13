const initState = {
    todos: [
        { id: 1, content: 'Do something' },
        { id: 2, content: 'Do something else' },
    ],
    done: [],
    filter: 'completed',
    order: 1,
    limit: 10
};

const todoReducer = (state= initState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default todoReducer;