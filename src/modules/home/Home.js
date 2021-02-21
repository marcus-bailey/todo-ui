import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DEV_URL = 'http://localhost:7071/api'
const PROD_URL = '/api'

const baseUrl = process.env.NODE_ENV === 'development' ? DEV_URL : PROD_URL


const retrieve = () => {
  console.log(baseUrl)
  const url = `${baseUrl}/message`
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