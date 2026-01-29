import {useDispatch, useSelector} from 'react-redux'
import * as D from '../data'
import * as F from '../store/fetchUser'
import type {AppState} from '../store'
import {useToggle} from '../hooks'
import {useCallback, useEffect, useState} from 'react'
import {Avatar, Title} from '../components'
import {Button} from '../theme/daisyui'

export default function FetchTest() {
  const dispatch = useDispatch()
  const {
    loading,
    errorMessage,
    fetchUser: user
  } = useSelector<AppState, AppState>(state => state)

  const getRemoteUser = useCallback(() => {
    dispatch<any>(F.getRemoteUser())
  }, [dispatch])

  const changeName = useCallback(() => {
    dispatch<any>(F.changeNameByFetching())
  }, [dispatch])

  const changeEmail = useCallback(
    () => dispatch(F.changeEmail(D.randomEmail())),
    [dispatch]
  )

  const changePicture = useCallback(
    () => dispatch(F.changePicture({large: D.randomAvatar()})),
    [dispatch]
  )

  useEffect(getRemoteUser, [getRemoteUser])

  return (
    <section className="mt-4">
      <Title>FetchTest</Title>
      <div className="flex justify-center mt-4">
        <Button className="btn-sm btn btn-primary" onClick={getRemoteUser}>
          get remote user
        </Button>
        <Button className="ml-4 btn-sm btn btn-accent" onClick={changeName}>
          change name
        </Button>
        <Button className="ml-4 btn-sm btn btn-success" onClick={changeEmail}>
          change email
        </Button>
        <Button className="ml-4 btn-sm btn btn-secondary" onClick={changePicture}>
          change picture
        </Button>
      </div>
      {loading && (
        <div className="flex items-center justify-center">
          <button className="btn btn-circle loading"></button>
        </div>
      )}
      {errorMessage.length && (
        <div className="p-4 mt-4 bg-red-200">
          <p className="text-3xl text-red-500 text-bold">{errorMessage}</p>
        </div>
      )}
      <div className="flex justify-center p-4 mt-4">
        <Avatar src={user.picture.large} />
        <div className="ml-4">
          <p className="text-xl text-bold">
            {user.name.title}. {user.name.first} {user.name.last}
          </p>
          <p className="italic text-gray-600">{user.email}</p>
        </div>
      </div>
    </section>
  )
}
