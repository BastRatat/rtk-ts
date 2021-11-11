import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User, UserSlice } from '../types/user'

const initialState: UserSlice = {
  user: {
    login: '',
    id: null,
    node_id: '',
    avatar_url: '',
    gravatar_id: '',
    url: '',
    html_url: '',
    followers_url: '',
    following_url: '',
    gists_url: '',
    starred_url: '',
    subscriptions_url: '',
    organizations_url: '',
    repos_url: '',
    events_url: '',
    received_events_url: '',
    type: '',
    site_admin: false,
    name: '',
    company: '',
    blog: '',
    location: '',
    email: '',
    hireable: '',
    bio: '',
    twitter_username: '',
    public_repos: null,
    public_gists: null,
    followers: null,
    following: null,
    created_at: '',
    updated_at: '',
  },
  isFetchingUser: false,
  isResettingUser: false,
  error: '',
}

export const users = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUserRequest: state => {
      state.isFetchingUser = !state.isFetchingUser
      state.error = initialState.error
    },
    getUserRequestSuccess: (state, { payload }: PayloadAction<User>) => {
      state.user = payload
      state.isFetchingUser = !state.isFetchingUser
    },
    getUserRequestFailure: (state, { payload }: PayloadAction<string>) => {
      state.error = payload
      state.isFetchingUser = !state.isFetchingUser
    },
    resetUser: state => {
      state.isResettingUser = !state.isResettingUser
      state.error = initialState.error
    },
    resetUserSuccess: state => {
      state.user = initialState.user
      state.isResettingUser = !state.isResettingUser
    },
    resetUserFailure: (state, { payload }: PayloadAction<string>) => {
      state.error = payload
      state.isResettingUser = !state.isResettingUser
    },
  },
})

export const {
  getUserRequest,
  getUserRequestSuccess,
  getUserRequestFailure,
  resetUser,
  resetUserSuccess,
  resetUserFailure,
} = users.actions
export default users.reducer
