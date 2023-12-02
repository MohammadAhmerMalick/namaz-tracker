import { createSlice } from '@reduxjs/toolkit'

import { loginReducer } from './subSlice/authSubSlice'

export interface InitialState {
  signup: null
  login: {
    data: {
      email: string
      accessToken: string
    }
    errors: string[]
    isLoading: boolean
  }
}

export const initialState: InitialState = {
  signup: null,
  login: {
    data: {
      email: '',
      accessToken: '',
    },
    errors: [],
    isLoading: false,
  },
}

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    loginReducer(builder)
  },
})

export const authReducer = auth.reducer
