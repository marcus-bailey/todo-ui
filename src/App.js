import React from 'react'
import axios from 'axios'

const retrieve = async () => {
  // let { value } = await( await fetch(`/api/message`)).json()
  const url = '/api/message'
  return axios
    .get(url)
    .then(function(response) {
      console.log(response)
      return response
    })
    .catch(function(error) {
      // handle error
      console.log(`[api error]: ${error}`);
      return [];
    })
  // console.log(value)
  // return value
}

function App() {
  const value = retrieve()
  return <div>Hello {value}</div>;
}

export default App;
