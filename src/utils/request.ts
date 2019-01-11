import axios from 'axios'

export default function request(
  url: string,
  method: string = 'get',
  data?: any,
  config?: any
) {
  return axios({
    method,
    url,
    data,
    ...config,
  })
    .then(response => {
      if (response.status !== 200) {
        throw response
      }
      return response
    })
    .catch(error => {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else if (error.request) {
        // The request was made but no response was received
        console.log('etc error', error)
      }
      return Promise.reject(error)
    })
}
