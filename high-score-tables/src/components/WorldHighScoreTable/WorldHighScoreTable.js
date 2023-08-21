import React, { useState, useEffect } from "react";

function WorldHighScoreTable({justScores, isSortDescendingScores}) {
	const [scores, setScores] = useState([
		{ n: "Sub", s: 9990 },
		{ n: "lucy", s: "4134234" },
		{ n: "DWH", s: 9999 },
		{ n: "Hanif", s: 999999999 },
	]);

	useEffect(() => {
		setScores(justScores);
	}, [justScores]);

	const sortDescendingScores = (scores) => scores.sort((a, b) => b?.s - a?.s);
	const sortAscendingScores = (scores) => scores.sort((a, b) => a?.s - b?.s);

	isSortDescendingScores
		? sortDescendingScores(scores)
		: sortAscendingScores(scores);

	return (
		<div className="card my-5 border-primary">
			<div><h1>World High Scores!</h1></div>
			<table className="table">
				{/* <thead>
					<tr>
						<th scope="col"><h2>name</h2></th>
						<th scope="col"><h2>score</h2></th>
					</tr>
				</thead> */}
				<tbody>
					{scores.map((score) => (
						<tr key={score.s+score.n}>
							<td>{score.n}</td>
							<td>{score.s}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default WorldHighScoreTable;
