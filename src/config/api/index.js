
const DEV_URL = 'http://localhost:7071/api'
const PROD_URL = '/api'

const baseUrl = process.env.NODE_ENV === 'development' ? DEV_URL : PROD_URL

exports.baseUrl = baseUrl