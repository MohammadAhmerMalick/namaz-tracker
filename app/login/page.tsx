'use client'

import Link from 'next/link'

import Input from '@/components/common/fields/Input'

import routeLinks from '@/network/routeLinks'

const Login = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <Input
                isRequired
                id="email"
                name="email"
                type="email"
                label="Email"
                placeholder="Enter Your Email Address"
                onChange={({ name }) => console.log(name)}
              />

              <Input
                isRequired
                id="password"
                name="password"
                type="password"
                label="Password"
                placeholder="Enter Your Password"
                onChange={({ name }) => console.log(name)}
              />

              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <label
                    htmlFor="remember"
                    className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-300"
                  >
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="flex items-center h-5 w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                    Remember me
                  </label>
                </div>
                <a
                  href="/"
                  className="text-sm font-medium text-black hover:underline dark:text-white"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-white">
                Don’t have an account yet?{' '}
                <Link
                  href={routeLinks.signup}
                  className="font-medium text-black hover:underline dark:text-white"
                >
                  Sign up
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
