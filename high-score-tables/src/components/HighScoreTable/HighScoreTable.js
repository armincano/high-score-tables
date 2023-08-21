import React, { useState, useEffect } from "react";
import PlayerScoreItem from "./PlayerScoreItem/PlayerScoreItem";

function HighScoreTable({countryHighScores, isSortDescendingScores}) {
	const [countryScores, setCountryScores] = useState(
		{
			"name": "Ethiopia",
			"scores": [
				{ "n": "Sub", "s": 9990 },
				{ "n": "lucy", "s": "4134234" },
				{ "n": "DWH", "s": 9999 },
				{ "n": "Hanif", "s": 999999999 }
			]
		}
	);


	useEffect(() => {
		setCountryScores(countryHighScores)
	}, [countryHighScores]);

	const sortDescendingScores = scores => scores?.scores.sort(
		(a,b) => b?.s - a?.s
	);
	const sortAscendingScores = scores => scores?.scores.sort(
		(a,b) => a?.s - b?.s
	);
	
	(isSortDescendingScores) ? sortDescendingScores(countryScores) : sortAscendingScores(countryScores)

    const listScores = countryScores?.scores.map(score =>
        <PlayerScoreItem key={score.n+score.s} score={score}/>)

	return (
       
		<div className="card my-5 border-secondary">
			<h1>{countryScores?.name}</h1>
			<table className="table">
				{/* <thead>
					<tr>
						<th className="w-50" scope="col"><h2>name</h2></th>
						<th className="w-50" scope="col"><h2>score</h2></th>
					</tr>
				</thead> */}
				<tbody>{listScores}</tbody>
			</table>
		</div>
	);
}
export default HighScoreTable;
