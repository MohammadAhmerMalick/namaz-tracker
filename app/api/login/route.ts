import { loginUser } from './Controller'

export const GET = async (request: Request) => {
  // const res = await request.json()

  console.log({ request: request.bodyUsed })
  return Response.json({ data: JSON.stringify(request.body) })
}

export const POST = async (request: Request) => {
  try {
    const { email, password } = await request.json()

    // return error on form field missing
    if (!email || !password)
      return Response.json({
        data: null,
        stattus: 'error',
        message: ['Email and Password are required'],
      })

    const { status, data, message } = await loginUser(email, password)

    // on successfull login
    if (status === 'success') {
      return Response.json({
        data,
        status: 'success',
        message: ['Successfully logged in'],
      })
    }

    // when login authentication failed
    return Response.json({ status: 'error', data, message })
  } catch (error) {
    console.log({ error })

    // unknown error might be server error
    return Response.json({
      data: '',
      status: 'error',
      message: ['something went wrong'],
    })
  }

  // return Response.json({ data: 'data' })
}
