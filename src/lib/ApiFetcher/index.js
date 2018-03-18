const apiUrl = "http://localhost:8000"

export const get = url => fetch(`${apiUrl}${url}`)
