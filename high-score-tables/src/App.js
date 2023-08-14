import './App.css';
import React, { useState, useEffect } from 'react';
import data from './data/allCountryScores.json'
import HighScoreTable from './components/HighScoreTable/HighScoreTable';

function App() {

  const [countriesScores, setCountriesScores] = useState();

  useEffect(() => {
    setCountriesScores(data)
  }, []);

  const listCountries = countriesScores && countriesScores.map(countryScores => 
    <HighScoreTable key={countryScores.name} scores={countryScores}/>
  )

  return (
    <div className="App">
      {countriesScores && listCountries}
    </div>
  );
}

export default App;