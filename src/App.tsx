import { useState, FormEvent } from 'react'
import { fetchUser, removeUser } from './actions/users'
import {
  getUserSelector,
  isUserFetching,
  isUserResetting,
  hasError,
} from './selectors/users'
import { useAppDispatch, useAppSelector } from './hooks/redux'

const App = () => {
  const [userInput, setUserInput] = useState('')
  const dispatch = useAppDispatch()
  const currentUser = useAppSelector(getUserSelector)
  const errorMessage = useAppSelector(hasError)
  const isFetching = useAppSelector(isUserFetching)
  const isResetting = useAppSelector(isUserResetting)

  const handleInputChange = (event: FormEvent<HTMLInputElement>): void => {
    setUserInput(event.currentTarget.value)
  }

  const handleFetchUser = (): void => {
    dispatch(fetchUser(userInput))
  }
  const handleRemoveUser = (): void => {
    dispatch(removeUser())
  }

  return (
    <section>
      <input type="text" onChange={handleInputChange} value={userInput}></input>
      <button onClick={handleFetchUser}>FETCH</button>
      <button onClick={handleRemoveUser}>REMOVE</button>
      <>
        {isFetching || isResetting ? (
          <>
            <p>Loading...</p>
          </>
        ) : (
          <>
            {currentUser && (
              <div>{JSON.stringify(currentUser, undefined, 2)}</div>
            )}
          </>
        )}

        {errorMessage && <p>{errorMessage}</p>}
      </>
    </section>
  )
}

export default App
