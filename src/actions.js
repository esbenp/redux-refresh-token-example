import { CALL_API } from './api'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'
export const TOKEN_REFRESH_REQUEST = 'TOKEN_REFRESH_REQUEST'
export const TOKEN_REFRESH_SUCCESS = 'TOKEN_REFRESH_SUCCESS'
export const TOKEN_REFRESH_FAILURE = 'TOKEN_REFRESH_FAILURE'
export const USERS_REQUEST = 'USERS_REQUEST'
export const USERS_SUCCESS = 'USERS_SUCCESS'
export const USERS_FAILURE = 'USERS_FAILURE'

export const attemptTokenRefresh = () => ({
  [CALL_API]: {
    endpoint: '/login/refresh',
    method: 'POST',
    types: [
      TOKEN_REFRESH_REQUEST,
      TOKEN_REFRESH_SUCCESS,
      TOKEN_REFRESH_FAILURE
    ]
  }
})

export const login = () => ({
  [CALL_API]: {
    endpoint: '/login',
    method: 'POST',
    body: {
      email: 'esben@esben.dk',
      password: '1234'
    },
    types: [
      LOGIN_REQUEST,
      LOGIN_SUCCESS,
      LOGIN_FAILURE
    ]
  }
})

export const resource = () => ({
  [CALL_API]: {
    endpoint: '/users',
    method: 'GET',
    types: [
      USERS_REQUEST,
      USERS_SUCCESS,
      USERS_FAILURE
    ]
  }
})

export const logout = () => ({
  [CALL_API]: {
    endpoint: '/logout',
    method: 'POST',
    types: [
      LOGOUT_REQUEST,
      LOGOUT_SUCCESS,
      LOGOUT_FAILURE
    ]
  }
})