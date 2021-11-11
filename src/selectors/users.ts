import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { UserSlice } from '../types/user'

export const getUser = (state: RootState) => state.users
export const getUserSelector = createSelector(
  getUser,
  (slice: UserSlice) => slice?.user,
)
export const isUserFetching = createSelector(
  getUser,
  (slice: UserSlice) => slice?.isFetchingUser,
)

export const isUserResetting = createSelector(
  getUser,
  (slice: UserSlice) => slice?.isResettingUser,
)

export const hasError = createSelector(
  getUser,
  (slice: UserSlice) => slice?.error,
)
