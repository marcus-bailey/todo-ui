import React from 'react'
import axios from 'axios'

const retrieve = async () => {
  // let { value } = await( await fetch(`/api/message`)).json()
  const url = '/api/message'
  return axios
    .get(url)
    .then(function(response) {
      console.log(response)
      const message = response.data.text
      return message
    })
    .catch(function(error) {
      // handle error
      console.log(`[api error]: ${error}`)
      return []
    })
}

function App() {
  const value = retrieve()
  return <div>{value}</div>
}

export default App
