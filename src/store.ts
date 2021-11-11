import { AnyAction } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import users from './reducers/users'
import { ThunkAction } from 'redux-thunk'

export const store = configureStore({
  reducer: {
    users,
  },
})

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
