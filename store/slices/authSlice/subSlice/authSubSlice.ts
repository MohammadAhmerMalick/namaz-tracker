import {
  createAsyncThunk,
  type PayloadAction,
  type ActionReducerMapBuilder,
} from '@reduxjs/toolkit'

import callAPI from '@/network/functions'

import type { InitialState } from '../authSlice'

interface Payload {
  email: string
  password: string
}

export const loginAction = createAsyncThunk(
  'loginAction',
  async (payload: Payload, { rejectWithValue }) => {
    const res = await callAPI.post('./api/login', payload)
    if (res.status === 'success') return res.data
    return rejectWithValue(res)
  }
)

export const loginReducer = (
  builder: ActionReducerMapBuilder<InitialState>
) => {
  builder.addCase(loginAction.pending, (state: InitialState) => ({
    ...state,
    login: {
      ...state.login,
      isLoading: true,
    },
  }))
  builder.addCase(
    loginAction.fulfilled,
    (
      state: InitialState,
      { payload }: PayloadAction<InitialState['login']['data']>
    ) => ({
      ...state,
      login: {
        ...state.login,
        data: payload,
        isLoading: false,
        errors: [],
      },
    })
  )
  builder.addCase(
    loginAction.rejected,
    (state: InitialState, { payload }: PayloadAction<any>) => ({
      ...state,
      login: {
        ...state.login,
        isLoading: false,
        errors: payload.message,
      },
    })
  )
}
