import {
  getUserRequest,
  getUserRequestSuccess,
  getUserRequestFailure,
  resetUser,
  resetUserSuccess,
  resetUserFailure,
} from '../reducers/users'
import { getUser } from '../api/users'
import { AppThunk, AppDispatch } from '../store'

export const fetchUser =
  (userName: string): AppThunk =>
  async (dispatch: AppDispatch) => {
    dispatch(getUserRequest())
    try {
      const user = await getUser(userName)
      dispatch(getUserRequestSuccess(user))
    } catch ({ message }) {
      dispatch(getUserRequestFailure(message as string))
    }
  }

export const removeUser = () => (dispatch: AppDispatch) => {
  dispatch(resetUser())
  try {
    dispatch(resetUserSuccess())
  } catch ({ message }) {
    dispatch(resetUserFailure(message as any))
  }
}
