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
        case 'TOGGLE_TODO_DONE':
            return {
                ...state,
                todos: {
                    ...state.todos,
                    [action.id]: { ...state.todos[action.id], done: !state.todos[action.id].done }
                }
            }
        case 'DELETE_TODO':
            delete state.todos[action.id]
            return {
                ...state,
                todos: { ...state.todos }
            }
        default:
            return state;
    }
};

export default todoReducer;