const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLE_MENU = 'TOGGLE_MENU';


export const addTodo = (text: string) => {
    return {
        type: ADD_TODO,
        text
    }
}

export const deleteTodo = (id: string | number) => {
    return {
        type: DELETE_TODO,
        id
    }
}

export const toggleMenu = () => {
    return {
        type: TOGGLE_MENU
    }
}