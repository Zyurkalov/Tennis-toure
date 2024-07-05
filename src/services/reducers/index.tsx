interface Todo {
    id: number;
    text: string;
}

const initialState = {
    todo: [] as Todo[],
    menu: false
}

export const todoReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case 'ADD_TODO': {
            return {
                ...state,
                todo: [
                    ...state.todo,
                    { id: state.todo.length, text: action.text }
                ]
               
            }
        }
        case 'DELETE_TODO': {
            return {
                ...state,
                todo: [...state.todo].filter((elem) => elem?.id !== action.id)
            }
        }
        default:
            return state
    }
}

export const menuReducer = (state = initialState, action: {type: 'TOGGLE_MENU'}) => {
    switch(action.type) {
        case 'TOGGLE_MENU': 
            return {
                ...state,
                menu: !state.menu
            }
        default:
            return state
    }
}