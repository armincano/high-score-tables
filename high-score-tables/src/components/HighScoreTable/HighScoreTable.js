import React, { useState, useEffect } from "react";
import PlayerScoreItem from "./PlayerScoreItem/PlayerScoreItem";

function HighScoreTable(props) {
	const [scores, setScores] = useState(
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
		setScores(props.scores)
	}, [props]);

	const sortDescendingScores = scores => scores?.scores.sort(
		(a,b) => b?.s - a?.s
	);
	const sortAscendingScores = scores => scores?.scores.sort(
		(a,b) => a?.s - b?.s
	);
	
	(props.isSortDescendingScores) ? sortDescendingScores(scores) : sortAscendingScores(scores)

    const listScores = scores?.scores.map(score =>
        <PlayerScoreItem key={score.n+score.s} score={score}/>)

	return (
       
		<div>
			<h1>{scores?.name}</h1>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">name</th>
						<th scope="col">score</th>
					</tr>
				</thead>
				<tbody>{listScores}</tbody>
			</table>
		</div>
	);
}
export default HighScoreTable;
