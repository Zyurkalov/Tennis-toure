import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './reducers/todoReducer'
import menuReducer from './reducers/menuReducer'
//import { thunk } from 'redux-thunk'

const rootReducer = combineReducers({
    todos: todoReducer,
    menu: menuReducer,
})
export const store = configureStore({
    reducer: rootReducer,
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch