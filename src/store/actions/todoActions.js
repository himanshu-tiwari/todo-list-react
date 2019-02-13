import v35 from 'uuid/v5';
import { MY_NAMESPACE } from '../../config';

export const addTodo = (todo) => {
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
        
export const editTodo = (todo) => {
    return {
        type: 'EDIT_TODO',
        todo,
        newId: v35(todo.content, MY_NAMESPACE)
    };
};
        
export const setFilter = (data) => {
    return {
        type: 'FILTER_TODOS',
        data
    };
};
        
export const resetMsg = () => {
    return { type: 'RESET_MSG' };
};