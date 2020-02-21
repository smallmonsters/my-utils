const baseURL = 'http://0.0.0.0'

export const baseConfig = {
  baseURL,
  method: 'post',
  timeout: 10 * 1000,
  headers: {
    'content-type': 'application/json; charset=UTF-8'
  }
}
