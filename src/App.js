import './App.css';
import { useEffect, useState } from 'react';
import Autocomplete from './components/autocmplete/Autocomplete';
import { countries } from './api/GetCoutries';

function App() {
  const [country_list, setCountry_list] = useState({})
  const result = async () => {
    let response = await countries()
    sessionStorage.setItem('countries', JSON.stringify(response.data))
    setCountry_list(response.data)
  }

  // get a sample json of countries for demo
  useEffect(() => {
    let countries_state = sessionStorage.getItem('countries')
    if (countries_state !== 'undefined' && countries_state !== null) {
      setCountry_list(JSON.parse(countries_state))
    } else {
      console.log('no countries stored')
      result()
    }
  }, [])

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  // goes all the way to Suggestions component
  const suggestionFormat = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left', width:'inherit' }}>{item.cioc} | {item.name} | {item.nativeName}</span>
      </>
    )
  }


  return (
    <Autocomplete
      placeholder={"search a country by name, capital or icio"}
      items={country_list}
      keys_to_display={['name', 'cioc', 'nativeName']}
      options={{ keys: ['name', 'cioc', 'capital'] }}
      suggestionFormat={suggestionFormat}
    />
  );
}

export default App;
