import React, { useState, useEffect } from "react";
import { MenuItem, FormControl, Select } from "@material-ui/core";

import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(["worldwide"]);

  useEffect(() => {
    const getContriesdata = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json()) // only taking json part
        .then((data) => {
          const countries = data.map((country) => ({
            // iterating through every value of the json
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
        });
    };

    getContriesdata(); // this is how we call an async function.
  }, []);

  const onCountryChange = (event) => {
    // this code hels dinamically set the value of menu on change
    const countrycode = event.target.value;

    setCountry(countrycode); // setting the new country
  };

  return (
    <div className='app'>
      <div className='app__header'>
        <h1>Cooooooooooooooer</h1>
        <FormControl className='app__dropdown'>
          <Select variant='outlined' onChange={onCountryChange} value={country}>
            {/*setting worldwide as default */}
            <MenuItem value='worldwide'>worldwide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* Header*/}
      {/*Title and select input droup down */}
      {/* Info boxes*/}
      {/*Info boxes */}
      {/*Info boxes */}

      {/*Table */}
      {/* Graph*/}
    </div>
  );
}

export default App;
