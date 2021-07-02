import request from 'superagent'

export function getPersonas () {
  return request.get('/api/v1/personas/')
    .then(res => res.body)
}
