import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { todoReducer, menuReducer } from './reducers'

const rootReducer = combineReducers({
    todos: todoReducer,
    menu: menuReducer,
})
export const store = configureStore({reducer: rootReducer})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch