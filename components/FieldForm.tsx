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
      <label>{label}</label>
      {errorDiv && errorDiv}
      <input
        defaultValue={defaultValue}
        {...register(property, validations) }
      />
    </div>
  )
}
