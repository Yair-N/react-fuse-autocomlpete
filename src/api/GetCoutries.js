import axios from "axios"
const request = axios.create({
    baseURL: 'https://restcountries.com/v2/all',
    // timeout: 1000,
  });

export const countries = () => {
    return new Promise((resolve) => {
        console.log('api exicuted')
        request.get().then((res) => 
        resolve(res)
        )
          })
    }
