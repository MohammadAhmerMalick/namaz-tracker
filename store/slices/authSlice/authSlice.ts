import { createSlice } from '@reduxjs/toolkit'

import { loginReducer } from './subSlice/loginSubSlice'
import { signupReducer } from './subSlice/signupSubSlice'

export interface InitialState {
  signup: {
    errors: string[]
    isLoading: boolean
  }
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
  signup: {
    errors: [],
    isLoading: false,
  },
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
    signupReducer(builder)
    loginReducer(builder)
  },
})

export const authReducer = auth.reducer
