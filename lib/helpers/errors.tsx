export const showError = (
  errors: Record<string, any>,
  errorTypes: Record<string, string>,
  property: string
): JSX.Element | undefined => {
  if (errors.hasOwnProperty(property)
    && errorTypes.hasOwnProperty(errors[property].type)) {
    return <div>{errorTypes[errors[property].type]}</div>
  }
}
