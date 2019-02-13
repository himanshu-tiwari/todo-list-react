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
    order: 1,
    error: false,
    errorMsg: ''
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
            };
        case 'TOGGLE_TODO_DONE':
            return {
                ...state,
                todos: {
                    ...state.todos,
                    [action.id]: { ...state.todos[action.id], done: !state.todos[action.id].done }
                }
            };
        case 'DELETE_TODO':
            delete state.todos[action.id];
            return {
                ...state,
                todos: { ...state.todos }
            };
        case 'EDIT_TODO':
            if (typeof(state.todos[action.newId]) === "object") {
                return {
                    ...state,
                    error: true,
                    errorMsg: 'Another todo with this content already exists!'
                }
            }

            delete state.todos[action.todo.id];
            return {
                ...state,
                todos: { ...state.todos, [action.newId]: action.todo }
            }
        case 'FILTER_TODOS':
            return {
                ...state,
                filterBy: { ...state.filterBy, ...action.data }
            };
        default:
            return state;
    }
};

export default todoReducer;