import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from ".";

const todoSlice = createSlice({
    name: 'todo',
    initialState: InitialState.todo,
    reducers: {
        add: (state, action) => {
            state.push({
            id: state.length + 1,
            text: action.payload.text
            })
        },
        delete: (state, action) => state.filter((todo) =>
            todo.id !== action.payload.id
        )
    }
})
// export const todoReducer = (state = initialState.todo, action: any) => {
//     switch(action.type) {
//         case 'ADD_TODO': {
//             return {
//                 ...state,
//                 todo: [
//                     ...state,
//                     { id: state.length, text: action.text }
//                 ]
               
//             }
//         }
//         case 'DELETE_TODO': {
//             return {
//                 ...state,
//                 todo: [...state].filter((elem) => elem?.id !== action.id)
//             }
//         }
//         default:
//             return state
//     }
// }
export const { add, delete: deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;