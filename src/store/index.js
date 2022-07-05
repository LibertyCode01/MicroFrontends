export function createStore() {
  // return {
  //   arr() {
  //     fetch('https://jsonplaceholder.typicode.com/todos')
  //   .then(response => response.json())
  //   .then(json => api.push(json))
  //   }
  // }
  // console.log(api);
  let count = 0
  const subscribers = []
  let api = []

  let getapi = (arr) => {
    fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => arr.push(json))
  }
  getapi(api)*--------------------------------------
  return {
    get count() {
      return count
    },
    get api() {
      return api
    },
    increment() {
      count++
      subscribers.forEach((fn) => fn())
    },
    subscribe(fn) {
      subscribers.push(fn)
    },
  }
}