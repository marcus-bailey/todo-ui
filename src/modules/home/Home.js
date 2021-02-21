import React, { useEffect, useState } from 'react'
import axios from 'axios'
import apiConfig from 'config/api/index'


const retrieve = () => {
  // console.log(apiConfig.urls)
  const url = `${apiConfig.baseUrl}/message`
  return axios.get(url)
    .then(function(response) {
      const message = response.data.text
      console.log(message)
      return message
    })
    .catch(function(error) {
      // handle error
      console.log(`[api error]: ${error}`)
      return 'error'
    })
}

const Home = props => {
  const [ message, setMessage ] = useState('loading...')

  useEffect(() => {
    async function fetchData() {
      const data = await retrieve()
      setMessage(data)
    }
    fetchData()
    return () => { }
  }, [])

  return (<div>{message}</div>)
}

export default Home