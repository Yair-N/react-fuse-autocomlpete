import './App.css';
import { useEffect, useState } from 'react';
import Autocomplete from './components/Autocomplete';
import { countries } from './api/GetCoutries';

function App() {
  const [country_list, setCountry_list] = useState({})
  const result = async () => {
    let response =await countries()
    sessionStorage.setItem('countries', JSON.stringify(response.data))
    setCountry_list(response.data)
  }

  useEffect(() => {
    let countries_state = sessionStorage.getItem('countries')
    console.log('countries',countries_state)

    if ( countries_state !== 'undefined' && countries_state !== null) {
      setCountry_list(JSON.parse(countries_state))
    }else{
    console.log('no countries stored')
      result()}
  }, [])

 

  return (
    <Autocomplete items={country_list} />
  );
}

export default App;
