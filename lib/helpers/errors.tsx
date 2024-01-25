export const showError = (
  errors: Record<string, any>,
  errorTypes: Record<string, string>,
  property: string
): JSX.Element | undefined => {
  if (errors.hasOwnProperty(property)
    && errorTypes.hasOwnProperty(errors[property].type)) {
    return <div className='error'>{errorTypes[errors[property].type]}</div>
  }
}

export const showNotificationsError = (error: string) => {
  return error.length > 0
    ? <div className='error'>{error}</div>
    : ''
}

export const showNotificationsMessage = (message: string) => {
  return message.length > 0
    ? <div className='message'>{message}</div>
    : ''
}
