const API_URL = 'http://localhost:3001/api/v1/users'

const getApi = async() => {
    const response = await fetch(API_URL)
    const data = await response.json()
    console.log('data', data)
    return data
}
getApi()