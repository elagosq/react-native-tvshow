import data from '../data.json'
import { Platform } from 'react-native'

const getDataApi = (genre) => {   
    const API = Platform.OS === 'android'
    ? `http://10.0.3.2:8010/api/shows/${genre}`
    : `http://localhost:8010/api/shows/${genre}`      
    return fetch(API)    
        .then(response => Promise.all([response,response.json()]))            
        .catch(error  => console.warn(error))
}

const getAll = () => {
   return data
}

export { getDataApi, getAll }