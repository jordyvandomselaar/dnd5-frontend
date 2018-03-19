// @flow

const apiUrl = "http://localhost:8000"

export const get = (url: string): Promise<Response> => fetch(`${apiUrl}${url}`)
