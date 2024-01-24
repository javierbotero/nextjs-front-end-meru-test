export const localFetch = (
  url: string,
  method ='GET',
  headers = {},
  body: Record<string, any> | null = null
): Promise<Response> => {
  headers = Object.assign({
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": `Bearer ${process.env.TOKEN}`
  }, headers)
  let payload = { method, headers }

  if (body) {
    payload = Object.assign(payload, { body: JSON.stringify(body) })
  }

  return fetch(url, payload)
}

export const checkResponse = (data: any): void => {
  if (data.error) { throw new Error(data.error) }
}
