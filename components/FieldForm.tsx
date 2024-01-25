import React from 'react'
import { showError } from '@/lib/helpers/errors'

export default function FieldForm(
  { label, property, defaultValue, register, validations, errors, errorTypes }:
  {
    label: string,
    property: string,
    defaultValue: string | number,
    register: any,
    validations: any
    errors: any,
    errorTypes: Record<string, string>
  }
) {
  const errorDiv = showError(errors, errorTypes, property)
  return(
    <div>
      <label className='block text-sm font-medium leading-6 text-gray-900'>{label}</label>
      {errorDiv && errorDiv}
      <input
        defaultValue={defaultValue}
        {...register(property, validations) }
        className='block w-full rounded-md border-0
py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
ring-gray-300 placeholder:text-gray-400 focus:ring-2
focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6
font-medium text-center'
      />
    </div>
  )
}
