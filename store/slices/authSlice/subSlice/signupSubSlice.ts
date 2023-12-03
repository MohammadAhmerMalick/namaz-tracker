import {
  createAsyncThunk,
  type PayloadAction,
  type ActionReducerMapBuilder,
} from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import callAPI from '@/network/functions'

import type { InitialState } from '../authSlice'

interface Payload {
  email: string
  password: string
}

export const signupAction = createAsyncThunk(
  'signupAction',
  async (payload: Payload, { rejectWithValue }) => {
    const res = await callAPI.post('./api/signup', payload)
    if (res.status === 'success') return res.data

    // this is handled error
    if (res.status === 'error')
      res.message.forEach((error) => toast.error(error))

    return rejectWithValue(res)
  }
)

export const signupReducer = (
  builder: ActionReducerMapBuilder<InitialState>
) => {
  builder.addCase(signupAction.pending, (state: InitialState) => ({
    ...state,
    signup: {
      ...state.signup,
      isLoading: true,
    },
  }))
  builder.addCase(
    signupAction.fulfilled,
    (
      state: InitialState,
      { payload }: PayloadAction<InitialState['login']['data']>
    ) => ({
      ...state,
      loogin: {
        ...state.login,
        data: payload,
      },
      signup: {
        ...state.signup,
        isLoading: false,
        errors: [],
      },
    })
  )
  builder.addCase(
    signupAction.rejected,
    (state: InitialState, { payload }: PayloadAction<any>) => ({
      ...state,
      signup: {
        ...state.signup,
        isLoading: false,
        errors: payload.message,
      },
    })
  )
}
