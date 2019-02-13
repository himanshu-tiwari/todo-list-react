const initState = {
    todos: {
        1: { id: 1, content: 'Do something', done: false },
        2: { id: 2, content: 'Do something else', done: false },
    },
    filter: 'completed',
    order: 1,
    limit: 10
};

const todoReducer = (state= initState, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: {
                    ...state.todos,
                    [action.data.id]: { ...action.data }
                }
            }
        case 'MARK_TODO_DONE':
            return {
                ...state,
                todos: {
                    ...state.todos,
                    [action.id]: { ...state.todos[action.id], done: true }
                }
            }
        default:
            return state;
    }
};

export default todoReducer;