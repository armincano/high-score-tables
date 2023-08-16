import "./App.css";
import React, { useState, useEffect } from "react";
import data from "./data/allCountryScores.json";
import HighScoreTable from "./components/HighScoreTable/HighScoreTable";
import SortScoresBtn from "./components/SortScoresBtn/SortScoresBtn";
import WorldHighScoreTable from "./components/WorldHighScoreTable/WorldHighScoreTable";

function App() {
	const [countriesScores, setCountriesScores] = useState([
		{
			name: "Ethiopia",
			scores: [
				{ n: "Sub", s: 9990 },
				{ n: "lucy", s: "4134234" },
				{ n: "DWH", s: 9999 },
				{ n: "Hanif", s: 999999999 },
			],
		},
		{
			name: "Scotland",
			scores: [
				{ n: "groundkeeper willie", s: 4000 },
				{ n: "Neill", s: 999999 },
				{ n: "braveheart", s: -200 },
			],
		},
	]);
  const [isSortDescendingScores, setIsSortDescendingScores] = useState(true);

	useEffect(() => {
		setCountriesScores(data);
	}, []);

	const sortFetchDataByCountryName = (data) =>
		data.sort((a, b) => {
			let fa = a?.name.toLowerCase(),
				fb = b?.name.toLowerCase();

			if (fa < fb) {
				return -1;
			}
			if (fa > fb) {
				return 1;
			}
			return 0;
		});
	sortFetchDataByCountryName(countriesScores);

  const toggleSortScores = () => (isSortDescendingScores===true) ? (setIsSortDescendingScores(false),console.log('asc')) : (setIsSortDescendingScores(true),console.log('desc'))

  const allScores = countriesScores.map(countryScores => countryScores.scores).flat()

	const listCountries = countriesScores.map(countryScores => (
		<HighScoreTable key={countryScores.name} scores={countryScores} isSortDescendingScores={isSortDescendingScores} />
	));

	return (
    <div className="App">
      <SortScoresBtn isSortDescendingScores={isSortDescendingScores} toggleSortScores={toggleSortScores}/>
      <WorldHighScoreTable allScores={allScores}/>
      {listCountries}
    </div>
  )
}

export default App;
