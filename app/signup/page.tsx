'use client'

import Link from 'next/link'
import { type FormEvent, useState } from 'react'

import Input from '@/components/common/fields/Input'

import { useAppDispatch, useAppSelector } from '@/store/store'
import { signupAction } from '@/store/slices/authSlice/subSlice/signupSubSlice'

import '@/network/firebase'
import routeLinks from '@/network/routeLinks'

const Login = () => {
  const dispatch = useAppDispatch()
  const { isLoading } = useAppSelector((s) => s.authReducer.login)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // login form submission
  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(signupAction({ email, password }))
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign up new account
            </h1>
            <form
              method="POST"
              onSubmit={handleSignUp}
              className="space-y-4 md:space-y-6"
            >
              <Input
                isRequired
                id="email"
                name="email"
                type="email"
                label="Email"
                isDisabled={isLoading}
                placeholder="Enter Your Email Address"
                onChange={({ value }) => setEmail(value)}
              />

              <Input
                isRequired
                id="password"
                name="password"
                type="password"
                label="Password"
                isDisabled={isLoading}
                placeholder="Enter Your Password"
                onChange={({ value }) => setPassword(value)}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign up
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-white">
                Already have an account?{' '}
                <Link
                  href={routeLinks.login}
                  className="font-medium text-black hover:underline dark:text-white"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
