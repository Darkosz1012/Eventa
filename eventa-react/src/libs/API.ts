export default class API {
    get(url: URL) {
      return fetch(url)
    }
  
    post(url: URL, options: RequestInit) {
      return fetch(url, {
        method: 'POST',
        ...options,
      })
    }
  }