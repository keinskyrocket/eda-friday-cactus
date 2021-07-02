import request from 'superagent'

export function getPersonas () {
  return request.get('/api/v1/persona/')
    .then(res => res.body)
}
