import classNames from 'classnames'
import type { ChangeEvent, FC } from 'react'

interface InputInterface {
  id: string
  name?: string
  label?: string
  isRequired?: boolean
  placeholder?: string
  labelClassName?: string
  inputClassName?: string
  type?: 'text' | 'email' | 'password'
  onChange?(target: HTMLInputElement): void
}

const Input: FC<InputInterface> = ({
  id,
  name = '',
  label = '',
  type = 'text',
  placeholder = '',
  labelClassName = '',
  inputClassName = '',
  isRequired = false,
  onChange = () => {},
}) => {
  const handleChange = (e: ChangeEvent) => {
    if (onChange) onChange(e.target as HTMLInputElement)
  }

  return (
    <label
      htmlFor={id}
      className={classNames(
        'block text-sm font-medium text-gray-900 dark:text-white',
        labelClassName
      )}
    >
      {label}
      <input
        id={id}
        type={type}
        name={name}
        required={isRequired}
        placeholder={placeholder}
        className={classNames(
          'mt-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
          inputClassName
        )}
        onChange={handleChange}
      />
    </label>
  )
}

export default Input
