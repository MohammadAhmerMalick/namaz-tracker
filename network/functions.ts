import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export const customAxios = axios.create({
  baseURL: './',
})

interface ResInterface {
  data: any
  message: string[]
  status: 'error' | 'success'
}

interface CallAPI {
  get: (
    url: string,
    config?: AxiosRequestConfig<any> | undefined
  ) => ResInterface | Promise<AxiosResponse<any, any>>
  post: (
    url: string,
    data?: any,
    config?: AxiosRequestConfig<any> | undefined
  ) => ResInterface | Promise<AxiosResponse<any, any>>
}
const callAPI: CallAPI = {
  get: async (url, config) => {
    const res = await customAxios.get(url, config)
    if (res.status === 200) {
      const { data } = res
      return data
    }
    return res
  },
  post: async (url, payload, config) => {
    const res = await customAxios.post(url, payload, config)
    const { data } = res
    return data
  },
}

export default callAPI
