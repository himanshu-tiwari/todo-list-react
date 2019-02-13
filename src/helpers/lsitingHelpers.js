export const filterTodos = (todos, filterBy) => Object.values(todos)
    .filter(todo => filterBy.done.length ? filterBy.done === ""+todo.done : true);