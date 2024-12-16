export interface Todo {
    id: number;
    text: string;
}

export const InitialState = {
    todo: [] as Todo[],
    menu: false
}

export const menuReducer = (state = InitialState, action: {type: 'TOGGLE_MENU'}) => {
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