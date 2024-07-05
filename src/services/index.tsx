import {createStore, combineReducers} from 'redux'
import { todoReducer, menuReducer } from './reducers'

const rootReducer = combineReducers({
    todos: todoReducer,
    menu: menuReducer,
})
export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch