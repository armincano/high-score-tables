import React, { useState, useEffect } from "react";
import PlayerScoreItem from "./PlayerScoreItem/PlayerScoreItem";

function HighScoreTable(props) {
	const [scores, setScores] = useState();

	useEffect(() => {
		setScores(props.scores);
        console.log(props.scores);
	}, [props.scores]);

    const listScores = scores && scores.scores.map(score =>
        <PlayerScoreItem key={score.n+score.s} score={score}/>)

	return (
        scores &&
		<div>
			<h1>{scores.name}</h1>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">name</th>
						<th scope="col">score</th>
					</tr>
				</thead>
				<tbody>{scores && listScores}</tbody>
			</table>
		</div>
	);
}
export default HighScoreTable;
