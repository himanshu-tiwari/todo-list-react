import v35 from 'uuid/v5';

export const addTodo = (todo) => {
    const MY_NAMESPACE = '299f6e91-20fd-4f61-8afc-e6deec6b62d1';
    todo.id = v35(todo.content, MY_NAMESPACE);

    return {
        type: 'ADD_TODO',
        data: todo
    }
};

export const toggleTodoDone = (id) => {
    return {
        type: 'TOGGLE_TODO_DONE',
        id
    };
};
        
export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        id
    };
};