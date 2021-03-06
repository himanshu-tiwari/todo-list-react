const initState = {
    todos: {
        "669c5b11-00a4-53b5-839b-ff6685d1aa69": {
            id: "669c5b11-00a4-53b5-839b-ff6685d1aa69",
            content: 'Do something',
            done: false
        },
        "41a44f25-1951-5dc9-bc30-0287c8239044": {
            id: "41a44f25-1951-5dc9-bc30-0287c8239044",
            content: 'Do something else',
            done: false
        },
    },
    filterBy: {
        done: ''
    },
    error: false,
    msg: ''
};

const todoReducer = (state= initState, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: {
                    ...state.todos,
                    [action.data.id]: { ...action.data }
                },
                error: false,
                msg: 'New todo added successfully!'
            };

        case 'TOGGLE_TODO_DONE':
            return {
                ...state,
                todos: {
                    ...state.todos,
                    [action.id]: { ...state.todos[action.id], done: !state.todos[action.id].done }
                },
                error: false,
                msg: state.todos[action.id].done ? 'Todo marked as not done!' : 'Todo marked as done!'
            };

        case 'DELETE_TODO':
            delete state.todos[action.id];
            return {
                ...state,
                todos: { ...state.todos },
                error: false,
                msg: 'Todo deleted successfully!'
            };

        case 'EDIT_TODO':
            if (typeof(state.todos[action.newId]) === "object" && state.todos[action.todo.id].content !== action.todo.content) {
                return {
                    ...state,
                    error: true,
                    msg: 'Another todo with this content already exists. Could not make the edit!'
                }
            }

            delete state.todos[action.todo.id];
            return {
                ...state,
                todos: { ...state.todos, [action.newId]: { ...action.todo, id: action.newId } },
                error: false,
                msg: 'Todo edited successfully!'
            }

        case 'FILTER_TODOS':
            return {
                ...state,
                filterBy: { ...state.filterBy, ...action.data },
                error: false,
                msg: ''
            };

        case 'RESET_MSG':
            return {
                ...state,
                error: false,
                msg: ''
            };

        default:
            return {
                ...state,
                msg: '',
                error: false
            };
    }
};

export default todoReducer;