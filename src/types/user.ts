export interface User {
  login: string
  id: number | null
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  name: string
  company: string
  blog: string
  location: string
  email?: any
  hireable?: any
  bio: string
  twitter_username?: any
  public_repos: number | null
  public_gists: number | null
  followers: number | null
  following: number | null
  created_at: string
  updated_at: string
}

export interface UserSlice {
  user: User
  isFetchingUser: boolean
  isResettingUser: boolean
  error: string
}
