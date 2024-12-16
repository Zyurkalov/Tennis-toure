import { createSlice } from "@reduxjs/toolkit"
import { InitialState } from "."

export const menuSlice = createSlice({
    name: 'menu',
    initialState: InitialState.menu,
    reducers: {
        toggle: (state) => !state
    }
})
// export const menuReducer = (state = initialState, action: {type: 'TOGGLE_MENU'}) => {
//     switch(action.type) {
//         case 'TOGGLE_MENU': 
//             return {
//                 ...state,
//                 menu: !state.menu
//             }
//         default:
//             return state
//     }
// }
export default menuSlice.reducer
export const { toggle } = menuSlice.actions