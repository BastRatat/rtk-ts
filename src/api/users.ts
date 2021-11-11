import axios from 'axios'
import { User } from '../types/user'

export const getUser = async (userName: string): Promise<User> => {
  const url = `https://api.github.com/users/${userName}`
  const response = await axios.get(url)
  return response.data
}
